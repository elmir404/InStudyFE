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
                        var description = value.description.slice(0, 20);

                        $blog.append(
                            `
                            <ol class="carousel-indicators">
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="3" class=""></li>
                               </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a href="blog/erasmus-hibesi-ne-kadar-gecinebilir-miyim.html"> <h1>Erasmus Hibesi Ne Kadar? Geçinebilir Miyim?</h1> </a>
                                            <div class="d-flex"><img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">08 Ekim 2022</span></div>
                                            <p>Erasmus Öğrenci Değişim Hareketliliği ile yurtdışına çıkacak öğrencilerin aklı alacağı hibenin yetip yetmeyeceği konusunda karışık. Hangi ülke ne kadar hibe veriyor?</p>
                                            <a href="blog/erasmus-hibesi-ne-kadar-gecinebilir-miyim.html">TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a href="blog/erasmus-hibesi-ne-kadar-gecinebilir-miyim.html">
                                                <img
                                                    class="d-block w-100"
                                                    src="../d92mazmete5uc.cloudfront.net/public/uploads/post/2124/o_1disrc0k0k7q1eqa1tpm10amft7-thumb_blog_list_small.jpg"
                                                    alt="Erasmus Hibesi Ne Kadar? Geçinebilir Miyim?"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a href="blog/stem-nedir-stem-egitiminin-onemi.html"> <h1>STEM Nedir? STEM Eğitiminin Önemi</h1> </a>
                                            <div class="d-flex">
                                                <span class="conditions">Yurtdışı Rehberi</span> <img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">08 Ekim 2022</span>
                                            </div>
                                            <p>STEM eğitimi, 21. yüzyılın gündelik ve bilimsel ihtiyaçlarına multidispliner yaklaşıp bilimsel-teknolojik-mühendislik-matematik disiplinlerini bir araya getirmektedir.</p>
                                            <a href="blog/stem-nedir-stem-egitiminin-onemi.html">TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a href="blog/stem-nedir-stem-egitiminin-onemi.html">
                                                <img class="d-block w-100" src="../d92mazmete5uc.cloudfront.net/public/uploads/post/3701/stem-thumb_blog_list_small.jpg" alt="STEM Nedir? STEM Eğitiminin Önemi" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a href="blog/danimarka-is-ilanlari.html"> <h1>Danimarka İş İlanları ve İş Başvurusu 2022</h1> </a>
                                            <div class="d-flex"><img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">13 Eylül 2022</span></div>
                                            <p>Danimarka İş İlanları ve İş Başvurusu Süreci hakkında tüm detaylar..</p>
                                            <a href="blog/danimarka-is-ilanlari.html">TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a href="blog/danimarka-is-ilanlari.html">
                                                <img class="d-block w-100" src="../d92mazmete5uc.cloudfront.net/public/uploads/post/31986/danimarka-is-bulmak-thumb_blog_list_small.jpg" alt="Danimarka İş İlanları ve İş Başvurusu 2022" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="carousel-item-detail">
                                        <div class="carousel-item-detail-text">
                                            <a href="blog/kanada-is-ilanlari.html"> <h1>Kanada İş İlanları ve İş Başvurusu 2022</h1> </a>
                                            <div class="d-flex"><img class="detail-icon" src="~/css/images/icons/icon-calender-grey.svg" alt="" /> <span class="calendar">13 Eylül 2022</span></div>
                                            <p>Kanada İş İlanları ve Kanada İş Başvurusu 2022 detaylar Endlessabroad.com.tr&#039;de.</p>
                                            <a href="blog/kanada-is-ilanlari.html">TÜMÜNÜ GÖR</a>
                                        </div>
                                        <div class="carousel-item-detail-img">
                                            <a href="blog/kanada-is-ilanlari.html">
                                                <img class="d-block w-100" src="../d92mazmete5uc.cloudfront.net/public/uploads/post/31987/kanada-is-ilanlari-thumb_blog_list_small.jpg" alt="Kanada İş İlanları ve İş Başvurusu 2022" />
                                            </a>
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
        localStorage.setItem('blogId', Id);
        location.href = `/blog/detail`;


    });
    getBlogs();
});
