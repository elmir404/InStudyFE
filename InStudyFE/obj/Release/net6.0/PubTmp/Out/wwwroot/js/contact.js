$(document).on('click', '#requestSubmit', async function () {

    $('form#contact_form .error').remove();
    debugger;
    var hasError = false;
    var $email = $('#requestEmail');
    var $name = $('#requestName');
    var $lastname = $('#lastName');
    var $phone = $('#requestPhone');
    var $phoneCode = $('#phoneField');
    var $reqCountry = $('#requestCountry')
    var $reqStudentCountry = $('#requestStudentCountry')
    var $reqDirect = $('#requestDirection')
    var $reqWhatsapp = $('#requestWhatsapp')
    var $reqDate = $('#requestDate')
    var $reqOnline = $('#requestType')
    var $message = $('#requestMessage');
    var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var fullPhone = $phoneCode.val() + " " + $phone.val();
    console.log(fullPhone, $reqOnline.val().toString(), $reqWhatsapp.val().toString());
    if ($email.val() == '' || !re.test($email.val())) {
        toastr.warning("Please provide valid Email!");

        hasError = true;
    }

    if ($name.val() == '') {
        toastr.warning("Please provide Your name!");

        hasError = true;
    }
    if ($lastname.val() == '') {
        toastr.warning("Please provide Your name!");

        hasError = true;
    }

    if ($message.val() == '') {
        toastr.warning("Please provide message!");


        hasError = true;
    }
    if ($phone.val() == '') {
        toastr.warning("Please provide a phone number!");

        hasError = true;
    }
    if ($reqCountry.val() == '') {
        toastr.warning("Please provide country!");

        hasError = true;
    }
    if ($reqStudentCountry.val() == '') {
        toastr.warning("Please provide country!");

        hasError = true;
    }
    if ($reqDirect.val() == '') {
        toastr.warning("Please provide direction!");

        hasError = true;
    }
    if ($reqWhatsapp.val() == '') {

    }
    if (!hasError) {
        var url = " ";
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
    }
    return false;
});