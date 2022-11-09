using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.FainaAdmin.Controllers
{
    [Area("FainaAdmin")]
    [CustomAuthorize(claims: "admin")]
    public class AboutController : Controller
    {
        public IActionResult AddAbout()
        {
            return View();
        }
        public IActionResult AboutList()
        {
            return View();
        }
        public IActionResult AboutDetail()
        {
            return View();
        }
        public IActionResult Personal()
        {
            return View();
        }
        public IActionResult AddPersonal()
        {
            return View();
        }
        public IActionResult PersonalDetail()
        {
            return View();
        }
    }
}
