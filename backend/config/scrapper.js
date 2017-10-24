var cheerio = require('cheerio');
var request = require('request');


module.exports = function (app, Post) {
    reqUrl = "http://www.sciencealert.com/health";
    url= "http://www.sciencealert.com";

    app.get('/scrape', function(req, res)    {

        process.nextTick(function() {
            
            request(reqUrl, function (error, response, html) {
                if (!error) {
                    var $ = cheerio.load(html);
        
                    // Finally, we'll define the variables we're going to capture
        
                    var title, image, link, summary;
        
                    var json = { title: "", image: "", link: "", summary: "" };
        
                    $('div.article-container-height, div.article-container-1-odd').filter(function () {
                        var data = $(this).find(".inner");
                        title   = data.find(".title-time-container .titletext a").text();
                        link    = data.find(".title-time-container .titletext a").attr("href");
                        summary = data.find(".title-time-container .introtext").text()
                        image   = data.find(".article-image-container img").attr('src')
                        console.log(url + image)
                        console.log(title)
                        console.log(summary)
                        
                        console.log(url + link)
                        
                        var post = new Post();
                        if (!title)  {
                            console.log("sfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                            title   = data.find(".title-time-container .titletext-feature a").text();
                            link    = data.find(".title-time-container .titletext-feature a").attr("href");
                            summary = data.find(".title-time-container .introtext-feature").text()
                            image   = data.find(".article-image-feature-container img").attr('src')
                            console.log(url + image)
                            console.log(title)
                            console.log(summary)
                            
                            console.log(url + link)
                            console.log("----------------------------------------------------------")
            
                        }
                    
                        post.title      = title.replace(/\n/, '');
                        post.link       = (url + link).replace(/\n/, '');
                        post.summary    = summary.replace(/\n/, '');
                        post.imgUrl     = (url + image).replace(/\n/, '');
                        post.sourceUrl  = url.replace(/\n/, '');

                        Post.findOne({"link": post.link}, function(err, data)    {
                            if(err)
                                res.send();
                            else{
                                if(data)  {
                                    // Already in the DB and ignore
                                } else {
                                    post.save(function(err) {
                                        if (err)
                                            throw err;
                                        
                                    });
                                }
                            }
                        });
                    });
                }
            });
        });
        res.send("Doing Scrapr");
    });
    

}