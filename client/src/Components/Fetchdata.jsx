import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Fetchdata = ({Cat}) => {
    const [Data, setData] = useState("");

    const fetchdata = async () => {
        await axios
        .get(
            Cat? `https://newsapi.org/v2/top-headlines?country=in&category=${Cat}&apiKey=36ca3db82cc34c6688b6628583152318`
            :"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36ca3db82cc34c6688b6628583152318")
        .then((res) => setData(res.data.articles));
    };
        useEffect(() => {    
          fetchdata();
        },[Cat])
        //newsapi.org/v2/top-headlines?country=in&category=general&apiKey=36ca3db82cc34c6688b6628583152318
        https: return (
          <div className="container my-4">
            <h3>
              <u>TOP HEADLINES</u>
            </h3>
            <div
              className="my-2 d-flex justify-content-center align-items-center flex-column my-3"
              style={{ minHeight: "100vh" }}
            >
              {Data
                ? Data.map((items, index) => (
                    <>
                      <div
                        className="container my-3 p-3"
                        style={{
                          width: "600px",
                          boxShadow: "2px 2px 10px silver",
                          borderRadius: "3px",
                        }}
                      >
                        <h5 className="my-1">{items.title}</h5>
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            src={items.urlToImage}
                            alt="Not found"
                            className="img-fluid d-flex justify-content-center align-items-center"
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p className="my-1">{items.content}</p>
                        <Link to={items.url} target="blank">
                          view more
                        </Link>
                      </div>
                    </>
                  ))
                : "loading..."}
            </div>
          </div>
        );
}

export default Fetchdata