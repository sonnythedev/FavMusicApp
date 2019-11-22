# FavMusicApp
This NodeJs web application will let us add artists list. It will also let us add favorite songs. We can also associate each song by an artist id.

I used mongodb(mongoose connector) to create two models:

1. artists
2. favoriteSongs

The models will be saved in the following database: dbMyFavMusic. The datbase configuration can be found in config/db.config.js file. The models can be found in dbModles folder.

I am using express to create the server and handle routes. I also created two controllers to handle artists and favorite songs specfic routes:

1. artistController
2. favSongsController

I used these controller as middleware in the server.js
