using InStudyFE.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InStudyFE.Controllers
{
    public class SpecialityController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public SpecialityController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Detail(int specId)
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var faculty = GetFaculty(client, specId);


            await Task.WhenAll(faculty);

            return View(faculty.Result);
        }
        private async Task<GetFacultyDto> GetFaculty(HttpClient client, int specId)
        {
            var response = await client.GetAsync("api/Speciality/GetSpeciality/id?id=" + specId);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<FacultyModel>(responseString);
            var direction = result.data as GetFacultyDto;

            return direction;
        }
    }
}
