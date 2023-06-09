using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.FainaAdmin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    //[CustomAuthorize(claims: "admin")]
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
        public IActionResult UpdateBlog()
        {
            return View();
        }
        public IActionResult List()
        {
            return View();
        }
    }
}
