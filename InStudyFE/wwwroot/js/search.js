$(document).ready(function () {
    var $program = localStorage.getItem('program');
    var $country = localStorage.getItem('country');
    var $direction = localStorage.getItem('direction');
    
   
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        var $notFount = "Axtarışa uyğun univeristet tapılmadı!"
        $(`.disciplinlang`).html("İstiqamət");
        $(`.locationlang`).html("Ölkə");
        $(`.durationlang`).html("Müddət");
        $(`.attendancelang`).html("Davamiyyət"); 
        $(`.degreetypelang`).html("Dərəcə növü");
    }
    else if ($lang == 'EN') {
        var $notFount = "No university matching your search was found!";
        $(`.disciplinlang`).html("Disciplen");
        $(`.locationlang`).html("Country");
        $(`.durationlang`).html("Duration");
        $(`.attendancelang`).html("Attendance");
        $(`.degreetypelang`).html("Degree Type");
    }
    else {
        var $notFount = "Университет, соответствующий вашему запросу, не найден!"
        $(`.disciplinlang`).html("Направление");
        $(`.locationlang`).html("Страна");
        $(`.durationlang`).html("Продолжительность");
        $(`.attendancelang`).html("Посещаемость");
        $(`.degreetypelang`).html("Тип степени");

    }
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Speciality/GetSpecialities`,

        success: function (data) {
           
            $.each(
                data.data, function (i, value) {
                    console.log(value);
                    //const date = new Date(value.regDate)

                    //var dd = String(date.getDate()).padStart(2, '0');
                    //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                    //var yyyy = date.getFullYear();
                    //var time = yyyy + "/" + mm + "/" + dd;

                    if ($lang == 'AZ') {
                        var name = value.azName
                        var description = value?.azDescription;

                    }
                    else if ($lang == 'EN') {
                        var name = value.enName
                        var description = value?.enDescription;

                    } else {
                        var name = value.ruName;
                        var description = value?.ruDescription;

                    }

                    $(`#disciplinesSearch`).append(
                        `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="disciplines" class="CheckboxInput" data-filter="ci" value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
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
        url: `https://api.instudy.net/api/Country/GetActiveCountries`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                    console.log(value);
                    //const date = new Date(value.regDate)

                    //var dd = String(date.getDate()).padStart(2, '0');
                    //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                    //var yyyy = date.getFullYear();
                    //var time = yyyy + "/" + mm + "/" + dd;

                    if ($lang == 'AZ') {
                        var name = value.azName
                        var description = value?.azDescription;

                    }
                    else if ($lang == 'EN') {
                        var name = value.enName
                        var description = value?.enDescription;

                    } else {
                        var name = value.ruName;
                        var description = value?.ruDescription;

                    }

                    $(`#locationSearch`).append(
                        `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="location" class="CheckboxInput" data-filter="ci" value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
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
        url: `https://api.instudy.net/api/Program/GetPrograms`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                    console.log(value);
                    //const date = new Date(value.regDate)

                    //var dd = String(date.getDate()).padStart(2, '0');
                    //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                    //var yyyy = date.getFullYear();
                    //var time = yyyy + "/" + mm + "/" + dd;

                    if ($lang == 'AZ') {
                        var name = value.azName
                        var description = value?.azDescription;

                    }
                    else if ($lang == 'EN') {
                        var name = value.enName
                        var description = value?.enDescription;

                    } else {
                        var name = value.ruName;
                        var description = value?.ruDescription;

                    }

                    $(`#searchProgram`).append(
                        `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="location" class="CheckboxInput" data-filter="ci" value="${name}" data-v-01633eac=""><span data-v-01633eac="">${name}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
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
        url: `https://api.instudy.net/api/DurationDate/GetActiveDurationDates`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                    console.log(value);
                    

                    //if ($lang == 'AZ') {
                    //    var name = value.azName
                    //    var description = value?.azDescription;

                    //}
                    //else if ($lang == 'EN') {
                    //    var name = value.enName
                    //    var description = value?.enDescription;

                    //} else {
                    //    var name = value.ruName;
                    //    var description = value?.ruDescription;

                    //}

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
        url: `https://api.instudy.net/api/AttendamceType/GetAttendanceTypes`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                    console.log(value);


                    //if ($lang == 'AZ') {
                    //    var name = value.azName
                    //    var description = value?.azDescription;

                    //}
                    //else if ($lang == 'EN') {
                    //    var name = value.enName
                    //    var description = value?.enDescription;

                    //} else {
                    //    var name = value.ruName;
                    //    var description = value?.ruDescription;

                    //}

                    $(`#attendenceSearch`).append(
                        `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" name="attendence" class="CheckboxInput" data-filter="ci" value="${value.title}" data-v-01633eac=""><span data-v-01633eac="">${value.title}</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac=""></span><div class="AreaSwitcher" data-v-01633eac=""></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""></ul></li>
  
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
        console.log($programSearch);
        var formData = new FormData();
        formData.append('CountryName', $country);
        formData.append('ProgramName', $program);
        formData.append('DirectionName', $direction);
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
            formData.append('Addresses', $locations[i]);
            }
        if ($durationSearch != null)
        for (var i = 0; i < $durationSearch.length; i++) {
            formData.append('Durations', $durationSearch[i]);
            }
        if ($attendenceSearch != null)
        for (var i = 0; i < $attendenceSearch.length; i++) {
            formData.append('Attendances', $attendenceSearch[i]);
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
                                console.log(value);

                                if ($lang == 'AZ') {
                                    var name = value.azName
                                    var decription = value.azDescription?.slice(0,20);
                                    console.log(decription);

                                    var countryName = value.country?.azName;
                                }
                                else if ($lang == 'EN') {
                                    var name = value.enName
                                    var decription = value.enDescription?.slice(0,10);
                                    console.log(decription);

                                    var countryName = value.country?.enName;


                                } else {
                                    var name = value.ruName;
                                    var decription = value.ruDescription?.slice(0,10);
                                    console.log(decription);

                                    var countryName = value.country?.ruName;


                                }
                                /* var image = `data:image/png;base64,${value?.universityFiles[0]?.bytes}`*/
                                //var image = `https://api.instudy.net/${value.country.countryFiles[0].path}`

                                $('#searchContent').append(`
  <li class="HoverEffect SearchResultItem">
                              <a class="SearchStudyCard js-bestFitStudycard" href="/University/Detail/${value.id}" target="_blank" data-v-0363ab3a="">
                                 <article data-v-0363ab3a="">
                                    <header class="CardHeader" data-v-0363ab3a="">
                                       <h2 class="StudyName" data-v-0363ab3a="">${name}</h2>
                                    
                                    </header>
                                    <div class="StudyInfo" data-v-0363ab3a="">
                          
                                       <div class="SummaryContainer is-collapsed" data-v-0363ab3a="">
                                          <p class="Summary is-collapsed"style="font-size:16px;" data-v-0363ab3a=""></p>
                                       </div>
                                    </div>
                                    <div class="OrganisationInfo" data-v-0363ab3a="">
                                      
                                       <div class="NameLocation" data-v-0363ab3a=""><strong class="OrganisationName" data-v-0363ab3a="">${countryName}</strong></div>
                                       <div class="Promoted" data-v-0363ab3a="">
                                          <div class="Featured" data-study-id="63138" data-v-0363ab3a="" style="position: relative;">
                                            
                                             <div class="Tooltip Bottom" style="display: none;">
                                                <div class="TooltipInner">
                                                   The university partners with us for this programme to reach students like you.
                                                </div>
                                                <div class="TooltipArrow"></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </article>
                              </a>
                           </li>



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

    searchUniversity();
    var locArr = [];
    $(document).on("change", "input[name='location']", function () {
       
       
        if (this.checked) {
            localStorage.setItem('locationSearch', "");
            locArr.push($(this).val());
            localStorage.setItem('locationSearch', JSON.stringify(locArr));
        } else {
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
            localStorage.setItem('disciplinesSearch', "");
           descArr.splice($.inArray($(this).val(), descArr), 1);            
            localStorage.setItem('disciplinesSearch', JSON.stringify(descArr));

        }

        searchUniversity();
    });
    var durArr = [];
    $(document).on("change", "input[name='durations']", function () {
        console.log("sadsadasd")
       
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
            localStorage.setItem('programSearch',"");
            degreArr.push($(this).val());
            localStorage.setItem('programSearch', JSON.stringify(degreArr));
        } else {
            localStorage.setItem('programSearch', "");
            degreArr.splice($.inArray($(this).val(), degreArr), 1);
            localStorage.setItem('programSearch', JSON.stringify(degreArr));

        }
       
        searchUniversity();
    });

});