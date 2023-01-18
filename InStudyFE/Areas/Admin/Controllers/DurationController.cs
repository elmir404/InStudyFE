using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class DurationController : Controller
	{
		public IActionResult List()
		{
			return View();
		}
		public IActionResult AddDuration()
		{
			return View();
		}
		public IActionResult UpdateDuration()
		{
			return View();
		}
	}
}
