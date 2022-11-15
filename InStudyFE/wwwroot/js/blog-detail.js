$(document).ready(function () {

    var $blog = $('#blog');
    function getBlogs() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://localhost:7223/api/Blogs/GetBlogs`,

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
                                <div class="col-lg-4 col-md-6">
                                            <article class="post post-grid style-two aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">
                                                <div class="post-thumb-area">
                                                    <figure class="post-thumb">
                                                        <a value="${value.id}" id="learnMore">
                                                            <img src="${value?.files[0].path}" alt="${value?.files[0].fileName}" />
                                                        </a>
                                                    </figure>
                                                    <!-- /.post-thumb -->
                                                </div>
                                                <!-- /.post-thumb-area -->

                                                <div class="post-details">
                                                    <div class="entry-meta entry-meta-date">
                                                        <div class="entry-date">
                                                            ${time}
                                                        </div>
                                                    </div>
                                                    <!--./ entry-meta-date -->
                                                    <h2 class="entry-title">
                                                        <a value="${value.id}" style="cursor:pointer;" id="learnMore">
                                                            ${value.title}
                                                        </a>
                                                    </h2>
                                                    <!-- /.entry-title -->
                                                    <p class="entry-description">
                                                       ${description}
                                                    </p>
                                                    <div class="entry-meta">
                                                        <div class="entry-meta-author">
                                                            <div class="entry-author-name">
                                                                By <a href="blog.html">Admin</a>
                                                            </div>
                                                        </div>
                                                        <!--./ entry-meta-author -->

                                                        <div class="entry-category">
                                                            /*<a href="blog.html"> ${value.categoryName}</a>*/
                                                        </div>
                                                        <!--./ entry-category -->
                                                    </div>
                                                    <!-- /.entry-meta -->
                                                </div>
                                                <!-- /.post-details -->
                                            </article>
                                            <!-- /.post -->
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