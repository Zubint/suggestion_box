app.factory('suggestions', [function(){
	
	var demoSuggestions = {
	posts: [
		{
			
			title: 'Beer Can Chicken Roast',
			maining: 'Chicken, Beer, Herbs',
			upvotes: 5,
			comments: [{body: "hello hello beer can Chicken", upvotes: 0}],
			image: '../img/beerchicken.jpg',
		},
		
		{
		
			title: 'Death by Chocolate Lava Cake',
			maining: 'Cake',
			upvotes: 9,
			comments: [],
			image: '../img/chocCake.jpg',
		},
		{
			
			title: 'Home-made spaghetti with nonas ragu',
			maining: 'Pasta, ground beef',
			upvotes: 7,
			comments: [],
			image: '../img/meatballs.jpg',
		},
		{
			
			title: 'Coconut creme brulee',
			maining: 'Cream, coconut, sugar',
			upvotes: 3,
			comments: [],
			image: '../img/coconutcb.jpg',
		},

		{
		
			title: 'Steak au Poivre (Steak with pepper sauce)',
			maining: 'Steak, Cream, Mushrooms',
			upvotes: 56,
			comments: [],
			image: '../img/peppersteak.jpg',
		},

	]
	};
	return demoSuggestions;

}]);