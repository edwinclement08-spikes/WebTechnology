module.exports = []
tags = ["3d Printer hacks", "Android Hacks", "Arduino Hacks", "ARM", "Ask Hackaday", "ATtiny Hacks", "Beer Hacks", "blackberry hacks",
 "Business", "car hacks", "Cellphone Hacks", "chemistry hacks", "classic hacks", "clock hacks", "cnc hacks",
  "computer hacks", "cons", "contests", "cooking hacks", "Crowd Funding", "Curated", "Current Events", 
  "digital audio hacks", "digital cameras hacks", "downloads hacks", "drone hacks", "Engine Hacks", "Engineering", 
  "Fail of the Week", "Featured", "Fiction", "firefox hacks", "FPGA", "g1 hacks", "google hacks", "gps hacks", 
  "green hacks", "Hackaday Columns", "Hackaday links", "Hackaday Store", "Hackerspaces", "HackIt", "handhelds hacks",
   "hardware", "History", "Holiday Hacks", "home entertainment hacks", "home hacks", "how-to", "Interest",
    "internet hacks", "Interviews", "iphone hacks", "ipod hacks", "Kindle hacks", "Kinect hacks", "laptops hacks",
     "laser hacks", "led hacks", "lifehacks", "linux hacks", "lockpicking hacks", "macs hacks", "major tom", 
     "Medical hacks", "Microcontrollers", "misc hacks", "multitouch hacks", "musical hacks", "netbook hacks",
      "Network Hacks", "news", "nintendo ds hacks", "nintendo gameboy hacks", "nintendo hacks", 
      "nintendo wii hacks", "Nook Hacks", "Original Art", "palm pre hacks", "parts", "peripherals hacks", 
      "phone hacks", "playstation hacks", "podcasts", "portable audio hacks", "portable video hacks", 
      "psp hacks", "radio hacks", "rants", "Raspberry Pi", "repair hacks", "Retrotechtacular", "reviews", 
      "robots hacks", "roundup", "security hacks", "Skills", "slider", "Software Development", "software hacks",
      "solar hacks", "tablet pcs hacks", "teardown", "Tech Hacks", "The Hackaday Prize", "tool hacks", 
      "toy hacks", "transportation hacks", "Uncategorized", "video hacks", "Virtual Reality", 
      "weapons hacks", "wearable hacks", "Weekly roundup", "wireless hacks", "xbox hacks"
    ]

      

function popoutScrapperFunctions(tag) {
    let tagState = tag;
    
    return function ($, Post) {
        url = "http://www.sciencealert.com";
        
        var title, image, link, summary;

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
            post.tags = [tagState,"Sciencealert"];

            Post.findOne({ "link": post.link }, function (err, data) {
                if (err)
                    throw err;
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