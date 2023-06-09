using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    public class RequestController : Controller
    {
        public IActionResult RequestList()
        {
            return View();
        } 
        public IActionResult NonSeedRequestList()
        {
            return View();
        }
        public IActionResult RequestDetail()
        {
            return View();
        }
    }
}
