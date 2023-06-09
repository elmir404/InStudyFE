using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    public class HeaderController : Controller
    {
        public IActionResult DirectionHeader()
        {
            return View();
        }
        public IActionResult AddDirectionHeader()
        {
            return View();
        }  
        public IActionResult UpdateDirectionHeader()
        {
            return View();
        } 
        public IActionResult CountryHeader()
        {
            return View();
        } 
        public IActionResult AddCountryHeader()
        {
            return View();
        }
        public IActionResult UpdateCountryHeader()
        {
            return View();
        }
        public IActionResult CommentsHeader()
        {
            return View();
        } 
        public IActionResult AddCommentsHeader()
        {
            return View();
        }
        public IActionResult UpdateCommentsHeader()
        {
            return View();
        }
        public IActionResult PartnersHeader()
        {
            return View();
        } 
        public IActionResult AddPartnersHeader()
        {
            return View();
        }
        public IActionResult UpdatePartnersHeader()
        {
            return View();
        } 
        
        public IActionResult ArcticlesHeader()
        {
            return View();
        } 
        public IActionResult AddArcticlesHeader()
        {
            return View();
        } 
        public IActionResult UpdateArcticlesHeader()
        {
            return View();
        }
       
    }
}
