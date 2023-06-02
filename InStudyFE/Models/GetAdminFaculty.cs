namespace InStudyFE.Models
{
    public class GetAdminFaculty
    {
        public List<GetFacultyDto> data { get; set; }
        public string message { get; set; }
        public bool success { get; set; }
    }
}
