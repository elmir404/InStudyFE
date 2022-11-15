$(function () {
    $('form#contact_form').submit(function (e) {
        e.preventDefault();
        $('form#contact_form .error').remove();
        var hasError = false;
        var $email = $('form input[name="email');
        var $name = $('form input[name="name');
        var $phone = $('form input[name="phone');
        var $phoneCode = $('form input[name="phoneCode');
        var $messageType = $('form input[name="messageType')
        var $subject = $('form input[name="subject');
        var $message = $('form textarea[name="message');
        var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var 
        if ($email.val() == '' || !re.test($email.val())) {
            $('#email').parent().append('<span class="error">Please provide valid Email.</span>');
            $('#email').addClass('inputError');
            hasError = true;
        }

        if ($name.val() == '') {
            $('#name').parent().append('<span class="error">Please provide Your name.</span>');
            $('#name').addClass('inputError');
            hasError = true;
        }

        if ($message.val() == '') {
            $('#message').parent().append('<span class="error">Please enter details.</span>');
            $('#message').addClass('inputError');
            hasError = true;
        }
        if ($phone.val() == '') {
            $('#name').parent().append('<span class="error">Please provide Your phone number.</span>');
            $('#name').addClass('inputError');
            hasError = true;
        }
        if ($subject.val() == '') {
            $('#name').parent().append('<span class="error">Please provide subject.</span>');
            $('#name').addClass('inputError');
            hasError = true;
        }

        if (!hasError) {
            var url = "https://fainablogapi.herokuapp.com/api/Contact/AddContact";
            $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify({

                    name: $name.val(),
                    email: $email.val(),
                    subject: $subject.val(),
                    message: $message.val(),
                    phone: $phone.val(),
                    surName: ""
                }),
                contentType: 'application/json',
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $('form#contact_form').removeClass('error');
                    $('form#contact_form').addClass('success');

                    // Set the message text.
                    $('#contact_modal').slideUp(300);
                    $('.modal-backdrop').hide();
                    var successMessage = $('form#contact_form').prepend('<span class="success">Thank you. Your email was sent successfully.</span>');
                    setTimeout(successMessage, 2000);

                    // Clear the form.
                    $('form input[name="email"], form input[name="name"], form textarea[name="message"]').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $('form#contact_form').removeClass('success');
                    $('form#contact_form').addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $('form#contact_form').text(data.responseText);
                    } else {
                        $('form#contact_form').prepend('<span class="error">Oops! An error occured and your message could not be sent.</span>');
                    }
                });
        }
        return false;
    });
});