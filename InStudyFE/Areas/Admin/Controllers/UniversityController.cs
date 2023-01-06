using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class UniversityController : Controller
    {
        public IActionResult UniversityList()
        {
            return View();
        }
        public IActionResult AddUniversity()
        {
            return View();
        }
        public IActionResult UpdateUniversity()
        {
            return View();
        }
    }
}
