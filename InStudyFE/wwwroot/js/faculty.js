$(document).ready(function () {
    var pathname = window.location.pathname;
    const linkValues = pathname.split("/");
    const $lang = localStorage.getItem('lang');
    var $disciplineHeader = $('#DisciplineHeader')
    var $disciplineText = $('#DisciplineDescription')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Speciality/GetSpeciality/id?id=${linkValues[3]}`,
        success: function (data) {
            console.log(data);
            if ($lang == 'AZ') {
                var name1 = data.data.azName
                var description = data.data?.azDescription;
                $('#specialityHeader').html(`${name1} sahəsində ixtisaslar `)

            }
            else if ($lang == 'EN') {
                var name1 = data.data.enName
                var description = data.data?.enDescription;
                $('#specialityHeader').html(`Specialisations within the field of ${name1}`)

            } else {
                var name1 = data.data.ruName;
                var description = data.data?.ruDescription;
                $('#specialityHeader').html(`Специализации в области ${name1}`)

            }
            /*var image = `https://api.instudy.net/${data.data?.directionFiles[0]?.path}`*/

            //$disciplineHeader.empty();
            //$disciplineHeader.append(
            //    `   <img alt ="image" style = "width:100px !important;" class="text-center img-responsive" src = "${image}" >
            //                <h1> ${name1} </h1>
                  
            //            `
            //);
            $disciplineText.append(`
 <p>${description}</p>
`
            )
            $(`#specList`).empty();
            $.each(
                data.data.specialities, function (i, value) {
                    if ($lang == 'AZ') {
                        var specName = value.azName


                    }
                    else if ($lang == 'EN') {
                        var specName = value.azName

                    } else {
                        var specName = value.azName
                    }
                    $(`#specList`).append(
                        `
                    <li> ${specName}  </li>
`
                    );
                });


        }
    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/University/GetActiveUniversities`,
        success: function (data) {
            $(`#universities`).empty();
            $.each(
                data.data, function (i, value) {
                   
                    if ($lang == 'AZ') {
                        var name1 = value.azName
                        var description = value?.azDescription;

                    }
                    else if ($lang == 'EN') {
                        var name1 = value.enName
                        var description = value?.enDescription;

                    } else {
                        var name1 = value.ruName;
                        var description = value?.ruDescription;

                    }
                    var image = `https://api.instudy.net/${value?.universityFiles[0]?.path}`

                    $(`#universities`).append(
                        `
                             <a data-v-6e0e8e37="" data-v-60a22860="" data-study-id="319857" data-organisation-id="237" title="Strategic Events Management" href="/University/Detail?uniId=${value.id}" target="_blank" class="ContentCard js-studyCard">
                                <div data-v-78fa3586="" data-v-6e0e8e37="">
                                   <div data-v-78fa3586="" class="StudyCoverWrapper"><img data-v-78fa3586="" alt="Study cover image" src="${image}" loading="lazy" width="288" height="152"></div>
                                </div>
                                <div data-v-6e0e8e37="">
                                   <div data-v-6e0e8e37="" class="BestfitWishlist">
                     
                      
                                   </div>
                                   <div data-v-6e0e8e37="" class="OrganisationTitle">
                                      <h3 data-v-6e0e8e37="" class="StudyTitle">${name1}</h3>
                                   </div>
                                </div>
                                <div data-v-6e0e8e37="" class="OrganisationInformation">
                                   <div data-v-6e0e8e37="" class="NameLocation">
                                      <div data-v-6e0e8e37="" class="Name"></div>
                                      <div data-v-6e0e8e37="" class="Location">${value?.country?.enName}</div>
                                   </div>
                                </div>
                             </a>
                           
                          `
                    )

                }
            )




        }
    });
    //$.ajax({
    //    type: 'GET',
    //    headers: {
    //        'Content-Type': 'application/json'
    //    },
    //    url: `https://localhost:7074/api/Country/GetActiveCountries`,
    //    success: function (data) {
    //        $countryList.empty();
    //        $.each(
    //            data.data, function (i, value) {

    //                const date = new Date(value.regDate)

    //                var dd = String(date.getDate()).padStart(2, '0');
    //                var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    //                var yyyy = date.getFullYear();
    //                var time = yyyy + "/" + mm + "/" + dd;
    //                var description = value.description.slice(0, 5);
    //                $countryList.append(
    //                    `<a id="learnMore" value="${value.id}" class="list-group-item sidebar-item font-weight-bold bg-light mt-3 list-group-item-action">${value.name}</a>
    //                      `
    //                )

    //            }
    //        )




    //    }
    //})
    $(document).on('click', '#learnMore', async function () {
        let Id = $(this).attr('value');

        localStorage.setItem('countryId', Id);
        location.href = `/country/detail`;


    });
});