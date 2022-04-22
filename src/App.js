import TrendMap from "./components/TrendMap";
import axios from "axios";
import { useEffect, useState } from "react";
import Geocode from "react-geocode";

function App() {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API);

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();

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
    Geocode.fromLatLng(lat, lng).then(
      response => {
        const firstAddress = response.results[0].address_components;
        const currentCountry = firstAddress[firstAddress.length - 1].long_name;
        setCountry(currentCountry);
        var newCountries = countries.filter(ele => {
          return ele.name === currentCountry;
        });
        console.log(newCountries);
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
        setCountries(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  useEffect(
    () => {
      getLocation();
    },
    [countries]
  );

  return (
    <div>
      <p>hello</p>
      {/* <TrendMap /> */}
    </div>
  );
}

export default App;
