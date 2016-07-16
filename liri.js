//grab data from the key.js file
var keys = require('./key.js');
//
var Twitter = require('twitter');



//store the keys in a variable
var twitterKeys = keys.twitterKeys;

//Make it so liri.js can take in one of the following commands
var commandOne = process.argv[2];
var commandTwo = process.argv[3];

if (commandOne === 'my-tweets') {
	//if command equals to my-tweets then do function myTweets which is created below
	myTweets();
}else if (commandOne === 'spotify-this-song' ) {
	spotifyThisSong();
}else if(commandOne === 'movie-this'){

}else if(commandOne === 'do-what-it-says'){

};

	function myTweets(){
		var client = new Twitter(twitterKeys);
		// sets tweet max to 20
		var params = {count: 20};
		client.get('statuses/user_timeline', params, function(error, tweets, response){
	  		//if there is no error output the tweets we fetched
	  		if (!error) {
	    		console.log(tweets);
	    		console.log(tweets.created_at);
	  		}
		});

	function spotifyThisSong(){
		// lookup: function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback){
		// 	if (!error){
		// 		console.log(hollaback);
		// 	}
		// }
		var spotify = new require('spotify');
		 	spotify.search(
		 		{ type: 'track', 
		 		query: commandTwo }, 
		 		function(err, data) {
		    if ( !err ) {
		        console.log(data);
		        return;
		    }
		    // Do something with 'data' 
		});

	};

}