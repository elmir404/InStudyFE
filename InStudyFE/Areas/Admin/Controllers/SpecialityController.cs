using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    public class SpecialityController : Controller
    {
        public IActionResult SpecialityList()
        {
            return View();
        }
        public IActionResult AddSpeciality()
        {
            return View();
        }
        public IActionResult UpdateSpeciality()
        {
            return View();
        }
    }
}
