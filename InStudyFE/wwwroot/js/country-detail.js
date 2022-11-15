$(document).ready(function () {
	const countryId = localStorage.getItem('countryId');
	console.log("country", countryId);
	var $blogImage = $('#blogImage')
	var $countryDetail = $('#countryDetail')
	$.ajax({
		type: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		url: `https://localhost:7074/api/Country/GetCountryWithId?id=${countryId}`,
		success: function (data) {
			const date = new Date(data.data.regDate)

			var dd = String(date.getDate()).padStart(2, '0');
			var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = date.getFullYear();
			var time = yyyy + "/" + mm + "/" + dd;
			$blogDetail.empty();
			$blogDetail.append(
				`
                    <img class="card-img-top" src="https://s30876.pcdn.co/wp-content/uploads/london-e1634207674493-1170x630.jpg.optimal.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        <div class="row">
                            <div class="col rounded-0 col-3">
                                <div class="card ">
                                    <img class="card-img-top" src="https://s30876.pcdn.co/wp-content/uploads/london-e1634207674493-1170x630.jpg.optimal.jpg" alt="Card image cap">
                                    <div class="card-body bg-transparent">
                                        <h5 class="card-title font-weight-bold">Card title</h5>
                                    </div>
                                </div>
                              
                            </div>
                            <div class="col col-3">
                                <div class="card rounded-0">
                                </div>

                            </div>
                            <div class="col col-3">
                                <div class="card rounded-0">
                                   
                                </div>
                              
                            </div>
                            <div class="col col-3">
                                <div class="card rounded-0">
                                </div>

                            </div>
                            <div class="col col-3">
                                <div class="card rounded-0">
                                </div>

                            </div>
                            <div class="col col-3">
                                <div class="card rounded-0">
                                   
                                </div>
                              
                            </div>
                        </div>
                </div>
                        
                        `
			)



		}
	})
});