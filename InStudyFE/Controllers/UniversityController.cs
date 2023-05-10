using InStudyFE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;

namespace InStudyFE.Controllers
{
    [Authorize]
    public class UniversityController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public UniversityController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Detail(int uniId)
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var university = GetUniversity(client, uniId);

            await Task.WhenAll(university);
           
            return View(university.Result);
        }
        private async Task<GetUniversityDto> GetUniversity(HttpClient client, int uniId)
        {
            var response = await client.GetAsync("api/University/GetUniversityWithId?universityId=" + uniId);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<UniversityModel>(responseString);
            var university = result.data as GetUniversityDto;

            return university;
        }
    }
}
