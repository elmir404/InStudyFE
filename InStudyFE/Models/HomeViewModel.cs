namespace InStudyFE.Models
{
    public class HomeViewModel
    {
        public List<GetCountryDto>? country { get; set; }
        public List<GetOnboardingDto>? onboard { get; set; }
        public List<GetDirectionDto>? directions { get; set; }
        public GetHeaderDto? header { get; set; }
    }
}
