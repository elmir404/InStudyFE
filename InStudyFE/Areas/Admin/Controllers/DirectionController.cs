﻿using InStudyFE.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    public class DirectionController : Controller
    {
        public IActionResult DirectionList()
        {
            return View();
        }
        public IActionResult AddDirection()
        {
            return View();
        }
        public IActionResult UpdateDirection()
        {
            return View();
        }
    }
}
