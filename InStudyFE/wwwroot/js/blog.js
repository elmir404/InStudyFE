$(document).ready(function () {

    var $blog = $('#blog');
    function getBlogs() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://localhost:7074/api/Blogs/GetBlogs`,

            success: function (data) {
                $blog.empty();
                $.each(
                    data.data, function (i, value) {
                        console.log(value.regDate);
                        const date = new Date(value.regDate)

                        var dd = String(date.getDate()).padStart(2, '0');
                        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = date.getFullYear();
                        var time = yyyy + "/" + mm + "/" + dd;
                        var description = value.description.slice(0, 10);
                        if (i <= 3) {
                            $blogCarousel.append(
                                `  <div class="carousel-item active">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a> <h1>${value[0].Name}</h1> </a>
                                            <div class="d-flex"><img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">08 Ekim 2022</span></div>
                                            <p>${description}</p>
                                            <a>TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a >
                                                <img
                                                    class="d-block w-100"
                                                    src="${value[0].imagefiles.path}"
                                                    alt="${value[0].Name}"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a> <h1>${value[1].Name}</h1> </a>
                                            <div class="d-flex">
                                                 <img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">${time}</span>
                                            </div>
                                            <p>${description}</p>
                                            <a>TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a>
                                                <img class="d-block w-100" src="${value[1].filePath}" alt="${value[1].Name}" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a href="blog/danimarka-is-ilanlari.html"> <h1>${value[2].name}</h1> </a>
                                            <div class="d-flex"><img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">${time}</span></div>
                                            <p>${description}</p>
                                            <a >TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a >
                                                <img class="d-block w-100" src="${value[2]}" alt="Danimarka İş İlanları ve İş Başvurusu 2022" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a > <h1>${value[3].name}</h1> </a>
                                            <div class="d-flex"><img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">${time}</span></div>
                                            <p>${description}</p>
                                            <a >TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a href="blog/kanada-is-ilanlari.html">
                                                <img class="d-block w-100" src="${value[3]}" alt="${value[0].name}" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                         
                           
                              
                               `

                            );
                        }
                        $blog.append(
                            ` <div  class="blog-list-detail">
                          <a value="${value.id}" id="learnMore"  >
                             <div  class="img-div"><img src="${value}" title="${value}" alt="${value}" class="lazy w-100"></div>
                          </a>
                          <div  class="title-programs">
                             <h3 ><a  href="${value}">${value} </a></h3>
                             <div  class="location-programs d-flex">
                                
                                <div  class="d-flex"><img  src="assets/css/images/icons/icon-clock-grey.svg" alt=""> <span  class="time-text"> ${value}</span></div>
                             </div>
                          </div>
                       </div>`
                        )
                    }
                )

            }

        });
    }
    $(document).on('click', '#learnMore', async function () {
        let Id = $(this).attr('value');
        console.log(Id);
        localStorage.setItem('blogId', Id);
        location.href = `/blog/detail`;


    });
    getBlogs();
});
