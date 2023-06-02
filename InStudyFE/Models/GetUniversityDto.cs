namespace InStudyFE.Models
{
    public class GetUniversityDto
    {
        public int Id { get; set; }
        public string AzName { get; set; }
        public string EnName { get; set; }
        public string RuName { get; set; }

        public string AzDescription { get; set; }
        public string EnDescription { get; set; }
        public string RuDescription { get; set; }

        public string MapAdrress { get; set; }
        public string AzAddress { get; set; }
        public string EnAddress { get; set; }
        public string RuAddress { get; set; }
        public string AzCity { get; set; }
        public string EnCity { get; set; }
        public string RuCity { get; set; }

        public int StudentCount { get; set; }
        public int AcademicStaff { get; set; }
        public string AzAbout { get; set; }
        public string EnAbout { get; set; }
        public string RuAbout { get; set; }

        public string AzStudentLife { get; set; }
        public string EnStudentLife { get; set; }
        public string RuStudentLife { get; set; }

        public string AzServices { get; set; }
        public string EnServices { get; set; }
        public string RuServices { get; set; }

        public string AzBachelor { get; set; }
        public string EnBachelor { get; set; }
        public string RuBachelor { get; set; }

        public string AzMaster { get; set; }
        public string EnMaster { get; set; }
        public string RuMaster { get; set; }
        public int Rank { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime ApplyDate { get; set; }
        public bool IsActive { get; set; }
        public GetCountryIdName Country { get; set; }
        public List<GetCountryIdName>? Programs { get; set; }
        public List<GetDirectionDto>? Directions { get; set; }
        public List<GetFacultyDto>? Specialities { get; set; }
        public List<FileDto> UniversityFiles { get; set; }
        
    }
}
