﻿(function (angular) {
  "use strict";

  angular
  .module("Cerberus.TemplateEngine")
  .controller("Cerberus.TemplateEngine.Controller.Component.SocialMedia.RSS", [
		"$scope",
		"$http",
		function ($scope, $http) {
		  //testfeed: http://feeds.idg.se/CsAffrssystem
		  var googleXMLToJSONPUrl = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q={0}";
		  var defaultContent = new Cerberus.TemplateEngine.Model.Component.SocialMedia.RSS();

		  function FetchRSS() {
		    $http
					.jsonp(String.format(googleXMLToJSONPUrl, encodeURIComponent($scope.Content.RSSFeedUrl)))
					.then(function (result) {
					  if (result.data.responseData === undefined) {
					    return;
					  }

					  $scope.RSSFeed = result.data.responseData.feed;
					  $scope.Stories = $scope.RSSFeed.entries;
					});
		  }

		  $scope.Content = $scope.Component.Content;
		}
  ]);
})(angular);