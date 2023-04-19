namespace InStudyFE.Models
{
    public class GetUniversityIdNameDto
    {
        public int Id { get; set; }
        public string AzName { get; set; }
        public string EnName { get; set; }
        public string RuName { get; set; }
        public int StudentCount { get; set; }
        public List<FileDto> UniversityFiles { get; set; }
    }
}
