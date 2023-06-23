using InStudyFE.Managers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Controllers
{
    
    public class ContactController : Controller
    {

        private readonly IHttpClientFactory _httpClientFactory;

        public ContactController(IHttpClientFactory httpClientFactory)
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
