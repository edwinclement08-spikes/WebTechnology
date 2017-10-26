var app = angular.module('squid', []);

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


app.controller("articleTabsCTL", function ($scope, $http) {

    this.tabs = ["Technology", "Health", "Environment",  "Space", "Humans","Physics", "Nature" ];
    this.currentTab = this.tabs[0];
    this.tabData = {
    }
    
    
    var controller = this;

    for(let i= 0; i <  controller.tabs.length; i++) {
        console.log("http://localhost:3000/posts-server/" + controller.tabs[i])
        
        $http.get("http://localhost:3000/posts-server/" + controller.tabs[i])
        .then(function(response) {
            controller.tabData[controller.tabs[i]] = response.data;
            console.log( controller.tabData[controller.tabs[i]]) 
        });
        
    }

});


app.controller("trendingCTL", function ($scope, $http) {
        
    $http.get("http://localhost:3000/posts-server/latest")
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