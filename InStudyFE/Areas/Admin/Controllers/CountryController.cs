using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    public class CountryController : Controller
    {
        public IActionResult CountryList()
        {
            return View();
        } 
        public IActionResult AddCountry()
        {
            return View();
        }
        public IActionResult UpdateCountry()
        {
            return View();
        }
    }
}
