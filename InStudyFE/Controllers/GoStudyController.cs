﻿using InStudyFE.Extensions;
using InStudyFE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InStudyFE.Controllers
{
  
    public class GoStudyController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public GoStudyController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult Detail()
        {
            return View();
        }
       
        public async Task<IActionResult> Index(int studyId)
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var gostudy = GetGoStudyes(client);
            var gostudyFront = GetGoStudyFront(client);
            await Task.WhenAll(gostudy);
            var model = new GoStudyViewModel()
            {
                goStudy=gostudy.Result,
                studyId=studyId,
                goStudyFront=gostudyFront.Result
                

            };
            return View(model);
        }
        private async Task<List<GetGoStudyDto>> GetGoStudyes(HttpClient client)
        {
            var response = await client.GetAsync("api/About/GetActiveAbouts");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<GoStudyModel>(responseString);
            var goStudy = result.data as List<GetGoStudyDto>;

            return goStudy;
        }  
        private async Task<GetGoStudyFrontDto> GetGoStudyFront(HttpClient client)
        {
            var response = await client.GetAsync("api/GoStudyFront/GetLastGoStudyFront");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<GoStudyFrontModel>(responseString);
            var goStudyFront = result.data as GetGoStudyFrontDto;

            return goStudyFront;
        }
    }
}
