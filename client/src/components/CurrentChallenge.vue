

// componentDidMount() {    
//     axios
//       .get('https://github.com/users/lukeschlangen/contributions',{
//         headers: {
//           'Access-Control-Allow-Origin': '*'
//         }
//       })
//       .then(res => {
//         this.streakCounter(res);
//       })
//       .catch(err => console.log(err));
//   }

//   streakCounter(body) {
//     const $ = cheerio.load(body);
//     var data = [];
//     $('svg').find('rect').each(function(index, element) {
//         data.push({
//             count: parseInt($(element).attr('data-count')),
//             date: new Date($(element).attr('data-date'))
//         })
//     });

//     var yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);

//     data = data.sort(function(a, b) {
//         return new Date(b.date) - new Date(a.date);
//     }).filter(function(el) {
//         return el.date.getTime() <= yesterday.getTime();
//     });
//     var streakCount = 0;
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].count == 0) {
//             break;
//         }
//         streakCount++
//     }

//     console.log('streakCount:', streakCount);

//   }








// const express = require('express');
// const request = require('request');
// const cheerio = require('cheerio')

// const app = express();
// const port = 5000;

// app.get('/streak/:user', function(req, res) {
//     request('https://github.com/users/' + req.params.user + '/contributions', function(error, response, body) {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//             return;
//         }
//         processContrib(res, body);
//     });
// });

// function processContrib(res, body) {
//     var $ = cheerio.load(body);
//     var data = [];
//     $('svg').find('rect').each(function(index, element) {
//         data.push({
//             count: parseInt($(element).attr('data-count')),
//             date: new Date($(element).attr('data-date'))
//         })
//     });

//     var yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);

//     data = data.sort(function(a, b) {
//         return new Date(b.date) - new Date(a.date);
//     }).filter(function(el) {
//         return el.date.getTime() <= yesterday.getTime();
//     });
//     var streakCount = 0;
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].count == 0) {
//             break;
//         }
//         streakCount++
//     }
//     res.status(200).json({
//         streak: streakCount
//     });
// }

// app.listen(port, function() {
//     console.log('listening on port', port);
// });
