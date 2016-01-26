app.factory('suggestions', [function(){
	
	var demoSuggestions = {
	posts: [
		{
			suggestionId: 1,
			title: 'Beer Can Chicken Roast',
			maining: 'Chicken, Beer, Herbs',
			upvotes: 5,
			comments: [{body: "hello hello beer can Chicken", upvotes: 0}],
		},
		
		{
			suggestionId: 2,
			title: 'Death by Chocolate Lava Cake',
			maining: 'Cake',
			upvotes: 9,
			comments: [],
		},
		{
			suggestionId: 3,
			title: 'Home-made spaghetti with nonas ragu',
			maining: 'Pasta, ground beef',
			upvotes: 7,
			comments: [],
		},
		{
			suggestionId:4,
			title: 'Coconut creme brulee',
			maining: 'Cream, coconut, sugar',
			upvotes: 3,
			comments: [],
		},

		{
			suggestionId: 5,
			title: 'Steak au Poivre (Steak with pepper sauce)',
			maining: 'Steak, Cream, Mushrooms',
			upvotes: 56,
			comments: [],
		},

	]
	};
	return demoSuggestions;

}]);