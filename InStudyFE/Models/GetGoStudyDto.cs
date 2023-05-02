namespace InStudyFE.Models
{
    public class GetGoStudyDto
    {
        public int Id { get; set; }
        public string AzHeader { get; set; }
        public string EnHeader { get; set; }
        public string RuHeader { get; set; }

        public string AzDescription { get; set; }
        public string EnDescription { get; set; }
        public string RuDescription { get; set; }

        public DateTime RegDate { get; set; }
        public string InstagramLink { get; set; }
        public string FacebookLink { get; set; }
        public string TwitterLink { get; set; }
        public bool IsActive { get; set; }
        public List<FileDto> AboutFiles { get; set; }
    }
}
