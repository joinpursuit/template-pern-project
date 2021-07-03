import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/test`)
      .then(
        (response) => setDays(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
