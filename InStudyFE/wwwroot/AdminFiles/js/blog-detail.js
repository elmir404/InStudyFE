$(document).ready(function () {
	const blogId = localStorage.getItem('blogDetail');
	console.log("blog", blogId);
	var $blogImage = $('#blogImage')
	var $blogDetail = $('#blogDetail')
	var $blogSlideDetail = $('#blogSlideDetail')
	$.ajax({
		type: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		url: `https://fainablogapi.herokuapp.com/api/Blogs/GetBlogWithId?blogId=${blogId}`,
		success: function (data) {

			console.log("sasas",data.data);
			
					$.each(
						data.data.files, function (i, files) {
							console.log(files);
							if (i == 0) {
								$blogImage.append(
									`
												<div class="carousel-item active"><img src="${files.path}" alt="img" class="img-fluid mx-auto d-block">
                                                                        <div class="text-center mt-5 mb-5 btn-list">
                                                                        </div>
                                                                    </div>

												 `
								)
								$blogSlideDetail.append(
									`
                                      <li data-bs-target="#Slider" data-bs-slide-to="${i}" class="thumb active m-2"><img src="${files.path}" alt="img"></li>
                                 `
								)
							}
							else {


								$blogImage.append(


									`
												<div class="carousel-item"><img src="${files.path}" alt="img" class="img-fluid mx-auto d-block">
                                                                        <div class="text-center mt-5 mb-5 btn-list">
                                                                        </div>
                                                                    </div>

												 `
								)
								$blogSlideDetail.append(
									`
                                                                                                           <li data-bs-target="#Slider" data-bs-slide-to="${i}" class="thumb m-2"><img src="${files.path}" alt="img"></li>
                                 `
								)
							}

						}
					)
			$blogDetail.append(
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