namespace InStudyFE.Models
{
    public class GetDirectionUniversityDto
    {
        public int Id { get; set; }

        public string AzName { get; set; }
        public string EnName { get; set; }
        public string RuName { get; set; }
        public string MapAdrress { get; set; }
        public string AzCity { get; set; }
        public string EnCity { get; set; }
        public string RuCity { get; set; }
        public List<FileDto> UniversityFiles { get; set; }   
        public GetCountryIdName Country { get; set; }
    }
}
