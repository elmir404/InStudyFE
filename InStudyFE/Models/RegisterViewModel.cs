using System.ComponentModel.DataAnnotations;

namespace InStudyFE.Models
{
    public class RegisterViewModel
    {
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public string PhoneNumber { get; set; }
        public int Gender { get; set; }
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "Şifrələr eyni deyil")]
        public string ConfirmPassword { get; set; }
    }
}
