using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Controllers
{
    
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
