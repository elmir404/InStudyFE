using InStudyFE.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Controllers
{
    //[Authorize]
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
