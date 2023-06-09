using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.FainaAdmin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    //[CustomAuthorize(claims: "admin")]
    public class MeetingsController : Controller
    {
        public IActionResult MeetingList()
        {
            return View();
        }
        public IActionResult ApprovedMeetings()
        {
            return View();
        }
        public IActionResult ActiveMeetings()
        {
            return View();
        }
        public IActionResult CanceledMeetings()
        {
            return View();
        }
    }
}
