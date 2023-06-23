$(document).ready(function () {

    var $blog = $('#FeaturedArticles');
    var $blogHeader = $('#FeaturedArticlesHeader');
    
    var $topic = $('#topics');
    var $topicHeader = $('#headerTopics');
    const $lang = localStorage.getItem('lang');
    if ($lang == 'RU') {
        $topicHeader.html("Другие Cтатьи")

    }
    else if ($lang == 'EN') {
        $topicHeader.html("Other Articles")


    } else {
        $topicHeader.html("Digər Məqalələr")


    }
    function getBlogs() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Blogs/GetActiveBlogs`,

            success: function (data) {
                if ($lang == 'RU') {
                    var name = "Cтатьи";

                }
                else if ($lang == 'EN') {
                    var name = "Articles"
                    

                } else {
                    var name = "Məqalələr"
                  

                }
                $blogHeader.html(`${name}`);
                $blog.empty();

                $.each(
                    data.data, function (i, value) {
                       
                        if ($lang == 'RU') {
                           
                            var name1 = value.ruTitle;
                            var description = value?.ruDescription.slice(0, 150) + "...";
                        }
                        else if ($lang == 'EN') {
                            var name1 = value.enTitle
                            var description = value?.enDescription.slice(0, 150) + "...";

                        } else {
                           
                            var name1 = value.azTitle
                            var description = value?.azDescription.slice(0, 150) + "...";
                        }
                        var image = `https://api.instudy.net/${value.blogFiles[0].path}`
                        
                        if (i <= 10) {
                            $topic.append(
                                `               

                                   <li> <a href="/Blog/Detail?blogId=${value.id}"> ${name1}</a> </li>
                           
                              
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
                     <figcaption> <a href="/Blog/Detail?blogId=${value.id}" title="Test to Apply"> ${name1} </a> </figcaption>
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
