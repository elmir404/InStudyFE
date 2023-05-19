using InStudyFE.Models;
using Newtonsoft.Json;
using System.Globalization;

namespace InStudyFE.Managers
{
    public class HomeManager
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public HomeManager(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<List<GetDirectionDto>> GetDirections()
        {
            var lang = CultureInfo.CurrentCulture.Name;
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/Direction/GetActiveDirections?Lang="+lang);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<HomeDirectionModel>(responseString);
            var direction = result.data as List<GetDirectionDto>;

            return direction;
        }
        public async Task<List<GetCountryDto>> GetCountries()
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/Country/GetRandomActiveCountries");
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<CountryModel>(responseString);
            var country = result.data as List<GetCountryDto>;

            return country;
        }

        public async Task<GetHeaderDto> GetContents()
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var responseHeader = await client.GetAsync("api/Content/GetLastContent");
            var responseHeaderString = await responseHeader.Content.ReadAsStringAsync();
            var resultHeader = JsonConvert.DeserializeObject<HeaderModel>(responseHeaderString);
            var header = resultHeader.data as GetHeaderDto;

            return header;
        }

        public async Task<List<GetOnboardingDto>> GetHeaders()
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var responseOnboard = await client.GetAsync("api/Header/GetActiveHeaders");
            var responseOnboardString = await responseOnboard.Content.ReadAsStringAsync();
            var resultOnboard = JsonConvert.DeserializeObject<OboardModel>(responseOnboardString);
            var onboard = resultOnboard.data as List<GetOnboardingDto>;

            return onboard;
        }
    }
}
