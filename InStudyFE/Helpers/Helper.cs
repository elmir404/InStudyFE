using InStudyFE.Models;
using Newtonsoft.Json;
using System.Text;

namespace InStudyFE.Helpers
{
    public class Helper
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public Helper(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<string> LoginAsync(string email, string password)
        {

            //var identity = ss.User.Identity as ClaimsIdentity;

            var login = new LoginViewModel { UserName = email, Password = password };
            var client = _httpClientFactory.CreateClient("InStudy");
            var json = JsonConvert.SerializeObject(login);
            var data = new StringContent(json, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("api/Users/LogIn", data);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<ApiResponse>(responseString);
            if (result.data != null)
            {
                var ss = result.data.ToString();
                var cc=JsonConvert.DeserializeObject<AccessToken>(ss);
                return cc.token;
            }
            return result.message;
        }
        public async Task<string> LogOutAsync()
        {

            //var identity = ss.User.Identity as ClaimsIdentity;

            //var login = new LoginViewModel { UserName = email, Password = password };
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.PostAsync("api/Users/LogOut",null);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<ApiResponse>(responseString);
            var ss = result.success.ToString();

            return ss;

        }
    }
}
