const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = {

	fetchPlayers: function() {
		var result = {};
		result["players"] = [];

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", "https://www.mlssoccer.com/stats/season?year=2017&group=g", false ); // false for synchronous request
		xmlHttp.send( null );
		var dom = new JSDOM(xmlHttp.responseText);

		for (i = 0; i < 10; i++) {
			result.players[i] = "Hello";
		}

		return result;
	}

	// fetchTopScorers: function () {
	// 	var xmlHttp = new XMLHttpRequest();
	// 	xmlHttp.open( "GET", "https://www.mlssoccer.com/stats/season?year=2017&group=g", false ); // false for synchronous request
	// 	xmlHttp.send( null );
	// 	var dom = new JSDOM(xmlHttp.responseText);

	// 	var json = {};
	// 	json["topScorers"] = [];
	// 	//console.log("Top Scorers: ")
	// 	for (i = 0; i < dom.window.document.querySelector("tbody").children.length; i++) {
	// 		var player = dom.window.document.querySelector("tbody").children[i].children[0].children[0].text
	// 	    //console.log(i+1 + ". " + player);
	// 	    json.topScorers[i] = player;
	// 	} 
	// 	return json;
	// },

	// fetchAudiIndex: function () {
	// 	var xmlHttp = new XMLHttpRequest();
	// 	xmlHttp.open( "GET", "http://www.audi-player-index.com/en/live/list/902316", false ); // false for synchronous request
	// 	xmlHttp.send( null );
	// 	var dom = new JSDOM(xmlHttp.responseText);

	// 	//var json = {};
	// 	//return json;
	// 	//return dom.window.document.getElementById('live_list_list').children[0].children[0].children[5].children[1].textContent;
	// 	return dom.window.document.getElementById('live_list_list').children;
	// }

};

