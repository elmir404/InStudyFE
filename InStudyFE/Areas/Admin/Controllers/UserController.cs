using InStudyFE.Extensions;
using InStudyFE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Reflection;
using System.Text;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    [CustomAuthorize]
    //[CustomAuthorize(claims: "admin")]
    public class UserController : Controller
    {

        private readonly IHttpClientFactory _httpClientFactory;
        public UserController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public IActionResult List()
        {
            return View();
        }
        public IActionResult AddUser()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> AddUser(RegisterViewModel model)
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var json = JsonConvert.SerializeObject(model);
            var data = new StringContent(json, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("api/Users/Register", data);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<ApiResponse>(responseString);
            
            if (result.message == "username alreadyused")
            {
                ModelState.AddModelError("", "Username already taken!");
                return View(model);
            }
            if (model.ConfirmPassword != model.Password)
            {
                ModelState.AddModelError("", "Password repetition is not correct!");
                return View(model);
            }
            if (result.message == "email alreadyused")
            {
                ModelState.AddModelError("", "Email already in use!");
                return View(model);
            }
            if (result.message == "unknownerror")
            {
                ModelState.AddModelError("", "An error ocured.Please try again!");
                return View(model);
            }
            return RedirectToAction("List", "User","Admin");
        }
    }
}
