﻿namespace InStudyFE.Models
{
    public class GetOnboardingDto
    {
        public int Id { get; set; }
        public string AzTitle { get; set; }
        public string EnTitle { get; set; }
        public string RuTitle { get; set; }
        public string AzDescription { get; set; }
        public string EnDescription { get; set; }
        public string RuDescription { get; set; }
        public string Icon { get; set; }
        public bool IsActive { get; set; }
    }
}
