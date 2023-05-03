using InStudyFE.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InStudyFE.Controllers
{
    public class DirectionController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public DirectionController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Detail(int Id)
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var direction = GetDisciplines(client,Id);


            await Task.WhenAll(direction);
           
            return View(direction.Result);
        }
        private async Task<GetDirectionDto> GetDisciplines(HttpClient client, int Id)
        {
            var response = await client.GetAsync("api/Direction/GetDirection?id=" + Id);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<DirectionModel>(responseString);
            var direction = result.data as GetDirectionDto;

            return direction;
        }
    }
}
