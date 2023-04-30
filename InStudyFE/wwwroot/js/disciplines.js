$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split("/");
    const $lang = localStorage.getItem('lang');
    var $disciplineHeader = $('#DisciplineHeader')
    var $disciplineText = $('#DisciplineDescription')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Direction/GetDirection?id=${linkValues[3]}`,
        success: function (data) {
           
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
            var image = `https://api.instudy.net/${data.data?.directionFiles[0]?.path}`
                
            $disciplineHeader.empty();
            $disciplineHeader.append(
                `   <img alt ="image" style = "width:100px !important;" class="text-center img-responsive" src = "${image}" >
                            <h1> ${name1} </h1>
                  
                        `
            );
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
                    <li> <a href="/Faculty/Detail/${value.id}">${specName} </a> </li>
`
                        );
                });


        }
    });
    //$.ajax({
    //    type: 'get',
    //    headers: {
    //        'content-type': 'application/json'
    //    },
    //    url: `https://api.instudy.net/api/university/getactiveuniversities`,
    //    success: function (data) {
    //        $(`#universities`).empty();
    //        $.each(
    //            data.data, function (i, value) {
    //                console.log("ssadsa", value);
    //                const date = new date(value.regdate)

    //                var dd = string(date.getdate()).padstart(2, '0');
    //                var mm = string(date.getmonth() + 1).padstart(2, '0'); //january is 0!
    //                var yyyy = date.getfullyear();
    //                var time = yyyy + "/" + mm + "/" + dd;
    //                if ($lang == 'az') {
    //                    var name1 = value.azname
    //                    var description = value?.azdescription;

    //                }
    //                else if ($lang == 'en') {
    //                    var name1 = value.enname
    //                    var description = value?.endescription;

    //                } else {
    //                    var name1 = value.runame;
    //                    var description = value?.rudescription;

    //                }
    //                var image = `https://api.instudy.net/${value?.universityfiles[0]?.path}`

    //                $(`#universities`).append(
    //                    `
                            
                           
    //                      `
    //                )

    //            }
    //        )




    //    }
    //});
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