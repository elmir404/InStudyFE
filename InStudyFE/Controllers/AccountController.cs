
using InStudyFE.Extensions;
using InStudyFE.Helpers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace InStudyFE.Controllers
{
    public class AccountController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly ISession _session;
        private readonly IHttpContextAccessor _contextAccessor;
        public AccountController(IHttpClientFactory httpClientFactory, IHttpContextAccessor httpContextAccessor)
        {
            _httpClientFactory = httpClientFactory;
            _contextAccessor = httpContextAccessor;
            _session = httpContextAccessor.HttpContext.Session;
        }
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult Register()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel viewModel)
        {
            var helper = new Helper(_httpClientFactory);
            var tokenResponse = await helper
                                .LoginAsync(viewModel.UserName, viewModel.Password);
            if(tokenResponse== "emailnotverify")
            {
                ModelState.AddModelError("", "Email not verify!");
                return View(viewModel);
            }
            if (tokenResponse == "usernotfound")
            {
                ModelState.AddModelError("", "User not found!");
                return View(viewModel);
            }

            if (!string.IsNullOrEmpty(tokenResponse))
            {
                _session.SetObject("token", tokenResponse);


                var handler = new JwtSecurityTokenHandler();
                var jwtSecurityToken = handler.ReadJwtToken(tokenResponse);
                var email = jwtSecurityToken.Claims.First(claim => claim.Type == "email").Value;
                var role = jwtSecurityToken.Claims.FirstOrDefault(claim => claim.Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/role")?.Value;
                var userName = jwtSecurityToken.Claims.FirstOrDefault(claim => claim.Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata")?.Value;
                var name = jwtSecurityToken.Claims.First(claim => claim.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name").Value;
                var notBefore = jwtSecurityToken.Claims.First(claim => claim.Type == "nbf").Value;
                var expDate = jwtSecurityToken.Claims.First(claim => claim.Type == "exp").Value;
                var audience = jwtSecurityToken.Claims.First(claim => claim.Type == "aud").Value;
                HttpContext.Response.Cookies.Append("user_token", tokenResponse);

                if (role == null)
                    role = "";

                var claims = new List<Claim>
                {

                 new Claim("role", role)
                };

                var authProperties = new AuthenticationProperties
                {
                    IssuedUtc = DateTimeOffset.UtcNow,
                    ExpiresUtc = DateTimeOffset.UtcNow.AddHours(1),
                    IsPersistent = false
                };

                const string authenticationType = "Cookies";
                var claimsIdentity = new ClaimsIdentity(claims, authenticationType);
                await _contextAccessor.HttpContext.SignInAsync(authenticationType, new ClaimsPrincipal(claimsIdentity), authProperties);
                return RedirectToAction("Index", "Home");
            }
            ModelState.AddModelError("Error", "Invalid username or password!");
            return BadRequest();

        }


        public IActionResult EmailConfirm()
        {
            return View();
        }
        public IActionResult ResetPassword()
        {
            return View();
        }
        public IActionResult SendEmail()
        {
            return View();
        }public IActionResult ComingSoon()
        {
            return View();
        }
        public async Task<IActionResult> Logout()
        {
            var logout = new Helper(_httpClientFactory);
            var response = await logout.LogOutAsync();
            await _contextAccessor.HttpContext.SignOutAsync();
            return Ok(response);
        }

    }
}
