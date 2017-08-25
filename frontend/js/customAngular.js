var app = angular.module('squid', []);

app.controller("pageCTL", function()    {
    this.subPages = [
        ["Home"], 
        ["Trending"], 
        ["You May like this"],
        ["Updates"]
    ];
    this.currentSubPage = "Home";
});


app.controller("workspaceCTL", function () {
    this.temp = "Testing workspace controller";         // *REMOVE*

}
);


app.controller("articleTabsCTL", function () {
    this.currentTab = "Science";
    this.tabs = ["Science", "Fiction", "Technology", "Health", "Finance"];
    this.tabData = {
        "Science": [
            {
                "title":"dsf2ds",
                "content":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"dsf2ds",
                "content":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"dsf2ds",
                "content":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            }  
        ],
        "Fiction": [
            {
                "title":"Fiction1",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Fiction123",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            }  
        ],
        "Technology": [
            {
                "title":"Technology",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Technology1",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Technology34",
                "content":"dsfdfs",
                "link":""
            } 
        ],
        "Health": [
            {
                "title":"dsf2ds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Health3543",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Health",
                "content":"HealthHealthHealthHealth",
                "link":""
            } 
        ],
        "Finance": [
            {
                "title":"Finance",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Finance345r",
                "content":"FinanceFinance",
                "link":""
            },
            {
                "title":"Finance5654645",
                "content":"dsfdfs",
                "link":""
            } 
        ]
    }
});


app.controller("trendingCTL", function () {
    this.articles = [
            {
                "title":"dsf2ds",
                "content":"dsfdsfdsf<br>fgf<b>",
                "link":""
            },
            {
                "title":"ds323242fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"dsf2ds",
                "content":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"dsf2ds",
                "content":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Fiction1",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Fiction123",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Technology",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Technology1",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Technology34",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"dsf2ds",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Health3543",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Health",
                "content":"HealthHealthHealthHealth",
                "link":""
            },
            {
                "title":"Finance",
                "content":"dsfdfs",
                "link":""
            },
            {
                "title":"Finance345r",
                "content":"FinanceFinance",
                "link":""
            },
            {
                "title":"Finance5654645",
                "content":"dsfdfs",
                "link":""
            } 
        ]
    
});

app.filter('trusted',
function($sce) {
    return function(ss) {
            return $sce.trustAsHtml(ss)
        };
});