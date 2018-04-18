const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var Post = require("../models/post");
var Github = require("../models/challenge.js");

mongoose.connect('mongodb://localhost:27017/posts');
mongoose.connect('mongodb://localhost:27017/challenges');

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function (callback) {
    console.log("Connection Succeeded");
});

// // create a new user
// var testUser = new Github.Admin({
//     username: 'jmar777',
//     password: 'Password123'
// });

// // save user to database
// testUser.save(function(err) {
//     if (err) throw err;
// });

// // fetch user and test password verification
// Github.Admin.findOne({ username: 'jmar777' }, function(err, user) {
//     if (err) throw err;

//     // test a matching password
//     user.comparePassword('Password123', function(err, isMatch) {
//         if (err) throw err;
//         console.log('Password123:', isMatch); // -&gt; Password123: true
//     });

//     // test a failing password
//     user.comparePassword('123Password', function(err, isMatch) {
//         if (err) throw err;
//         console.log('123Password:', isMatch); // -&gt; 123Password: false
//     });
// });

app.post('/challenges/add', (req, res) => {
    var db = req.db;
    var name = req.body.name;
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var newChallenge = new Github.Challenge({
        name: title,
        start_date: start_date,
        end_date: end_date,
        current: true
    })

    newChallenge.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Challenge saved successfully!'
        })
    })
})

// Fetch all posts
app.get('/posts', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
        if (error) {
            console.error(error);
        }
        res.send({
            posts: posts
        })
    }).sort({
        _id: -1
    })
})

// Add new post
app.post('/posts', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title: title,
        description: description
    })

    new_post.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
})

// Fetch single post
app.get('/post/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) {
            console.error(error);
        }
        res.send(post)
    })
})

// Update a post
app.put('/posts/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
        if (error) {
            console.error(error);
        }

        post.title = req.body.title
        post.description = req.body.description
        post.save(function (error) {
            if (error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
})


// Delete a post
app.delete('/posts/:id', (req, res) => {
    var db = req.db;
    Post.remove({
        _id: req.params.id
    }, function (err, post) {
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
})

app.listen(process.env.PORT || 8081)