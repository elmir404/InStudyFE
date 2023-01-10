using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class PartnerController : Controller
    {
       
        public IActionResult AddPartner()
        {
            return View();
        }
        public IActionResult PartnerDetail()
        {
            return View();
        }
        public IActionResult UpdatePartner()
        {
            return View();
        }
        public IActionResult List()
        {
            return View();
        }
    }
}
