using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]

    public class ContentController : Controller
    {
        public IActionResult HeaderList()
        {
            return View();
        } 
        public IActionResult AddHeader()
        {
            return View();
        } 
        public IActionResult UpdateHeader()
        {
            return View();
        }
        public IActionResult QuestionList()
        {
            return View();
        }
        public IActionResult PageQuestion()
        {
            return View();
        }
        public IActionResult AddQuestion()
        {
            return View();
        }
        public IActionResult UpdateQuestion()
        {
            return View();
        }
        public IActionResult AddShowedQuestion()
        {
            return View();
        }
        public IActionResult UpdateShowedQuestions()
        {
            return View();
        }
    }
}
