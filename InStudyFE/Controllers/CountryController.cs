using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Controllers
{
    //[Authorize]
    public class CountryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]

        public IActionResult Detail(int id)
        {

            return View();
        }
    }
}
