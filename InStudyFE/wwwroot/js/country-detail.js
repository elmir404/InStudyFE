$(document).ready(function () {
	const countryId = localStorage.getItem('countryId');
	
    var $countryList = $('#countryList')
	var $countryDetail = $('#countryDetail')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },                                                            
        url: `https://localhost:7074/api/Country/GetCountryWithId?id=${countryId}`,
        success: function (data) {
            const date = new Date(data.data.regDate)
            console.log(data);
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = date.getFullYear();                                                                                             
            var time = yyyy + "/" + mm + "/" + dd;
            $countryDetail.empty();
            $countryDetail.append(
                `  <img class="card-img-top" src="https://s30876.pcdn.co/wp-content/uploads/london-e1634207674493-1170x630.jpg.optimal.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.data.name}</h5>
                    <p class="card-text">${data.data.description}</p>

                        <div class="elementor-element elementor-element-68e9c220 elementor-widget elementor-widget-ct_showcase" data-id="68e9c220" data-element_type="widget" data-widget_type="ct_showcase.default">
                            <div class="elementor-widget-container">
                                <div class="ct-grid ct-showcase1">
                                    <div class="ct-grid-inner ct-grid-masonry row animate-time" data-gutter="8" >
                                        <div class="grid-sizer col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"></div>
                                        <div class="grid-item col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 " >
                                            <div class="item--inner ">
                                                <div class="ct-showcase-image ">
                                                    <img width="272" height="249" src="https://thelimitlessgroup.az/wp-content/uploads/2021/09/MARSHALL-UNIVERSITY.png" class="no-lazyload attachment-full lazyloaded" alt="" data-ll-status="loaded"><noscript><img width="272" height="249" src="https://thelimitlessgroup.az/wp-content/uploads/2021/09/MARSHALL-UNIVERSITY.png" class="no-lazyload attachment-full" alt="" /></noscript>                                <div class="ct-showcase-overlay"></div>
                                                    <div class="ct-showcase-button">
                                                        <a href="https://thelimitlessgroup.az/marshall-university/" class="ct-showcase-link active">Read</a>
                                                    </div>
                                                </div>

                                                <div class="ct-showcase-title">
                                                    Marshall University
                                                </div>
                                            </div>
                                          
                                        </div>
                                        
                                </div>
                            </div>
                        </div>
                </div>
                  
                        `
            )



        }
    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://localhost:7074/api/Country/GetActiveCountries`,
        success: function (data) {
            $countryList.empty();
            $.each(
                data.data, function (i, value) {
                    
                    const date = new Date(value.regDate)

                    var dd = String(date.getDate()).padStart(2, '0');
                    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = date.getFullYear();
                    var time = yyyy + "/" + mm + "/" + dd;
                    var description = value.description.slice(0, 5);
                    $countryList.append(
                        `<a id="learnMore" value="${value.id}" class="list-group-item sidebar-item font-weight-bold bg-light mt-3 list-group-item-action">${value.name}</a>
                          `
                    )

                }
            )
            



        }
    })
    $(document).on('click', '#learnMore', async function () {
        let Id = $(this).attr('value');
      
        localStorage.setItem('countryId', Id);
        location.href = `/country/detail`;


    });
});