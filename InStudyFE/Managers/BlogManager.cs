using InStudyFE.Models;
using Newtonsoft.Json;

namespace InStudyFE.Managers
{
    public class BlogManager
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public BlogManager(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<GetBlogDto> GetBlog(int Id)
        {
            var client = _httpClientFactory.CreateClient("InStudy");
            var response = await client.GetAsync("api/Blogs/GetBlog?blogId=" + Id);
            var responseString = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<BlogViewModel>(responseString);
            var blog = result.data as GetBlogDto;

            return blog;
        }
    }
}
