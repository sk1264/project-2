const express = require('express');
const router = express.Router();
const startArts = require('../db/artSeedData.js');
const Art = require('../models/artwork.js');

// Index
router.get('/', async (req, res) => {
    const art = await Art.find({});
    res.render("arts/index.ejs", {art});
});

// Create

router.get('/arts/new', (req, res) => {
    res.render("arts/new.ejs")
   })

// Edit
router.get('/:id/edit', async (req, res) => {
	const art = await Art.findById(req.params.id);
	res.render("arts/edit.ejs", {art})
})

// Post

router.post('/', async (req, res) => {
	console.log(req.body);
	const art = await Art.create(req.body);
	res.redirect('/arts');
});

// Show

router.get('/:id', async (req, res) => {
	const art = await Art.findById(req.params.id);
	res.render("arts/show.ejs", {art})
});

// Delete


module.exports = router;