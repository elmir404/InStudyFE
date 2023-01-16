using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProgramController : Controller
    {
        public IActionResult ProgramList()
        {
            return View();
        }
        public IActionResult AddProgram()
        {
            return View();
        }
        public IActionResult UpdateProgram()
        {
            return View();
        }
    }
}
