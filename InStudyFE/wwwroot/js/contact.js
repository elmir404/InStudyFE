$(document).ready(function () {
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
        $(`#labelphone2`).html("WhatsApp nömrə");
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

        $(`.contactheader`).html(`Əlaqə`);
        $(`.labellast`).html("Soyad");
        $(`.lastName`).attr(`placeholder`, `Soyad `);
        $(`.labelEmail`).html("Email");
        $(`.requestEmail`).attr(`placeholder`, `Email`);
        $(`.labelname`).html("Ad");
        $(`.requestName`).attr(`placeholder`, `Ad`);
        $(`.labelphone`).html("Telefon");
        $(`.phone`).attr(`placeholder`, `Əlaqə nömrəsi`);
        $(`.labelphone2`).html("WhatsApp nömrə");
        $(`.phone2`).attr(`placeholder`, `Əlaqə nömrəsi`);
        $(`.labeldescription`).html("Açıqlama");
        $(`.labeldate`).html('Tarix');
        $(`.havewp`).html('WhatsApp?');
        $(`.labelonline`).html('Onlayn?');
        $(`.labelconsulted`).html('Konsultasiya?');
        $(`.labelstcont`).html('Yaşadığınız ölkə');
        $(`.labelcont`).html('Ölkə');
        $(`.labeldirection`).html('Istiqamət');
        $(`.requestSubmit`).html('Göndər');
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
        $(`#labelphone2`).html("WhatsApp number");
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

        $(`.contactheader`).html(`Contact`);
        $(`.labellast`).html("Lastname");
        $(`.lastName`).attr(`placeholder`, `Lastname`);
        $(`.labelEmail`).html("Email");
        $(`.requestEmail`).attr(`placeholder`, `Email`);
        $(`.labelname`).html("Ad");
        $(`.requestName`).attr(`placeholder`, `Name`);
        $(`.labelphone`).html("Phone");
        $(`.phone`).attr(`placeholder`, `Contact number`);
        $(`.labelphone2`).html("WhatsApp number");
        $(`.phone2`).attr(`placeholder`, `Contact number`);
        $(`.labeldescription`).html("Description");
        $(`.labeldate`).html('Date');
        $(`.havewp`).html('WhatsApp?');
        $(`.labelonline`).html('Online?');
        $(`.labelconsulted`).html('Consulted?');
        $(`.labelstcont`).html('Living country');
        $(`.labelcont`).html('Country');
        $(`.labeldirection`).html('Direction');
        $(`.requestSubmit`).html('Send message');
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
        $(`#labelphone2`).html("Номер WhatsApp");
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

        $(`.contactheader`).html(`Контакт`);
        $(`.labellast`).html("Фамилия");
        $(`.lastName`).attr(`placeholder`, `Фамилия`);
        $(`.labelEmail`).html("Электронная почта");
        $(`.requestEmail`).attr(`placeholder`, `Электронная почта`);
        $(`.labelname`).html("Имя");
        $(`.requestName`).attr(`placeholder`, `Имя`);
        $(`.labelphone`).html("Телефон");
        $(`.phone`).attr(`placeholder`, `Контактный номер`);
        $(`.labelphone2`).html("Номер WhatsApp");
        $(`.phone2`).attr(`placeholder`, `Контактный номер`);
        $(`.labeldescription`).html("Oписание");
        $(`.labeltime`).html('Дата');
        $(`.havewp`).html('WhatsApp?');
        $(`.labelonline`).html('Онлайн?');
        $(`.labelconsulted`).html('Kонсультируемый?');
        $(`.labelstcont`).html('Живая страна');
        $(`.labelcont`).html('Cтрана');
        $(`.labeldirection`).html('Направление');
        $(`.requestSubmit`).html('Послать');
        
      

    }

    var input = document.querySelector("#phone");
    var phone_number = window.intlTelInput(input, {
        separateDialCode: true,
        preferredCountries: ["in"],
        hiddenInput: "full",
        utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
    })
    var input = document.querySelector("#phone2");
    var wp_number = window.intlTelInput(input, {
        separateDialCode: true,
        preferredCountries: ["in"],
        hiddenInput: "full",
        utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
    })










    var input = document.querySelector("#phoneres");
    var phonenumber= window.intlTelInput(input, {
        separateDialCode: true,
        preferredCountries: ["in"],
        hiddenInput: "full",
        utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
    })
    var input = document.querySelector("#wpphoneres");
    var wpnumber = window.intlTelInput(input, {
        separateDialCode: true,
        preferredCountries: ["in"],
        hiddenInput: "full",
        utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
    })


   
    $(document).on('click', '#requestSubmit', async function () {

    $('form#contact_form .error').remove();
        debugger;
       

        

        var full_number = phone_number.getNumber(intlTelInputUtils.numberFormat.E164);
        var whatsapp = wp_number.getNumber(intlTelInputUtils.numberFormat.E164);
        var full_number_res = phonenumber.getNumber(intlTelInputUtils.numberFormat.E164);
        var whatsapp_res = wpnumber.getNumber(intlTelInputUtils.numberFormat.E164);
            
           


       
    var hasError = false;
    var $email = $('#requestEmail');
    var $name = $('#requestName');
    var $lastname = $('#lastName');
    var $phone = $('#phone');
    var $phone2 = $('#phone2');
    var $phoneCode = $('#phoneField');
    var $reqCountry = $('#requestCountry')
    var $reqStudentCountry = $('#requestStudentCountry')
    var $reqDirect = $('#requestDirection')
    var $reqWhatsapp = $('#requestWhatsapp')
    var $reqDate = $('#requestDate')
    var $reqOnline = $('#requestType')
        var $message = $('#requestMessage');
    var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        //var fullPhone = "+" + phone_number.selectedCountryData.dialCode + " " + $phone.val();
        //var fullWhatsapp = "+" + wp_number.selectedCountryData.dialCode + " " + $phone2.val();
        console.log(full_number, whatsapp, full_number_res, whatsapp_res );
    if ($email.val() == '' || !re.test($email.val())) {
        /*toastr.warning("Please provide valid Email!");*/

        hasError = true;
    }

    if ($name.val() == '') {
        //toastr.warning("Please provide Your name!");

        hasError = true;
    }
    if ($lastname.val() == '') {
        //toastr.warning("Please provide Your name!");

        hasError = true;
    }

    if ($message.val() == '') {
        //toastr.warning("Please provide message!");


        hasError = true;
    }
    if ($phone.val() == '') {
        //toastr.warning("Please provide a phone number!");

        hasError = true;
    }
    if ($reqCountry.val() == '') {
        //toastr.warning("Please provide country!");

        hasError = true;
    }
    if ($reqStudentCountry.val() == '') {
        //toastr.warning("Please provide country!");

        hasError = true;
    }
    if ($reqDirect.val() == '') {
        //toastr.warning("Please provide direction!");

        hasError = true;
    }
    if ($reqWhatsapp.val() == '') {

    }
    console.log($name.val());
    if (!hasError) {
        var url = "https://api.instudy.net/api/StudentRequest/AddStudentRequest";
        var reqContries = $reqCountry.val();
        var reqDirect = $reqDirect.val();
        var formData = new FormData();
        formData.append('Name', $name.val());
        formData.append('SurName', $lastname.val());
        formData.append('Email', $email.val());
        formData.append('Description', $message.val());
        formData.append('HaveWhatsApp', $('input[name="wp"]:checked').val());
        formData.append('Phone', full_number);
        formData.append('WhatsAppPhone', whatsapp);
        formData.append('Phone', full_number_res);
        formData.append('WhatsAppPhone', whatsapp_res);
        formData.append('ConsultationDate', $reqDate.val());
        formData.append('IsOnline', $('input[name="IsOnline"]:checked').val());
        formData.append('YourContryId', $reqStudentCountry.val());
        for (var i = 0; i < reqContries.length;i++){
            formData.append('CountryIds', reqContries[i]);
           }

        for (var i = 0; i <reqDirect.length; i++){
                formData.append('DirectionIds', reqDirect[i]);
            }
    
        $.ajax({
            type: "POST",
            url: url,
            
            
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
           
            
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                if (response.success == true) {
                    toastr.success("Message send successfully!");
                    setTimeout(() => {
                        //location.reload();
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
        url: `https://api.instudy.net/api/AboutCompany/GetLastAboutCompany`,
        success: function (data) {
            
           
                    $(`#contactDetail`).empty();
            $(`#contactDetail`).append(
                ` 

<div id="map-responsive"  class="map-responsive">
<iframe src="${data?.data?.mapAdress}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
			<div class=" col-md-12 col-ms d-flex align-items-stretch"  style="padding-top: 10px;">
							<div class="info-wrap bg-primary w-100 p-lg-5 p-8">
							<h3 class="mb-8 mt-md-8" id="headerr">${$header}</h3>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${adr}:</span>${data?.data?.adress}</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${phone}:</span> <a href="tel:${data?.data?.phone}">${data?.data?.phone}</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${email}:</span> <a href="${data?.data?.email}">${data?.data?.email}</a></p>
					          </div>
				          </div>
				        	
			          </div>

					 
	</div>

`
            );

             




        }
    });
   

});