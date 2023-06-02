using InStudyFE.Managers;
using InStudyFE.Models;
using Microsoft.AspNetCore.Mvc;

namespace InStudyFE.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class UniversityController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public UniversityController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult UniversityList()
        {
            return View();
        }
        public IActionResult AddUniversity()
        {
            return View();
        }
        public async Task<IActionResult> UpdateUniversity(int uniId)
        {
            var manager = new UniversityManager(_httpClientFactory);
            var university = await manager.GetUniversity(uniId);
            var country = await manager.GetActiveCountries();
            var faculty = await manager.GetFaculty();
            var program = await manager.GetPrograms();
            var direction = await manager.GetDirections();
            var model = new UniversityAdminViewModel()
            {
                country=country,
                direction= direction,
                university= university,
                program=program,
                faculty=faculty

            };
            return View(model);
        }
    }
}
