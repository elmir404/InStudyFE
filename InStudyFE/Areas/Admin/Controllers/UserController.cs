using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.FainaAdmin.Controllers
{
    [Area("Admin")]
    //[CustomAuthorize(claims: "admin")]
    public class UserController : Controller
    {
        public IActionResult List()
        {
            return View();
        }
    }
}
