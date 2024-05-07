import axios from "axios";
import React, { useEffect, useState } from "react";

const Restcountries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {//using async await
    // try {
    //   const res = await fetch("https://restcountries.com/v3.1/all");
    //   const jsondata = await res.json();
    //   setData(jsondata);
    // } catch (error) {
    //   comsole.log(error);
    // }

//using Axios
    await axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Restcontries Api</h1>
      {data.map((element, index) => {
        return (
          <>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              <div key={element.id}>
                <div className="col ">
                  <div className="card ">
                    <div className="card-title">Name: {element.name.common}</div>
                    <div className="card-title">Region: {element.region}</div>
                    <div className="card-title"> Subregion: {element.region}</div>
                    <div className="card-title"> Population: {element.population}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Restcountries;
