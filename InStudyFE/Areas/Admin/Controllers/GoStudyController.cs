using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    //[CustomAuthorize(claims: "admin")]
    public class GoStudyController : Controller
    {
        public IActionResult AddGoStudy()
        {
            return View();
        } 
        public IActionResult AddHeader()
        {
            return View();
        }
        public IActionResult List()
        {
            return View();
        }
        public IActionResult HeaderList()
        {
            return View();
        }
        public IActionResult AboutDetail()
        {
            return View();
        }
        public IActionResult UpdateGoStudy()
        {
            return View();
        } 
        public IActionResult UpdateHeader()
        {
            return View();
        }
       
    }
}
