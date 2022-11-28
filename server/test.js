const express = require('express')
const app = express()
const port = 3000

var Amadeus = require("amadeus");
var amadeus = new Amadeus({
  clientId: 'jbPv4LWO9Cp19y3bTSmfgyX08u2HPTFe',
  clientSecret: 'eDwhOGjp75gEB98v'
});

// amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: 'SYD',
//     destinationLocationCode: 'BKK',
//     departureDate: '2022-06-01',
//     adults: '2'
// }).then(function(response){
//   console.log(response.data);
// }).catch(function(responseError){
//   console.log(responseError.code);
// });

// List of hotels in Paris 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hotels', (req, res) => {
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-12-12',
    adults: '2',
      }).then(function (response) {
        res.send(response);
      }).catch(function (response) {
        res.send(response);
      });

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
