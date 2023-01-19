$(document).ready(function () {

    var $blog = $('#FeaturedArticles');
    var $blogHeader = $('#FeaturedArticlesHeader');
    var $topic = $('#topics');
    const $lang = localStorage.getItem('lang');
    function getBlogs() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Blogs/GetBlogs`,

            success: function (data) {
                if ($lang == 'AZ') {
                    var name = "Basliq"

                }
                else if ($lang == 'EN') {
                    var name = "Basliq en"
                    

                } else {
                    var name = "Basliq ru";

                }
                $blogHeader.html(`${name}`);
                $blog.empty();

                $.each(
                    data.data, function (i, value) {
                       
                        if ($lang == 'AZ') {
                            var name1 = value.azTitle
                            var description = value?.azDescription;

                        }
                        else if ($lang == 'EN') {
                            var name1 = value.enTitle
                            var description = value?.enDescription;

                        } else {
                            var name1 = value.ruTitle;
                            var description = value?.ruDescription;

                        }
                        var image = `https://api.instudy.net/${value.blogFiles[0].path}`
                        console.log(image); 
                        if (i <= 3) {
                            $topic.append(
                                `                <li> <a id="topic-1" title="Start studying abroad" href="/Blog/Detail/${value.id}">${name1}</a> </li>

                         
                           
                              
                               `

                            );
                        }
                        $blog.append(
                            ` <div class="Article">
                  <figure data-clickable="clickable">
                     <picture>
                        <source media="all and (max-width: 30em)" srcset="${image}">
                        <source media="all and (min-width: 30.063em) and (max-width: 48em)" srcset="${image}">
                        <source media="all and (min-width: 48.063em) and (max-width: 80em)" srcset="${image}">
                        <source media="all and (min-width: 80.063em)" srcset="${image}">
                        <img src="${image}" height="320" width="213" alt="st to Apply for a"> 
                     </picture>
                     <figcaption> <a href="/Blog/Detail/${value.id}" title="Test to Apply"> ${name1} </a> </figcaption>
                     <div class="ShortDescription">${description}</div>
                  </figure>
               </div>`
                        )
                    }
                )

            }

        });
    }
  
    getBlogs();
});
