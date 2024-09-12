import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="container-fluid fixed-top">
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a to="/" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
