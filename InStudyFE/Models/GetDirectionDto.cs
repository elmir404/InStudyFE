namespace InStudyFE.Models
{
    public class GetDirectionDto
    {
        public int Id { get; set; }
        public string AzName { get; set; }
        public string EnName { get; set; }
        public string RuName { get; set; }
        public string AzDescription { get; set; }
        public string EnDescription { get; set; }
        public string RuDescription { get; set; }
        public List<FileDto> DirectionFiles { get; set; }
        public List<GetDirectionUniversityDto> Universities { get; set; }
        public List<GetDirectionSpecialityDto> Specialities { get; set; }
    }
}
