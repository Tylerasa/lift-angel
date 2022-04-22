import TrendMap from "./components/TrendMap";
import axios from "axios";
import { useEffect } from "react";
import Geocode from "react-geocode";

function App() {
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API);
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat, lng);
    Geocode.fromLatLng(lat, lng).then(
      response => {
        const firstAddress = response.results[0].address_components;

        console.log(firstAddress[firstAddress.length- 1].long_name);
      },
      error => {
        console.error(error);
      }
    );
    // map.setCenter(new google.maps.LatLng(lat, lng));
  }
  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/countries`,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios(config)
      .then(function(response) {
        // console.log(JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div>
      <p>hello</p>
      {/* <TrendMap /> */}
    </div>
  );
}

export default App;
