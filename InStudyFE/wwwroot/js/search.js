$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify({

            Name: $name.val(),
            Surname: $lastname.val(),
            Email: $email.val(),

            Description: $message.val(),
            HaveWhatsApp: $reqWhatsapp[0].checked,
            Phone: fullPhone,
            ConsultationDate: $reqDate.val(),
            IsOnline: $reqOnline[0].checked,
            YourContryId: $reqStudentCountry.val(),
            CountryIds: $reqCountry.val(),
            DirectionIds: $reqDirect.val()



        }),
        contentType: 'application/json',
    })
        .done(function (response) {
            // Make sure that the formMessages div has the 'success' class.
            if (response.success == true) {
                toastr.success("Message send successfully!");
                setTimeout(() => {
                    location.reload();
                }, 5000)
            }


        })
        .fail(function (data) {
            // Make sure that the formMessages div has the 'error' class.
            toastr.warning("An error ocured!");
        });

});