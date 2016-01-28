app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {

		
		
		$scope.suggestionPosts = suggestions.posts[$routeParams.suggestionId];


		$scope.addComment = function() {
			
			if ($scope.suggestionPost.comment.body === "" || !$scope.suggestionPost.comment.body) {

//				return; //do not do anything if the  comment is empty
			}

				//otherwise, push the comments into the service

				$scope.suggestionPosts.comments.push({
					body: $scope.suggestionPost.comment.body, upvotes: 0

				});
			
		
					$scope.suggestionPost.comment.body ='';
		};

		$scope.upVoteComment = function(comment){

			// $scope.suggestionPosts.comments.upvotes +=1  
			 comment.upvotes +=1

			};

//			 

}]);



