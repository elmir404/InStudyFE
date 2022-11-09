namespace InStudyFE.Statics
{
    public class GetToken
    {
        private readonly ISession _session;
        public GetToken(IHttpContextAccessor httpContextAccessor)
        {
            _session = httpContextAccessor.HttpContext.Session;
        }
    }
}
