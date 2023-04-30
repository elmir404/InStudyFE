using InStudyFE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InStudyFE.Controllers
{
    //[Authorize]
    public class CountryController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public CountryController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]

        public async Task<IActionResult> Detail(int countryId)
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var country = GetCountries(client,countryId);

          
            await Task.WhenAll(country);
            var model = new CountryViewModel()
            {
                country = country.Result,
               


            };
            return View(model);
        }
        private async Task<GetCountryDto> GetCountries(HttpClient client,int countryId)
        {
            var response = await client.GetAsync("api/Country/GetCountryWithId?id="+countryId);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<CountryDetailModel>(responseString);
            var country = result.data as GetCountryDto;

            return country;
        }

        private async Task<List<GetUniversityDto>> GetUniversity(HttpClient client, int countryId)
        {
            var response = await client.GetAsync("api/University/GetUniversityWithCountryId?countryId="+countryId);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<CountryUniModel>(responseString);
            var university = result.data as List<GetUniversityDto>;

            return university;
        }
    }
}
