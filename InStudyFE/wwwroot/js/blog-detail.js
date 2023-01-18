$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split('/');
    const $lang = localStorage.getItem('lang');

    var $blogImage = $('#articleImage');
    var $blogTitle = $('#LinkTrail');
    var $blogHeader = $('#ArticleHeader');
    var $blogDetail = $('#ArticleBody');
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Blogs/GetBlogWithId?blogId=${linkValues[3]}`,
        success: function (data) {
            const date = new Date(data.data.regDate)
            console.log(data);
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = date.getFullYear();
            var time = yyyy + "/" + mm + "/" + dd;
            if ($lang == 'AZ') {
                var name1 = data.data.azTitle;
                var description = data.data?.azDescription;

            }
            else if ($lang == 'EN') {
                var name1 = data.data.enTitle;
                var description = data.data?.enDescription;

            } else {
                var name1 = data.data.ruTitle;
                var description = data.data?.ruDescription;

            }
            var image = `https://api.instudy.net/${data.data?.blogFiles[0]?.path}`
            $blogImage.empty();
            $blogImage.append(
                `   <picture> 
       <source media="all and (max-width: 480px)" srcset="${image}">
<source media="all and (min-width: 481px) and (max-width: 768px)" srcset="${image}">
<source media="all and (min-width: 769px) and (max-width: 1024px)" srcset="${image}"> <source media="all and (min-width: 1025px)" srcset="${image}">
  <img src="${image}" class="HeroImage" alt=""> </picture>
                  
                        `
            );
        
            $blogHeader.append(` <div class="ArticleHeroContent">
                            <div class="ArticleHeroText">
                                <h1 class="ArticleTitle">${name1}</h1>
                                <div class="ArticleHeaderInfo"> <time datetime=""> ${time} </time> </div>
                            </div>
                        </div>`);
            $blogDetail.append(`<p>${description}</p>`)




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