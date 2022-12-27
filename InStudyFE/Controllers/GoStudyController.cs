using InStudyFE.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Controllers
{
    [Authorize]
    public class GoStudyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
