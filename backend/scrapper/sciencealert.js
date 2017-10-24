module.exports = []

// format :
// array of
// (urlToDownload, function to call)
// function format should take a parameter, Post schema 

function popoutScrapperFunctions(tag) {
    return function ($, Post) {
        url = "http://www.sciencealert.com";

        var title, image, link, summary;
        var json = { title: "", image: "", link: "", summary: "" };

        $('div.article-container-height, div.article-container-1-odd').filter(function () {
            var data = $(this).find(".inner");
            title = data.find(".title-time-container .titletext a").text();
            link = data.find(".title-time-container .titletext a").attr("href");
            summary = data.find(".title-time-container .introtext").text()
            image = data.find(".article-image-container img").attr('src')

            var post = new Post();
            if (!title) {
                title = data.find(".title-time-container .titletext-feature a").text();
                link = data.find(".title-time-container .titletext-feature a").attr("href");
                summary = data.find(".title-time-container .introtext-feature").text()
                image = data.find(".article-image-feature-container img").attr('src')
            }

            post.title = title.replace(/\n/, '');
            post.link = (url + link).replace(/\n/, '');
            post.summary = summary.replace(/\n/, '');
            post.imgUrl = (url + image).replace(/\n/, '');
            post.sourceUrl = url.replace(/\n/, '');
            post.tag = [tag];

            Post.findOne({ "link": post.link }, function (err, data) {
                if (err)
                    res.send();
                else {
                    if (data) {
                        // Already in the DB and ignore
                    } else {
                        post.save(function (err) {
                            if (err)
                                throw err;

                        });
                    }
                }
            });
        });
    }

}

// Technology
module.exports.push(
    [
        "http://www.sciencealert.com/tech",
        popoutScrapperFunctions("Technology")
    ],
    [
        "http://www.sciencealert.com/health",
        popoutScrapperFunctions("Health")
    ],
    [
        "http://www.sciencealert.com/environment",
        popoutScrapperFunctions("Environment")
    ],
    [
        "http://www.sciencealert.com/space",
        popoutScrapperFunctions("Space")
    ],
    [
        "http://www.sciencealert.com/humans",
        popoutScrapperFunctions("Humans")
    ],
    [
        "http://www.sciencealert.com/physics",
        popoutScrapperFunctions("Physics")
    ],
    [
        "http://www.sciencealert.com/nature",
        popoutScrapperFunctions("Nature")
    ],

) 