var axios = require('axios');
const { useDispatch } = require('react-redux');
var data = JSON.stringify({
  "username": "pass",
  "password": "password"
});

var config = {
  method: 'post',
  url: 'https://hepepsfirstinterview.pythonanywhere.com/api/user/',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  data : data
};

// axios(config)
// .then(function (response) {

//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });
