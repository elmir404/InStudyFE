﻿$(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        var $header = "Bizimlə əlaqə"
        var adr="Ünvan"
        var phone="Telefon"
        var email = "E-poçt"
        $(`#contactheader`).html(`Əlaqə`);
        $(`#labellast`).html("Soyad");
        $(`#lastName`).attr(`placeholder`, `Soyad `);
        $(`#labelEmail`).html("Email");
        $(`#requestEmail`).attr(`placeholder`, `Email`);
        $(`#labelname`).html("Ad");
        $(`#requestName`).attr(`placeholder`, `Ad`);
        $(`#labelphone`).html("Telefon");
        $(`#phone`).attr(`placeholder`, `Əlaqə nömrəsi`);
        $(`#labelphone2`).html("Telefon");
        $(`#phone2`).attr(`placeholder`, `Əlaqə nömrəsi`);
        $(`#labeldescription`).html("Açıqlama");
        $(`#labeldate`).html('Tarix');
        $(`#havewp`).html('WhatsApp?');
        $(`#labelonline`).html('Onlayn?');
        $(`#labelconsulted`).html('Konsultasiya?');
        $(`#labelstcont`).html('Yaşadığınız ölkə');
        $(`#labelcont`).html('Ölkə');
        $(`#labeldirection`).html('Istiqamət');
        $(`#requestSubmit`).html('Göndər');
        $(`.yes`).html('Bəli');
        $(`.no`).html('Xeyr');

    }
    else if ($lang == 'EN') {

        var $header = "Contact us"
        var adr = "Address"
        var email = "Email"
        var phone = "Phone"
        $(`#contactheader`).html(`Contact`);
        $(`#labellast`).html("Lastname");
        $(`#lastName`).attr(`placeholder`, `Lastname`);
        $(`#labelEmail`).html("Email");
        $(`#requestEmail`).attr(`placeholder`, `Email`);
        $(`#labelname`).html("Ad");
        $(`#requestName`).attr(`placeholder`, `Name`);
        $(`#labelphone`).html("Phone");
        $(`#phone`).attr(`placeholder`, `Contact number`);
        $(`#labelphone2`).html("Phone");
        $(`#phone2`).attr(`placeholder`, `Contact number`);
        $(`#labeldescription`).html("Description");
        $(`#labeldate`).html('Date');
        $(`#havewp`).html('WhatsApp?');
        $(`#labelonline`).html('Online?');
        $(`#labelconsulted`).html('Consulted?');
        $(`#labelstcont`).html('Living country');
        $(`#labelcont`).html('Country');
        $(`#labeldirection`).html('Direction');
        $(`#requestSubmit`).html('Send message');
        $(`.yes`).html('Yes');
        $(`.no`).html('No');
    }
    else {
        var $header = "Связаться с нами"
        var adr = "Адрес"
        var email = "Эл. почт"
        var phone = "Телефон"
        $(`#contactheader`).html(`Контакт`);
        $(`#labellast`).html("Фамилия");
        $(`#lastName`).attr(`placeholder`, `Фамилия`);
        $(`#labelEmail`).html("Электронная почта");
        $(`#requestEmail`).attr(`placeholder`, `Электронная почта`);
        $(`#labelname`).html("Имя");
        $(`#requestName`).attr(`placeholder`, `Имя`);
        $(`#labelphone`).html("Телефон");
        $(`#phone`).attr(`placeholder`, `Контактный номер`);
        $(`#labelphone2`).html("Телефон");
        $(`#phone2`).attr(`placeholder`, `Контактный номер`);
        $(`#labeldescription`).html("Oписание");
        $(`#labeltime`).html('Дата');
        $(`#havewp`).html('WhatsApp?');
        $(`#labelonline`).html('Онлайн?');
        $(`#labelconsulted`).html('Kонсультируемый?');
        $(`#labelstcont`).html('Живая страна');
        $(`#labelcont`).html('Cтрана');
        $(`#labeldirection`).html('Направление');
        $(`#requestSubmit`).html('Послать');
        $(`.yes`).html('Да');
        $(`.no`).html('Нет');
      

    }
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
        var url = "https://api.instudy.net/api/StudentRequest/AddStudentRequest";
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify({

                Name: $name.val(),
                Surname: $lastname.val(),
                Email: $email.val(),

                Description: $message.val(),
                HaveWhatsApp: $('input[name="wp"]:checked').val(),
                Phone: fullPhone,
                ConsultationDate: $reqDate.val(),
                IsOnline: $('input[name="IsOnline"]:checked').val(),
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
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/AboutCompany/GetAboutCompanies`,
        success: function (data) {
            
            $.each(
                data.data, function (i, value) {
                    $(`#contactDetail`).empty();
                    $(`#contactDetail`).append(
                        ` 

<div id="map-responsive"  class="map-responsive">
<iframe src="${value.mapAdress}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
			<div class=" col-md-12 col-ms d-flex align-items-stretch"  style="padding-top: 10px;">
							<div class="info-wrap bg-primary w-100 p-lg-5 p-8">
							<h3 class="mb-8 mt-md-8" id="headerr">${$header}</h3>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${adr}:</span>${value.adress}</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${phone}:</span> <a href="tel:${value.phone}">${value.phone}</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${email}:</span> <a href="${value.email}">${value.email}</a></p>
					          </div>
				          </div>
				        	
			          </div>

					 
	</div>

`
                    )

                }
            )




        }
    });

});