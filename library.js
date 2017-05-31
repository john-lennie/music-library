var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

function returnPlaylists(currentPlaylist) {
    var playlistId = currentPlaylist.id;
    var playlistName = currentPlaylist.name;
    var numberOfTracks = currentPlaylist.tracks.length;
    return (playlistId + ": " + playlistName + " - " + numberOfTracks+ " tracks" );
}



var printPlaylists = function () {

  var libraryPlaylists =  library.playlists;
  for (var currentPlaylist in libraryPlaylists) {

    //console.log(libraryPlaylist[currentPlaylist].name);

    if(libraryPlaylists.hasOwnProperty(currentPlaylist)) {

      console.log(returnPlaylists(libraryPlaylists[currentPlaylist]));

    // access playlist object to get key name
    // var playlistId = libraryPlaylists[currentPlaylist].id;
    //console.log(playlistId);

    // once we have id we need to get name of playlist
    // var playlistName = libraryPlaylists[currentPlaylist].name;
    //console.log(playlistName);

    // then we need to get number of tracks (.length)

    // var numberOfTracks = libraryPlaylists[currentPlaylist].tracks.length;
    //console.log(numberOfTracks);
    // print results as one string.

    // console.log(playlistId + ": " + playlistName + " - " + numberOfTracks+ " tracks" );

    }

  }

};

printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

    var libraryTracks =  library.tracks;
    for (var currentTrack in libraryTracks) {

    //console.log(libraryPlaylist[currentTrack].name);

    if(libraryTracks.hasOwnProperty(currentTrack)) {

    // access playlist object to get key name
    var trackId = libraryTracks[currentTrack].id;
    //console.log(trackId);

    // once we have id we need to get name of playlist
    var trackName = libraryTracks[currentTrack].name;
    //console.log(trackName);

    var trackArtist = libraryTracks[currentTrack].artist;

    var trackAlbum = libraryTracks[currentTrack].album;

    console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum +")" );

    }

  }

}

printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}