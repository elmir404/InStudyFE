$(document).ready(function () {

    var $country = $('#countryList');
    const $lang = localStorage.getItem('lang');
    function getCountry() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Country/GetActiveCountries`,

              success: function (data) {
                $country.empty();
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
                        
                        $country.append(
                                                `
                                              <li data-name="${name}" data-studies="3"> <a
                                    href="/Country/Detail/${value.id}"
                                    title="${name}"> ${name} </a> </li>
                                         `
                        )

                    }
                )

            }

        });
    }
    $(document).on('click', '#learnMore', async function () {
        let Id = $(this).attr('value');
        console.log(Id);
        localStorage.setItem('countryId', Id);
        location.href = `/country/detail`;


    });
    getCountry();
});