app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){

	$scope.helloWorld = "Top 5 Upvoted recipies: ";

	$scope.posts = suggestions.posts

	

	$scope.addSuggestion = function(){
		 //Don't submit empty text
		
		 if($scope.post.title === "" || !$scope.post.title){
		 	return;
		}
	 	
		//push suggestion posts in suggestions.js

		$scope.posts.push({
			suggestionId: $scope.posts.length +1,
			title: $scope.post.title,
			maining: $scope.post.maining,
			upvotes: 0,
			comments:[]

		});
			$scope.post.title ='';
			$scope.post.maining =''; 
		
	};


	$scope.upVote = function(post){

			 post.upvotes +=1
			
			
	};
 	

	
}]);


// $scope.posts = suggestions.posts.sort(function(a, b){

//				return b.upvotes - a.upvotes

//			}); 




