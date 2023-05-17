import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const ul = React.createElement("ul");
const root = document.getElementById("root");

console.dir(ul);

ReactDOM.createRoot(root).render(ul);

// root.render(<React.StrictMode></React.StrictMode>);
