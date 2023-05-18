using InStudyFE.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Reflection;

namespace InStudyFE.Controllers
{
    public class SearchController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public SearchController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        [HttpGet]
        public async Task<IActionResult> Index(List<string>? program, List<string>? country, List<string>? faculty)
        {
            var client = _httpClientFactory.CreateClient("InStudy");

            var uni = await SarchUnivrsity(client,program,country,faculty);



            return View(uni);
         }
        private async Task<List<GetUniversityDto>> SarchUnivrsity(HttpClient client, List<string>? program, List<string>? country, List<string>? faculty)
        {

            MultipartFormDataContent form = new MultipartFormDataContent();

            if (program != null)
            {
                form.Add(new StringContent(string.Join(",",program)), "documentSearchModel.ProgramNames");
            }
            if (country != null)
            {
                form.Add(new StringContent(string.Join(",", country)), "documentSearchModel.CountryNames");
            }

            if (faculty !=null)
            {
                form.Add(new StringContent(string.Join(",", faculty)), "documentSearchModel.DirectionNames");
            }
                
            //form.Add(new StringContent(program), "ProgramNames");
            //form.Add(new StringContent(country), "CountryNames");
            //form.Add(new StringContent(faculty), "DirectionNames");
            form.Headers.ContentType.MediaType = "application/json";
            var response= await client.PostAsync("api/University/SearchUniversity?currentPage=1&pageSize=100",form);
            Console.WriteLine(response);
            var responseString = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseString);
            var result = JsonConvert.DeserializeObject<SearchModel>(responseString);
            var uni =result.data.value as List<GetUniversityDto>;

            return uni;
        }
    }
}
