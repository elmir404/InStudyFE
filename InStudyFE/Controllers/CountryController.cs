using InStudyFE.Managers;
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
        public async Task<IActionResult> Index()
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var country = await GetActiveCountries(client);


            //await Task.WhenAll(country);
          
            return View(country);
        }

        [HttpGet]

        public async Task<IActionResult> Detail(int countryId)
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var country = await GetCountries(client,countryId);
            var manager = new UniversityManager(_httpClientFactory);
            var countries = await manager.GetActiveCountries();

            var directions = await manager.GetDirections();
            //await Task.WhenAll(country);
            var model = new CountryViewModel()
            {
                country = country,
                university = new List<GetUniversityDto>(),
                countries=countries,
                directions=directions
               


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
        private async Task<List<GetCountryDto>> GetActiveCountries(HttpClient client)
        {
            var response = await client.GetAsync("/api/Country/GetCountriesIdName");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<CountryModel>(responseString);
            var country = result.data as List<GetCountryDto>;
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
