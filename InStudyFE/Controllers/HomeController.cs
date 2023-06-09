using Google.Apis.Analytics.v3;
using InStudyFE.Extensions;
using InStudyFE.Helpers;
using InStudyFE.Managers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InStudyFE.Controllers
{


    
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _config;
        private readonly IHttpClientFactory _httpClientFactory;
        public HomeController(ILogger<HomeController> logger, IConfiguration configuration, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _config = configuration;
            _httpClientFactory = httpClientFactory;
        }

        public async Task<IActionResult> Index()
        {
            var manager = new HomeManager(_httpClientFactory);

            var country = await manager.GetCountries();

            var onboard = await manager.GetHeaders();

            var header = await manager.GetContents();
            var direction =await manager.GetDirections();




            var model = new HomeViewModel()
            {
                country = country,
                onboard = onboard,
                header = header,
                directions = direction,

            };
            return View(model);
        }

     

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult SetLanguage(string culture, string url)
        {
            try
            {
                Response.Cookies.Append(
               CookieRequestCultureProvider.DefaultCookieName,
               CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture)),
               new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) });
                return LocalRedirect(url);
            }
            catch (Exception)
            {
                return RedirectToAction(nameof(Index));
                throw;
            }

        }

    }
}