import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Raipur");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=abb24865f293cfd54cdcf80fb47f2609`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputfield"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errormsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h1 className="location">
                <i className="fas fa-1x fa-street-view"></i>
                {search}
              </h1>
              <h2>{city.temp}°Cel</h2>
              <h3>
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
