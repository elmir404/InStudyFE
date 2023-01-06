using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    //[CustomAuthorize(claims: "admin")]
    public class ContactController : Controller
    {
        public IActionResult MessageList()
        {
            return View();
        }
    }
}
