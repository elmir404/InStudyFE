using InStudyFE.Models;
using Newtonsoft.Json;
using System.Globalization;

namespace InStudyFE.Managers
{
    public class UniversityManager
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public UniversityManager(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<GetUniversityDto> GetUniversity(int uniId)
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/University/GetUniversityWithId?universityId=" + uniId);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<UniversityModel>(responseString);
            var university = result.data as GetUniversityDto;

            return university;
        }
        public async Task<List<GetFacultyDto>> GetFaculty()
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/Speciality/GetActiveSpecialities");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<GetAdminFaculty>(responseString);
            var faculty = result.data as List<GetFacultyDto>;

            return faculty;
        }
        public async Task<List<GetCountryDto>> GetActiveCountries()
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("/api/Country/GetCountriesIdName");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<CountryModel>(responseString);
            var country = result.data as List<GetCountryDto>;
            return country;
        }
        public async Task<List<GetDirectionDto>> GetDirections()
        {
            
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/Direction/GetActiveDirections?Lang=en");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<HomeDirectionModel>(responseString);
            var direction = result.data as List<GetDirectionDto>;

            return direction;
        }
        public async Task<List<GetCountryIdName>> GetPrograms()
        {
            
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/Program/GetActivePrograms");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<ProgramModel>(responseString);
            var program = result.data as List<GetCountryIdName>;

            return program;
        }
    }
}
