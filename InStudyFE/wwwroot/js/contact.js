$(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    if ($lang == 'RU') {


        var $header = "Связаться с нами"
        var adr = "Адрес"
        var email = "Эл. почт"
        var phone = "Телефон"
        var message ="Сообщение успешно отправлено!"
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
        $(`#labelconsulted`).html('Хотите записаться на бесплатную консультацию?');
        $(`#labelstcont`).html('Живая страна');
        $(`#labelcont`).html('Страна,в которой хотите учиться:');
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
        $(`.labelconsulted`).html('Хотите записаться на бесплатную консультацию?');
        $(`.labelstcont`).html('Живая страна');
        $(`.labelcont`).html('Страна, в которой вы хотите учиться:');
        $(`.labeldirection`).html('Направление');
        $(`.requestSubmit`).html('Послать');

    }
    else if ($lang == 'EN') {
        var message = "Message send successfully!"
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
        $(`#labelconsulted`).html('Want to sign up for a free consultation?');
        $(`#labelstcont`).html('Living country');
        $(`#labelcont`).html('Country you want to study:');
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
        $(`.labelconsulted`).html('Want to sign up for a free consultation?');
        $(`.labelstcont`).html('Living country');
        $(`.labelcont`).html('Country you want to study:');
        $(`.labeldirection`).html('Direction');
        $(`.requestSubmit`).html('Send message');
    }
    else {
        var message = "Mesaj uğurla göndərildi!"
        var $header = "Bizimlə əlaqə"
        var adr = "Ünvan"
        var phone = "Telefon"
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
        $(`#labelconsulted`).html('Ödənişsiz konsultasiyaya yazılmaq istəyirsiniz?');
        $(`#labelstcont`).html('Yaşadığınız ölkə');
        $(`#labelcont`).html('Təhsil almaq istədiyiniz ölkə:');
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
        $(`.labelconsulted`).html('Ödənişsiz konsultasiyaya yazılmaq istəyirsiniz?');
        $(`.labelstcont`).html('Yaşadığınız ölkə:');
        $(`.labelcont`).html('Təhsil almaq istədiyiniz ölkə:');
        $(`.labeldirection`).html('İstiqamət:');
        $(`.requestSubmit`).html('Göndər');
        
      

    }

    var input = document.querySelector("#phone");
    var phone_number = window.intlTelInput(input, {
        separateDialCode: true,
        preferredCountries: ["in"],
        hiddenInput: "full",
        utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
    })
 










    //var input = document.querySelector("#phoneres");
    //var phonenumber= window.intlTelInput(input, {
    //    separateDialCode: true,
    //    preferredCountries: ["in"],
    //    hiddenInput: "full",
    //    utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
    //})
    //var input = document.querySelector("#wpphoneres");
    //var wpnumber = window.intlTelInput(input, {
    //    separateDialCode: true,
    //    preferredCountries: ["in"],
    //    hiddenInput: "full",
    //    utilsScript: "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js"
    //})
    $(document).on('change', '#requestEmail', function () {

        $('#emailNameValidation').hide();
    });
    $(document).on('change', '#requestDate', function () {

        $('#dateValidation').hide();
    });
    $(document).on('change', '#requestName', function () {

        $('#nameValidation').hide();
    });
    $(document).on('change', '#lastName', function () {

        $('#lastNameValidation').hide();
    });
    $(document).on('change', '#phone', function () {

        $('#phnoneValidation').hide();
    });
    $(document).on('change', '#requestMessage', function () {

        $('#messageValidation').hide();
    });
    $(document).on('change', '#requestStudentCountry', function () {

        $('#scValidation').hide();
    });
    $(document).on('change', '#requestCountry', function () {

        $('#cValidation').hide();
    });
    $(document).on('change', '#requestDirection', function () {

        $('#rdValidation').hide();
    });
    
   
    $(document).on('click', '#requestSubmit', async function () {

    $('form#contact_form .error').remove();
        
       

        

        var full_number = phone_number.getNumber(intlTelInputUtils.numberFormat.E164);
        //var full_number_res = phonenumber.getNumber(intlTelInputUtils.numberFormat.E164);
        //var whatsapp_res = wpnumber.getNumber(intlTelInputUtils.numberFormat.E164);
            
           


       
    var hasError = false;
    var $email = $('#requestEmail');
    var $name = $('#requestName');
    var $lastname = $('#lastName');
        
    var $phone = $('#phone');

    var $reqCountry = $('#requestCountry')
    var $reqStudentCountry = $('#requestStudentCountry')
    var $reqDirect = $('#requestDirection')
    var $reqWhatsapp = $('#requestWhatsapp')
        var $reqDate = $('#requestDate')
        var $reqOnline = $('#requestType')
        var isOnline = $('input[name="onlineRadioOptions"]:checked').val()
        var $message = $('#requestMessage');
    var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        //var fullPhone = "+" + phone_number.selectedCountryData.dialCode + " " + $phone.val();
        //var fullWhatsapp = "+" + wp_number.selectedCountryData.dialCode + " " + $phone2.val();
       
    if ($email.val() == '' || !re.test($email.val())) {
        /*toastr.warning("Please provide valid Email!");*/
        $('#emailNameValidation').show();
        hasError = true;
        }
        if (isOnline) {
            $('#dateValidation').show();
            hasError = true;
        }

    if ($name.val() == '') {
        //toastr.warning("Please provide Your name!");
        $('#nameValidation').show();
        hasError = true;
    }
    if ($lastname.val() == '') {
        //toastr.warning("Please provide Your name!");
        $('#lastNameValidation').show();
        hasError = true;
    }

    if ($message.val() == '') {
        //toastr.warning("Please provide message!");

        $('#messageValidation').show();
        hasError = true;
    }
        if (full_number == '') {
        //toastr.warning("Please provide a phone number!");
        $('#phnoneValidation').show();
        hasError = true;
    }
    if ($reqCountry.val() == '') {
        //toastr.warning("Please provide country!");
        $('#cValidation').show();
        hasError = true;
    }
    if ($reqStudentCountry.val() == '') {
        //toastr.warning("Please provide country!");
        $('#scValidation').show();
        hasError = true;
    }
    if ($reqWhatsapp.val() == '') {

        }
        if (isOnline == undefined) {
            isOnline = false;
        }
    if (!hasError) {
        var url = "https://api.instudy.net/api/StudentRequest/AddStudentRequest";
        var reqContries = $reqCountry.val();
        var reqDirect = $reqDirect.val();
        var formData = new FormData();
        formData.append('Name', $name.val());
        formData.append('SurName', $lastname.val());
        formData.append('Email', $email.val());
        formData.append('Description', $message.val());
       /* formData.append('HaveWhatsApp', $('input[name="wp"]:checked').val());*/
        formData.append('Phone', full_number);
       
       
        formData.append('ConsultationDate', $reqDate.val());
        formData.append('IsOnline',isOnline );
        formData.append('YourCountry', $reqStudentCountry.val());
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
                    toastr.success(message);
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
        url: `https://api.instudy.net/api/AboutCompany/GetLastAboutCompany`,
        success: function (data) {
            if ($lang == 'RU') {
                var addreess = data?.data?.ruAdress;

            }
            else if ($lang == 'EN') {
                var addreess = data?.data?.enAdress

            } else {
                var addreess = data?.data?.azAdress


            }
           
                    $(`#contactDetail`).empty();
            $(`#contactDetail`).append(
                ` 


			<div class=""  style="padding-top: 10px;">
							<div class="info-wrap bg-primary w-100 p-lg-5 p-8">
							<h3 class="mb-8 mt-md-8" id="headerr">${$header}</h3>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${adr}:</span>${addreess}</p>
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
					            <p><span>${email}:</span> <a href="mailto:${data?.data?.email}">${data?.data?.email}</a></p>
					          </div>
				          </div>
				        	
			          </div>

					 
	</div>
<div id="map-responsive"  class="map-responsive">
<iframe src="${data?.data?.mapAdress}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

`
            );

             




        }
    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/AboutCompany/GetLastAboutCompany`,
        success: function (data) {
            if ($lang == 'RU') {
                var addreess = data?.data?.ruAdress;
            }
            else if ($lang == 'EN') {
                var addreess = data?.data?.enAdress

            } else {
                var addreess = data?.data?.azAdress


            }

            $(`#applyDetail`).empty();
            $(`#applyDetail`).append(
                ` 
                  <div id="map-responsive"  class="map-responsive">
<iframe src="${data?.data?.mapAdress}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

			<div class=""  style="padding-top: 10px;">
							<div class="info-wrap bg-primary w-100 p-lg-5 p-8">
							<h3 class="mb-8 mt-md-8" id="headerr">${$header}</h3>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>${adr}:</span>${addreess}</p>
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
					            <p><span>${email}:</span> <a href="mailto:${data?.data?.email}">${data?.data?.email}</a></p>
					          </div>
				          </div>
				        	
			          </div>

					 
	</div>


`
            );






        }
    });
   

});