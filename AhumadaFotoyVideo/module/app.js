var app = angular.module("myApp", ["ui.router", "ui.bootstrap"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    //sets up different routes
    $stateProvider
        //starts at startpage.html
      .state("startPage", {
          url: "/",
          templateUrl: "./partials/startpage.html",
          controller: "startPageController"
      })
       .state("packages", {
           url: "/packages",
           templateUrl: "./partials/packages.html",
           controller: "packagesController"
       })
        .state("aboutus", {
            url: "/aboutus",
            templateUrl: "./partials/aboutus.html",
            controller: "aboutUsController"
        })
    .state("contactus", {
        url: "/contactus",
        templateUrl: "./partials/contactus.html",
        controller: "contactUsController"
    })
    .state("video", {
        url: "/video",
        templateUrl: "./partials/video.html",
        controller: "videoController"
    })
    .state("pictures", {
        url: "/pictures",
        templateUrl: "./partials/pictures.html",
        controller: "picturesController"
    });


});
