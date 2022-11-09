using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Controllers
{
    
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
