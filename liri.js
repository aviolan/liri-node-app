js
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var request = require("request");
var moment = require("moment");

var user = process.argv[2];
var action = process.argv[3];

function liri() {
    switch (user) {
        case "concert-this":
            bandsInTown(action);
            break;

        case "spotify-this-song":
            spotifySong(action);
            break;
        
        case "movie-this":
            omdbMovie(action);
            break;

        case "do-what-it-says":
            searchText(action);
            break;

            default:
            console.log("Invalid Instruction");
            break;
    }
};

fs.writeFile("log.txt", action + "," + value, function(error){
    if (error) {
        return console.log(error);
    }

    console.log("log.txt was updated!");
});

liri(user, action)

function bandsInTown(artist) {
    request ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
    
        if (!error && response.StatusCode === 200) {
            var objectBody = JSON.parse(body);
            for (i = 0; i < objectBody.length; i++) {
                console.log("Venue: " + objectBody[i].venue.name);
                console.log("City: " + objectBody[i].venue.city + ", " + objectBody[i].venue.country);
                console.log(moment(objectBody[i].datetime).format("MM/DD/YY"));
            }
        } else {
            console.log(error);
        }
});
}

function spotifySong(songName) {
    if (songName == undefined) {
        songName = "The Sign"
        spotifySong (songName);
    } else {
        spotify.search({ type: "track", query: songName})

        .then(function(response) {
            var songData = ""
            songData += "Artist: " + response.tracks.items[0].map(arist => artist.name).join(", ") + "\n";
            songData += "Song: " + response.tracks.items[0].name + "\n";
            songData += "URL: " + response.tracks.items[0].album.external_urls.spotify + "\n";
            songData += "Album: " + response.tracks.items[0].album.name;
            console.log(songData)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

function omdbMovie(movieName) {
    request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
        if (!error && response.statusCode === 200 && movieName != undefined) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year Released: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Langauge: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        } else {
            movieName = "Mr. Nobody"
            omdbMovie (movieName);
        }
    });
}

function searchText(fileName) {
    fs.readFile(fileName, "utf8", function(error, data) {

        if (error) {
            return console.log(error);
        } 

        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);

        liri(dataArr[0], dataArr[1]);
    });
}