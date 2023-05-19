using InStudyFE.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
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

            if (program[0] != null)
            {
                form.Add(new StringContent(string.Join(",",program)), "documentSearchModel.ProgramNames");
            }
            if (country[0] != null)
            {
                form.Add(new StringContent(string.Join(",", country)), "documentSearchModel.CountryNames");
            }

            if (faculty[0] !=null)
            {
                form.Add(new StringContent(string.Join(",", faculty)), "documentSearchModel.DirectionNames");
            }
            if(program[0] == null && country[0] == null && faculty[0] == null)
            {
                form.Headers.ContentType.MediaType = "application/json";
            }
            else
            {
                form.Headers.ContentType.MediaType = "multipart/form-data";
            }
            //form.Add(new StringContent(program), "ProgramNames");
            //form.Add(new StringContent(country), "CountryNames");
            //form.Add(new StringContent(faculty), "DirectionNames");
           
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
