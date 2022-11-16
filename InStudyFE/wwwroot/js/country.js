$(document).ready(function () {

    var $country = $('#country');
    function getCountry() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://localhost:7074/api/Country/GetActiveCountries`,

              success: function (data) {
                $country.empty();
                $.each(
                    data.data, function (i, value) {
                        console.log(value.regDate);
                        const date = new Date(value.regDate)

                        var dd = String(date.getDate()).padStart(2, '0');
                        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = date.getFullYear();
                        var time = yyyy + "/" + mm + "/" + dd;
                        var description = value.description.slice(0, 5);
                        $country.append(
                                                `
                                                   <div class="col col-4">
                                    <div class="flip-card">
                                        <div class="flip-card-inner" tab-index="0">
                                            <div class="flip-card-front">
                                                 <div class="card-body">
                                                    <h2 class="card-title text-center font-weight-bold text-dark">${value.}</h2>
                                                    <p class="card-text text-dark text-center">${value}</p>
                                                </div>
                                            </div>
                                            <div class="flip-card-back" style="background-image:url('${value}');">
                                                <div class="card-body">
                                                    <h2 class="card-title text-left font-weight-bold">${value.name}</h2>
                                                    <p class="card-text text-left">${description}</p>
                                                    <a value="id" id="learnMore" class="btn btn-danger btn-lg">Learn More +</a>
                                                </div>
       
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
    }
    $(document).on('click', '#learnMore', async function () {
        let Id = $(this).attr('value');
        console.log(Id);
        localStorage.setItem('countryId', Id);
        location.href = `/country/detail`;


    });
    getCountry();
});