using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
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
		public IActionResult DurationTypeList()
		{
			return View();
		}
		public IActionResult AddDurationType()
		{
			return View();
		}
		public IActionResult UpdateDurationType()
		{
			return View();
		}
	}
}
