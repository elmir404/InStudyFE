using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.FainaAdmin.Controllers
{
    [Area("FainaAdmin")]
    [CustomAuthorize(claims: "admin")]
    public class BlogController : Controller
    {
        public IActionResult AddBlog()
        {
            return View();
        }
        public IActionResult BlogDetail()
        {
            return View();
        }
        public IActionResult List()
        {
            return View();
        }
    }
}
