import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const ctoggle_cose = () =>{
    
  } 
  return (
    <div>
      <section className="all_sidebar">
        <div className="logo_div">
          <img
            src="https://itswide.com/wp-content/themes/itswide/img/logo.png"
            alt="hehe"
            className="logo"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button>hello</button>
            <button>hello2</button>
            <button>hello2</button>
            <button>hello2</button>
          </div>
        </div>

        <div className="dash_content">
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              widht: "auto",
              backgroundColor: "yellow",
              minHeight: "5%",
            }}
          >
            <div
              style={{
                backgroundColor: "red",
              }}
            >
              <button
                onClick={toggle_cose}
                style={{
                  backgroundColor: "grey",
                }}
              >
                menu
              </button>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <div id="search_bar">
                <input type="search" name="search" />
              </div>
              <div>bellicon</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              backgroundColor: "grey",
            }}
          >
            <h1>Dashboard</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const CompoNent = {
  Sidebar,
  Dashboard,
};
export default CompoNent;
