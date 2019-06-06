import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
let HelloWorld = () => {
    return <div>
              <h1>Welcome !</h1> 
           </div>;
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);