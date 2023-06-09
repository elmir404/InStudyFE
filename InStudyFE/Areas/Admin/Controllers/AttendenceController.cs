using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    public class AttendenceController : Controller
    {
        public IActionResult List()
        {
            return View();
        }  
        public IActionResult AddAttendence()
        {
            return View();
        } 
        public IActionResult UpdateAttendence()
        {
            return View();
        } 
        public IActionResult AttendenceTypeList()
        {
            return View();
        } 
        public IActionResult AddAttendenceType()
        {
            return View();
        } 
        public IActionResult UpdateAttendenceType()
        {
            return View();
        }
        
    }
}
