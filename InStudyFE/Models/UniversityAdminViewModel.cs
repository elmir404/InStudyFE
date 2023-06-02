namespace InStudyFE.Models
{
    public class UniversityAdminViewModel
    {
        public GetUniversityDto? university { get; set; }
        public List<GetDirectionDto>? direction { get; set; }
        public List<GetFacultyDto>? faculty { get; set; }
        public List<GetCountryIdName>? program { get; set; }
        public List<GetCountryDto>? country { get; set; }
    }
}
