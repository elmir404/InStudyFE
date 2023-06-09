using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    public class StudentWordsController : Controller
    {
        public IActionResult AddStudentWords()
        {
            return View();
        }
        public IActionResult StudentWordsDetail()
        {
            return View();
        }
        public IActionResult UpdateStudentWords()
        {
            return View();
        }
        public IActionResult List()
        {
            return View();
        }
    }
}
