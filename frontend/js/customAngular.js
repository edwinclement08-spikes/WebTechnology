var app = angular.module('squid', [ 'iso.directives']);

app.controller("pageCTL", function()    {
    this.subPages = [
        ["Home"], 
        ["Trending"], 
        ["You May like this"],
        ["Updates"]
    ];
    this.currentSubPage = "Trending";
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
        "content": "Asadasdasdasdfa"   
      },
      
      {
        "name":"Edwin",
        "date":"6/8/2017",
        "content": "Asadasdasdasdfa"   
      },
      {
        "name":"Susan",
        "date":"5/8/2017",
        "content": "Asadasdasdasdfa"   
      },   
      ]
   
});

app.controller("newsCTL", function(){
   
   this.data=[
      
      {
         "subject":"sasfafdhdajgsda",
         "content":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
         "date":"20",
         "month":"Jan"
      },
      
      {
         "subject":"Thank uoy for the help angular",
         "content":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
         "date":"19",
         "month":"Feb"
      },
      
      {
         "subject":"express here we cme",
         "content":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
         "date":"15",
         "month":"Dec"
      },
      
      {
         "subject":"I love you jins@!!",
         "content":"ALASAPSKjsdnjasdfbaisdfuhausdpqwdjapskdnajdkbfa",
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


app.directive("contentHolder", function() {
    return {
        template : function() {
          var content = [
            '<a href="{{article.link}}" class="squid-article-box">',
              '<div class="widget-box">',
                '<div class="widget-content title">{{article.title}}</div>',
                '<div class="widget-content " ng-bind-html="article.summary | trusted"></div>',
                '<div class="widget-content " >',
                  '<img src="{{article.imgUrl}}">',
                '</div>',
              '</div>',
            '</a>"'].join("");
          return content;
        }
    }
});