using InStudyFE.Managers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Metrics;

namespace InStudyFE.Controllers
{
    public class ApplyController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ApplyController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<IActionResult> Index()
        {
            var manager = new UniversityManager(_httpClientFactory);
            var countries = await manager.GetActiveCountries();

            var directions = await manager.GetDirections();
            //await Task.WhenAll(country);
            var model = new CountryViewModel()
            {
               
                countries = countries,
                directions = directions



            };
            return View(model);
            
        }
    }
}
