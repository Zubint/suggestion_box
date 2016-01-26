app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {

		
		
		$scope.suggestionPosts = suggestions.posts[$routeParams.suggestionId];

			


}]);


// $scope.addComment = function(){
		 //Don't submit empty text //
		
//		 if($scope.post.comments === "" || !$scope.post.comments){
//		 	return;
//		}
	 	
		//push comments posts in suggestions.js

//		$scope.posts.push({
	
//			comments: [$scope.post.comments.body, $scope.post.comments.upvotes],
			
//		});
//			$scope.post.comments ='';
		
//	};

//		$scope.upVote = function(comment){

//			 $scope.post.comments.upvotes +=1  

//			 