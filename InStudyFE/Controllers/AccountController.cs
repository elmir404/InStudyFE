﻿using InStudyFE.Helpers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace InStudyFE.Controllers
{
    public class AccountController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public AccountController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
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
            if (tokenResponse == "user not found")
            {
                ModelState.AddModelError("", "User not found!");
                return View(viewModel);
            }if (tokenResponse == "loginfiled")
            {
                ModelState.AddModelError("", "Login filed!");
                return View(viewModel);
            }

            ////if (!string.IsNullOrEmpty(tokenResponse))
            {
                //_session.SetObject("token", tokenResponse);

                Response.Cookies.Append("JWToken", tokenResponse);


                //var handler = new JwtSecurityTokenHandler();
                //var jwtSecurityToken = handler.ReadJwtToken(tokenResponse);
                //var email = jwtSecurityToken.Claims.First(claim => claim.Type == "email").Value;
                //var role = jwtSecurityToken.Claims.FirstOrDefault(claim => claim.Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/role")?.Value;
                //var userName = jwtSecurityToken.Claims.FirstOrDefault(claim => claim.Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata")?.Value;
                //var name = jwtSecurityToken.Claims.First(claim => claim.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name").Value;
                //var notBefore = jwtSecurityToken.Claims.First(claim => claim.Type == "nbf").Value;
                //var expDate = jwtSecurityToken.Claims.First(claim => claim.Type == "exp").Value;
                //var audience = jwtSecurityToken.Claims.First(claim => claim.Type == "aud").Value;
                ////HttpContext.Response.Cookies.Append("user_token", tokenResponse);

                //if (role == null)
                //    role = "";

                //var claims = new List<Claim>
                //{

                // new Claim("role", role)
                //};

                //var authProperties = new AuthenticationProperties
                //{
                //    AllowRefresh =true,
                //    ExpiresUtc = DateTime.Now.AddDays(1),
                //    IsPersistent = true
                //};

                //const string authenticationType = "Cookies";
                //var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                //await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);
                return Redirect("/Admin/About/AboutList");
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
            Response.Cookies.Delete("JWToken");

            var logout = new Helper(_httpClientFactory);
            var response = await logout.LogOutAsync();
            //await HttpContext.SignOutAsync();
            return Ok(response);
        }

    }
}
