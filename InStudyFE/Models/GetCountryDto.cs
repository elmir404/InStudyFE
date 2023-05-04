namespace InStudyFE.Models
{
    public class GetCountryDto
    {
        public int Id { get; set; }

        public string? AzName { get; set; }
        public string? EnName { get; set; }
        public string? RuName { get; set; }

        public bool IsActive { get; set; }
        public string? AzDescription { get; set; }
        public string? EnDescription { get; set; }
        public string? RuDescription { get; set; }

        public int? UniversitiesCount { get; set; }
        public int? CurrentStudents { get; set; }
        public int? Population { get; set; }

        public string? AzWorkPermit { get; set; }
        public string? EnWorkPermit { get; set; }
        public string? RuWorkPermit { get; set; }

        public string? AzAcademicYear { get; set; }
        public string? EnAcademicYear { get; set; }
        public string? RuAcademicYear { get; set; }

        public string? AzStudy { get; set; }
        public string? EnStudy { get; set; }
        public string? RuStudy { get; set; }

        public string? AzLiving { get; set; }
        public string? EnLiving { get; set; }
        public string? RuLiving { get; set; }

        public string? AzAbout { get; set; }
        public string? EnAbout { get; set; }
        public string? RuAbout { get; set; }
        public string? StudentVisa { get; set; }

        public string? AzStudentVisa { get; set; }
        public string? EnStudentVisa { get; set; }
        public string? RuStudentVisa { get; set; }

        public List<GetUniversityIdNameDto>? Universities { get; set; }
        public List<FileDto>? CountryFiles { get; set; }
    }
}
