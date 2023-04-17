using InStudyFE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Net.Http;

namespace InStudyFE.Controllers
{


    [Authorize]
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
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/Country/GetRandomActiveCountries");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<CountryModel>(responseString);
            var country = result.data as List<GetCountryDto>;
            var responseHeader = await client.GetAsync("api/Content/GetLastContent");
            var responseHeaderString = await responseHeader.Content.ReadAsStringAsync();
            var resultHeader = JsonConvert.DeserializeObject<HeaderModel>(responseHeaderString);
            var header = resultHeader.data as GetHeaderDto;
            var responseOnboard = await client.GetAsync("api/Header/GetActiveHeaders");
            var responseOnboardString = await responseOnboard.Content.ReadAsStringAsync();
            var resultOnboard = JsonConvert.DeserializeObject<OboardModel>(responseOnboardString);
            var onboard = resultOnboard.data as List<GetOnboardingDto>;
            var model = new HomeViewModel()
            {
                country = country,
                onboard = onboard,
                header=header,
                
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