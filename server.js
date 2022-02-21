//login.js
// THEN my user credentials are saved and I am logged into the site

//Post.js
// WHEN I click on an existing blog post
// THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

//dashboard docs - gets data and posts an html page
// WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

//add-post.js
// WHEN I click on the button to add a new blog post
// THEN I am prompted to enter both a title and contents for my blog post
// WHEN I click on the button to create a new blog post
// THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

//edit-post.js
// WHEN I click on one of my existing posts in the dashboard
// THEN I am able to delete or update my post and taken back to an updated dashboard

//logout.js
// WHEN I click on the logout option in the navigation
// THEN I am signed out of the site

//google it
// WHEN I am idle on the site for more than a set time
// THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(routes);

//might want to delete force in future
sequelize.sync({ force: false }).then(() => { //CAUSING TABLE PROBLEMS FIX HERE
  app.listen(PORT, () => console.log('Listening!'));
});