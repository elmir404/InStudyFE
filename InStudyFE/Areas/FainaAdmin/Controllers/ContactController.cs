using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.FainaAdmin.Controllers
{
    [Area("FainaAdmin")]
    [CustomAuthorize(claims: "admin")]
    public class ContactController : Controller
    {
        public IActionResult MessageList()
        {
            return View();
        }
    }
}
