var app = angular.module('squid', ['wu.masonry']);

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
                "summary":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"dsf2ds",
                "summary":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"dsf2ds",
                "summary":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
                "link":""
            },
            {
                "title":"ds323242fds",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "summary":"dsfdfs",
                "link":""
            }  
        ],
        "Fiction": [
            {
                "title":"Fiction1",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"Fiction123",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"ds3fds",
                "summary":"dsfdfs",
                "link":""
            }  
        ],
        "Technology": [
            {
                "title":"Technology",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"Technology1",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"Technology34",
                "summary":"dsfdfs",
                "link":""
            } 
        ],
        "Health": [
            {
                "title":"dsf2ds",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"Health3543",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"Health",
                "summary":"HealthHealthHealthHealth",
                "link":""
            } 
        ],
        "Finance": [
            {
                "title":"Finance",
                "summary":"dsfdfs",
                "link":""
            },
            {
                "title":"Finance345r",
                "summary":"FinanceFinance",
                "link":""
            },
            {
                "title":"Finance5654645",
                "summary":"dsfdfs",
                "link":""
            } 
        ]
    }
});


app.controller("trendingCTL", function ($scope, $http) {
    // this.articles = [
    //         {
    //             "title":"dsf2ds",
    //             "summary":"dsfdsfdsf<br>fgf<b>",
    //             "link":""
    //         },
    //         {
    //             "title":"ds323242fds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"ds3fds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"dsf2ds",
    //             "summary":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
    //             "link":""
    //         },
    //         {
    //             "title":"ds323242fds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"ds3fds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"dsf2ds",
    //             "summary":"dsfdsfdsffgf<b>rgrdrgdd</b>fs",
    //             "link":""
    //         },
    //         {
    //             "title":"ds323242fds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"ds3fds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Fiction1",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Fiction123",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"ds3fds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Technology",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Technology1",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Technology34",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"dsf2ds",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Health3543",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Health",
    //             "summary":"HealthHealthHealthHealth",
    //             "link":""
    //         },
    //         {
    //             "title":"Finance",
    //             "summary":"dsfdfs",
    //             "link":""
    //         },
    //         {
    //             "title":"Finance345r",
    //             "summary":"FinanceFinance",
    //             "link":""
    //         },
    //         {
    //             "title":"Finance5654645",
    //             "summary":"dsfdfs",
    //             "link":""
    //         } 
    //     ]

        
    $http.get("http://localhost/posts-server/latest")
    .then(function(response) {
        $scope.articles = response.data;
        
    });
    
});

app.controller("postCTL", function(){
   
   this.posts = [
      {
        "name":"Anish",
        "date":"5/8/2017",
        "summary": "Asadasdasdasdfa"   
      },
      
      {
        "name":"Edwin",
        "date":"6/8/2017",
        "summary": "Asadasdasdasdfa"   
      },
      {
        "name":"Susan",
        "date":"5/8/2017",
        "summary": "Asadasdasdasdfa"   
      },   
      ]
   
});

app.controller("newsCTL", function(){
   
   this.data=[
      
      {
         "subject":"sasfafdhdajgsda",
         "summary":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
         "date":"20",
         "month":"Jan"
      },
      
      {
         "subject":"Thank uoy for the help angular",
         "summary":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
         "date":"19",
         "month":"Feb"
      },
      
      {
         "subject":"express here we cme",
         "summary":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
         "date":"15",
         "month":"Dec"
      },
      
      {
         "subject":"I love you jins@!!",
         "summary":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
         "date":"21",
         "month":"May"
      }
        
      
   ]
   
});


app.filter('trusted',
function($sce) {
    return function(ss) {
            return $sce.trustAsHtml(ss)
        };
});