app.factory('suggestions', [function(){
	
	var demoSuggestions = {
	posts: [
		{
			title: 'Beer Can Chicken Roast',
			maining: 'Chicken, Beer, Herbs',
			upvotes: 5,
			comments: [{body: "hello hello beer can Chicken", upvotes: 0}],
		},
		
		{
			title: 'Death by Chocolate Lava Cake',
			maining: 'Cake',
			upvotes: 9,
			comments: [],
		},
		{
			title: 'Home-made spaghetti with nonas ragu',
			maining: 'Pasta, ground beef',
			upvotes: 7,
			comments: [],
		},
		{
			title: 'Coconut creme brulee',
			maining: 'Cream, coconut, sugar',
			upvotes: 3,
			comments: [],
		},

		{
			title: 'Steak au Poivre (Steak with pepper sauce)',
			maining: 'Steak, Cream, Mushrooms',
			upvotes: 56,
			comments: [],
		},

	]
	};
	return demoSuggestions;

}]);