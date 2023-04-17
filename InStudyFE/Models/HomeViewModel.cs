namespace InStudyFE.Models
{
    public class HomeViewModel
    {
        public List<GetCountryDto>? country { get; set; }
        public List<GetOnboardingDto>? onboard { get; set; }
        public GetHeaderDto? header { get; set; }
    }
}
