extinct-mammals
===============

##Example app demonstrating Node, Express, MongoDB(mongoose), and Angular

This is a quick bootstrap demonstrating a full stack app. It is simple, but creates a good road map and reference. It doesn't cover everything. It does cover GET,POST, and DELETE.

###Steps to getting it started on your machine:

1. Make sure you have MongoDb installed on your computer.
2. Create a collection called mammals in any database you choose(I put mine in the the test database).
3. In `app.js` change `res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');` to your localhost. 
4. In `app.js` change `mongoose.connect('mongodb://localhost/test');` to your database(i.e. if my database is called 'newDatabase' I would put `mongoose.connect('mongodb://localhost/newDatabase');`).
5.Run Mongo(run `mongod` in your terminal).
6. Run `npm install` on the project in your terminal.
7. `cd` into the API folder.
8. Run `node app.js` in your terminal.
9. Open index.html in a browser.
