$(document).ready(function () {
	const aboutId = localStorage.getItem('aboutDetail');

	var $aboutImage = $('#aboutImage')
	var $aboutDetail = $('#aboutDetail')
	var $aboutSlideDetail = $('#aboutSlideDetail')
	$.ajax({
		type: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		url: `https://fainablogapi.herokuapp.com/api/About/GetAboutWithId?id=${aboutId}`,
		success: function (data) {

			console.log(data);
			$aboutDetail.empty();
			$aboutImage.empty();
			$aboutSlideDetail.empty();
			$.each(
				data.data.files, function (i, files) {
					if (i == 0) {
						$aboutImage.append(


							`
												<div class="carousel-item active"><img src="${files.path}" alt="img" class="img-fluid mx-auto d-block">
                                                                        <div class="text-center mt-5 mb-5 btn-list">
                                                                        </div>
                                                                    </div>

												 `
						)
						$aboutSlideDetail.append(
							`
                                                                                                           <li data-bs-target="#Slider" data-bs-slide-to="${i}" class="thumb active m-2"><img src="${files.path}" alt="img"></li>
                                 `
						)
					}
					else {


						$aboutImage.append(


							`
												<div class="carousel-item"><img src="${files.path}" alt="img" class="img-fluid mx-auto d-block">
                                                                        <div class="text-center mt-5 mb-5 btn-list">
                                                                        </div>
                                                                    </div>

												 `
						)
						$aboutSlideDetail.append(
							`
                                                                                                           <li data-bs-target="#Slider" data-bs-slide-to="${i}" class="thumb m-2"><img src="${files.path}" alt="img"></li>
                                 `
						)
					}

				}
			)
			$aboutDetail.append(
				`
                    <div class="mt-2 mb-4">
                                                    <h3 r" class="mb-3 fw-semibold">${data.data.title}</h3>
                                                    <h4 class="mt-4"><b> Description</b></h4>
                                                    <p>${data.data.description}</p>
                                                   
                                                    <hr>

                                                </div>
                        
                        `
			)



		}
	})
});