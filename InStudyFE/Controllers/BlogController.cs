using InStudyFE.Managers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics.Metrics;

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
            var blogs = await manager.GetBlogs();
            var model = new BlogDetailViewModel()
            {
                blog=blog,
                blogs=blogs




            };
            return View(model);
        }
       
    }
}
