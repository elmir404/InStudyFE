using InStudyFE.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InStudyFE.Controllers
{
    public class FacultyController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public FacultyController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Detail(int facultyId)
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var faculty = GetFaculty(client, facultyId);


            await Task.WhenAll(faculty);

            return View(faculty.Result);
        }
        private async Task<GetFacultyDto> GetFaculty(HttpClient client, int facultyId)
        {
            var response = await client.GetAsync("api/Speciality/GetSpeciality/id?id=" + facultyId);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<FacultyModel>(responseString);
            var direction = result.data as GetFacultyDto;

            return direction;
        }
    }
}
