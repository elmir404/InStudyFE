namespace InStudyFE.Models
{
    public class CountryViewModel
    {
        public GetCountryDto? country { get; set; }
        public List<GetUniversityDto>? university { get; set; }
        public List<GetCountryDto>? countries { get; set; }
        public List<GetDirectionDto>? directions { get; set; }
       
    }
}
