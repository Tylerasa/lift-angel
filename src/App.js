import TrendMap from "./components/TrendMap";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api.twitter.com/1.1/trends/place.json?id=23424824",
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAH2lbAEAAAAAoTLWB0FqzBbqeueksaqNec6EfCg%3DbTjzLjgOc2nEK2qCaj95exv9l7suRHnxfrMbY2Q6d4UcE379zD",
        "access-control-allow-origin": "*"
      }
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <TrendMap />
    </div>
  );
}

export default App;
