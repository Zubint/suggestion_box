	var mySort = function(myArray){

			myArray.sort(function(a, b){

				return b.upvotes - a.upvotes


			});


			for(i = 0; i<8; i++){

					alert(myArray[i].title + ' ' + myArray[i].upvotes);
				

			}
			

		};


