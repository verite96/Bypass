// Inports
const express = require('express');
const hbs = require('hbs');

const app = express();

// Other variables
let port = process.env.PORT || 3000;

// Hbs Setups
hbs.registerPartials(__dirname+'/views/partials');

// hbs helpers
hbs.registerHelper('currentYear', () => {
	return new Date().getFullYear();
});



// Middleware
app.use(express.static(__dirname+'/public'));

// Set view engine
app.set('view engine','hbs');

// Get Requests
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Home'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About'
	});
});

app.get('/contact', (req, res) => {
	res.render('contact',{
		title: 'Contact'
	});
});

// Listen to port
app.listen(port, () => {
	console.log(`Listening to server on port ${port}`);
});