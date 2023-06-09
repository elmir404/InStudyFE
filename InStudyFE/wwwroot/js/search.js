$(document).ready(function () {
    var $program = localStorage.getItem('program');
    var $country = localStorage.getItem('country');
    var $direction = localStorage.getItem('direction');
  
   
    const $lang = localStorage.getItem('lang');
    if ($lang == 'RU') {
        var $notFount = "Университет, соответствующий вашему запросу, не найден!"
        $(`.disciplinlang`).html("Дисциплины");
        $(`.locationlang`).html("Страна");
        $(`.durationlang`).html("Продолжительность");
        $(`.attendancelang`).html("Посещаемость");
        $(`.degreetypelang`).html("Тип степени");

       
    }
    else if ($lang == 'EN') {
        var $notFount = "No university matching your search was found!";
        $(`.disciplinlang`).html("Disciplines");
        $(`.locationlang`).html("Country");
        $(`.durationlang`).html("Duration");
        $(`.attendancelang`).html("Faculty");
        $(`.degreetypelang`).html("Degree");
    }
    else {
       
        var $notFount = "Axtarışa uyğun univeristet tapılmadı!"
        $(`.disciplinlang`).html("Fənlər");
        $(`.locationlang`).html("Ölkə");
        $(`.durationlang`).html("Müddət");
        $(`.attendancelang`).html("Fakultə");
        $(`.degreetypelang`).html("Təhsil Pilləsi");
    }
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Direction/GetActiveDirections`,

        success: function (data) {
           
            $.each(
                data.data, function (i, value) {


                    if ($lang == 'RU') {
                        var name = value.ruName;
                    }
                    else if ($lang == 'EN') {
                        var name = value.enName

                    } else {
                        var name = value.azName


                    }
                    if (name == $direction) {
                        $(`#disciplinesSearch`).append(
                            `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="disciplines" class="CheckboxInput" data-filter="ci" checked value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
                                         `
                        )
                    } else {
                        $(`#disciplinesSearch`).append(
                            `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="disciplines" class="CheckboxInput" data-filter="ci"  value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
                                         `
                        )
                    }
                    

                }
            )

        }

    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Country/GetCountriesIdName`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                   

                    if ($lang == 'RU') {
                        var name = value.ruName;

                    }
                    else if ($lang == 'EN') {
                        var name = value.enName

                    } else {
                        var name = value.azName

                    }
                    if (name == $country) {
                        $(`#locationSearch`).append(
                            `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="location" class="CheckboxInput" data-filter="ci" checked value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
                                         `
                        )
                    } else {
                        $(`#locationSearch`).append(
                            `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="location" class="CheckboxInput" data-filter="ci" value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
                                         `
                        )
                    }
                  

                }
            )

        }

    });
      
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Program/GetActivePrograms`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                  

                    if ($lang == 'RU') {
                        var name = value.ruName;

                    }
                    else if ($lang == 'EN') {
                        var name = value.enName

                    } else {
                        var name = value.azName

                    }
                    if (name == $program) {
                        $(`#searchProgram`).append(
                            `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="program" class="CheckboxInput" data-filter="ci" checked value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
                                         `
                        )
                    } else {
                        $(`#searchProgram`).append(
                            `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="program" class="CheckboxInput" data-filter="ci" value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
                                         `
                        )
                    }
                    

                }
            )

        }

    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/DurationDate/GetActiveDurationDates`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                   

                    $(`#durationSearch`).append(
                        `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="durations" class="CheckboxInput" data-filter="ci" value="${value.date}" data-v-01633eac=""><span data-v-01633eac="">${value.date}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""></ul></li>
  
                                         `
                    )

                }
            )

        }

    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Speciality/GetActiveSpecialities`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                    if ($lang == 'RU') {
                        var name = value.ruName;


                    }
                    else if ($lang == 'EN') {
                        var name = value.enName

                    } else {
                        var name = value.azName

                    }
                    $(`#attendenceSearch`).append(
                        `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="attendence" class="CheckboxInput" data-filter="ci" value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""></ul></li>
  
                                         `
                    )

                }
            )

        }

    });
    function searchUniversity() {
        var $disciplinesSearch = JSON.parse(localStorage.getItem("disciplinesSearch"));

        var $locations = JSON.parse(localStorage.getItem("locationSearch"));
        var $programSearch = JSON.parse(localStorage.getItem("programSearch"));
        var $durationSearch = JSON.parse(localStorage.getItem("durationsSearch"));
        var $attendenceSearch = JSON.parse(localStorage.getItem("attendenceSearch"));
       
        
        var formData = new FormData();
        if (localStorage.getItem('country') !="")
            formData.append('CountryNames', localStorage.getItem('country'));
        if (localStorage.getItem('program') != "")
            formData.append('ProgramNames', localStorage.getItem('program'));
        if (localStorage.getItem('direction') != "")
            formData.append('DirectionNames', localStorage.getItem('direction'));
        if ($disciplinesSearch != null)
        for (var i = 0; i < $disciplinesSearch.length; i++) {
            formData.append('DirectionNames', $disciplinesSearch[i]);
            }
        if ($programSearch != null)
        for (var i = 0; i < $programSearch.length; i++) {
            formData.append('ProgramNames', $programSearch[i]);
            }
        if ($locations != null)
        for (var i = 0; i < $locations.length; i++) {
            formData.append('CountryNames', $locations[i]);
            }
        if ($durationSearch != null)
        for (var i = 0; i < $durationSearch.length; i++) {
            formData.append('Durations', $durationSearch[i]);
            }
        if ($attendenceSearch != null)
        for (var i = 0; i < $attendenceSearch.length; i++) {
            formData.append('SpecialityNames', $attendenceSearch[i]);
        }
        $.ajax({
            type: "POST",
            url: `https://api.instudy.net/api/University/SearchUniversity?currentPage=1&pageSize=100`,
            processData: false,
            contentType: false,
            cache: false,
            data: formData,
            enctype: 'multipart/form-data',
        })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                if (response.success == true) {
                    $('#searchContent').empty();
                    if (response.data.dataCount > 0) {
                        $.each(
                            response?.data.value, function (i, value) {

                                if ($lang == 'RU') {
                                    var name = value.ruName;
                                    var city = value.ruCity;
                                    var countryName = value.country?.ruName;
                                    
                                }
                                else if ($lang == 'EN') {
                                    var name = value.enName
                                    var city = value.enCity;
                                    var countryName = value.country?.enName;


                                } else {
                                    var name = value.azName
                                    var city = value.azCity;

                                    var countryName = value.country?.azName;


                                }
                                var image = `https://api.instudy.net/${value?.universityFiles[0]?.path}`
                                //var image = `https://api.instudy.net/${value.country.countryFiles[0].path}`

                                $('#searchContent').append(`
   <a data-v-6e0e8e37="" data-v-60a22860="" data-study-id="319857" data-organisation-id="237" title="Strategic Events Management" href="/University/Detail?uniId=${value.Id}" target="_blank" class="ContentCard js-studyCard">
                                                                                        <div data-v-78fa3586="" data-v-6e0e8e37="">
                                                                                            
                                                                                            <div data-v-78fa3586="" class="StudyCoverWrapper"><img class="universityimage" data-v-78fa3586="" alt="Study cover image" src="${image}" loading="lazy" width="288" height="152"></div>

                                                                                        
                                                                                        </div>
                                                                                        <div data-v-6e0e8e37="">
                                                                                            <div data-v-6e0e8e37="" class="BestfitWishlist">
                                                                                            </div>
                                                                                            <div data-v-6e0e8e37="" class="OrganisationTitle">
                                                                                                <h3 data-v-6e0e8e37="" class="StudyTitle">${name} </h3>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div data-v-6e0e8e37="" class="OrganisationInformation">
                                                                                            <div data-v-6e0e8e37="" class="NameLocation">
                                                                                                <div data-v-6e0e8e37="" class="Name"></div>
                                                                                                <div data-v-6e0e8e37="" class="Location">${city}, ${countryName}</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>



`
                                );




                            }
                        );
                    }
                    else {
                        $('#searchContent').append(`<div style="height:500px;"><h2>${$notFount}</h2></div>`);
                    }
                }


            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                toastr.warning("An error ocured!");
            });
    }

   
    var locArr = [];
    $(document).on("change", "input[name='location']", function () {
       
        if (this.checked) {
            localStorage.setItem('locationSearch', "");
            locArr.push($(this).val());
            localStorage.setItem('locationSearch', JSON.stringify(locArr));
        } else {
            if ($(this).val() == localStorage.getItem('country')) {
                locArr.push($(this).val());
                localStorage.setItem('locationSearch', JSON.stringify(locArr));
                localStorage.setItem('country', "");
            }
            localStorage.setItem('locationSearch', "");

            locArr.splice($.inArray($(this).val(), locArr), 1);
            localStorage.setItem('locationSearch', JSON.stringify(locArr));
        }
       
        searchUniversity();
    });
    var descArr = [];
    $(document).on("change", "input[name='disciplines']", function () {
       
        
       
        if (this.checked) {
            localStorage.setItem('disciplinesSearch', "");
            descArr.push($(this).val());           
            localStorage.setItem('disciplinesSearch', JSON.stringify(descArr));
        } else {
            
            if ($(this).val() == localStorage.getItem('direction')) {   
                descArr.push($(this).val());
                localStorage.setItem('disciplinesSearch', JSON.stringify(descArr));
                localStorage.setItem('direction', "");
            }
            localStorage.setItem('disciplinesSearch', "");
           descArr.splice($.inArray($(this).val(), descArr), 1);            
            localStorage.setItem('disciplinesSearch', JSON.stringify(descArr));

        }
        searchUniversity();
    });
    var durArr = [];
    $(document).on("change", "input[name='durations']", function () {
       
        if (this.checked) {
            localStorage.setItem('durationsSearch', "");
            durArr.push($(this).val());
            localStorage.setItem('durationsSearch', JSON.stringify(durArr));

        } else {
            localStorage.setItem('durationsSearch', "");
            durArr.splice($.inArray($(this).val(), durArr), 1);
            localStorage.setItem('durationsSearch', JSON.stringify(durArr));

        }
        searchUniversity();
    });
    var attArr = [];
    $(document).on("change", "input[name='attendence']", function () {
        
       
        if (this.checked) {
            localStorage.setItem('attendenceSearch', "");
            attArr.push($(this).val());
            localStorage.setItem('attendenceSearch', JSON.stringify(attArr));
        } else {
            localStorage.setItem('attendenceSearch', "");

            attArr.splice($.inArray($(this).val(), attArr), 1);
            localStorage.setItem('attendenceSearch', JSON.stringify(attArr));

        }
        localStorage.setItem('attendenceSearch', JSON.stringify(attArr));
        searchUniversity();
    });
    var degreArr = [];
    $(document).on("change", "input[name='program']", function () {
       
        if (this.checked) {
            localStorage.setItem('programSearch', "");
            
            
            degreArr.push($(this).val());
            localStorage.setItem('programSearch', JSON.stringify(degreArr));
        } else {
            if ($(this).val() == localStorage.getItem('program')) {
                degreArr.push($(this).val());
                localStorage.setItem('programSearch', JSON.stringify(degreArr));
                localStorage.setItem('program', "");
            }
               
            localStorage.setItem('programSearch', "");
            degreArr.splice($.inArray($(this).val(), degreArr), 1);
            localStorage.setItem('programSearch', JSON.stringify(degreArr));

        }
        localStorage.setItem('programSearch', JSON.stringify(degreArr));
        searchUniversity();
    });

});