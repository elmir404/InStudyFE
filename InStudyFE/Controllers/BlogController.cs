using InStudyFE.Managers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InStudyFE.Controllers
{
   
    public class BlogController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public BlogController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Detail(int blogId)
        {
            var manager = new BlogManager(_httpClientFactory);

            var blog = await manager.GetBlog(blogId);

            return View(blog);
        }
       
    }
}
