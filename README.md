# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for Songs, Bands in Town for concerts, and OMDB for movies.

# Demo

<img src="https://github.com/aviolan/liri-node-app/blob/master/images/ezgif.com-optimize.gif" alt="demo" style="max-width:100%;">

# Usage

LIRI commands:

<ul>
    <li><code>concert-this "artist"</code> - utilized Bands In Town API and returns Artists' upcoming concerts by listing the name of the venue, the location, and date of the event</li>
    <li><code>spotify-this-song "song name"</code> - utilizes Spotify API and returns Artist name, Song name, Link to preview of song, and album. No Song provided defaults to "The Sign" by Ace of Base</li>
    <li><code>movie-this "name of movie"</code> - utilizes OMDB API and returns Title, Year, IMDB/RT Rating, Country of Origin, Language, Plot Summary, and Actors. No movie provided defaults to the movie "Mr. Nobody"</li>
    <li><code>do-what-it-says</code> - reads "random.txt" file and executes command inside file</li>
</ul>

Also logs most recent command into log.txt

# Languages Used

<ul>
    <li>Javascript</li>
    <li>Node.js</li>
        <ul>
            <li><a href="https://www.npmjs.com/package/axios">AXIOS</a></li>
            <li><a href="https://www.npmjs.com/package/node-spotify-api">Node-Spotify-API</a></li>
            <li><a href="http://www.omdbapi.com">OMDB API</a></li>
            <li><a href="http://www.artists.bandsintown.com/bandsintown-api">Bands In Town API</a></li>
            <li><a href="https://www.npmjs.com/package/moment">Moment</a></li>
            <li><a href="https://www.npmjs.com/package/dotenv">DotEnv</a></li>
        </ul>
    <li>JSON</li>
</ul>