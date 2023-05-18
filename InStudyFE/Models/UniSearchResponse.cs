namespace InStudyFE.Models
{
    public class UniSearchResponse
    {
        public int DataCount { get; set; }
        public int PageCount { get; set; }
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int DataCountInCurrentPage { get; set; }
        public List<GetUniversityDto>? value { get; set; }

    }
}
