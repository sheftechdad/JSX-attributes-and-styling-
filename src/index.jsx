import React from "react";
import ReactDOM from "react-dom";

const img = " https://picsum.photos/200/300;"

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <img src="https://media.istockphoto.com/id/1975701807/photo/bucatini-pasta-with-tomato-sauce-and-basil-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=PQQtlgTkiDpbW6e-_3lLGttJbnAAqLzVEGcgNbxDEC4=" alt="random" />
    <div>
      <p className="fun">Red Sauce Pasta</p>
    </div>
  </div>,
 
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
