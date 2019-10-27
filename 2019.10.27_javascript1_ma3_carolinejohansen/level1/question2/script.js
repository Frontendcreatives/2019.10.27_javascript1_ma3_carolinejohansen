//Console.log out elements in JSON file

var myAuthor = {
	"video" : [{
		"id" : 12312412312,
		"name" : "Ecuaciones Diferenciales",
		"url" : "/video/math/edo/12312412312",
		"author" : {
			"data" : [{
				"name_author" : "Alejandro Morales",
				"url" : "/author/alejandro-morales",
				"type" : "master"
			}]
		}
	}]
}


for ( var i = 0; i <= myAuthor.video.length; i++ ){
	for ( key in myAuthor.video[i]){

		var output = myAuthor.video[i][key];

		console.log(output);
	}


for (var j = 0; j <= myAuthor.video[i].author.data.length; j++ ){
	for ( key in myAuthor.video[i].author.data[j] ){
		var outputData = myAuthor.video[i].author.data[j][key];
		console.log(outputData);
			}
		}
	};
