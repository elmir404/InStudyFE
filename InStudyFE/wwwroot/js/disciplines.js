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
        url: `https://api.instudy.net/api/Speciality/GetSpeciality/id?id=${linkValues[3]}`,
        success: function (data) {
            const date = new Date(data.data.regDate)
            console.log(data);
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = date.getFullYear();
            var time = yyyy + "/" + mm + "/" + dd;
            if ($lang == 'AZ') {
                var name1 = data.data.azName
                var description = data.data?.azDescription;

            }
            else if ($lang == 'EN') {
                var name1 = data.data.enName
                var description = data.data?.enDescription;

            } else {
                var name1 = data.data.ruName;
                var description = data.data?.ruDescription;

            }
            $disciplineHeader.empty();
            $disciplineHeader.append(
                `   <i class="lnr-balance DisciplineIcon"></i>
                            <h1> ${name1} </h1>
                  
                        `
            );
            $disciplineText.append(`
 <p>${description}</p>
`
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