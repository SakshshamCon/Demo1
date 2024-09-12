import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
export default function TopBar(props) {
  return (
    <>
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-maker-alt me-2 text-secondary"></i>
              <a className="text-white">123 street, New York</a>
            </small>
            <small className="me-3">
              <i className="fas fa-map-maker-alt me-2 text-secondary"></i>
              <a className="text-white">email@example.com</a>
            </small>
          </div>
          <div className="top-link pe-2">
            <a href="#" className="text-white">
              <small className="text-white mx-2">Privacy Policy</small>
            </a>
            <a href="#" className="text-white">
              <small className="text-white mx-2">Terms Of Use</small>
            </a>
            <a href="#" className="text-white">
              <small className="text-white mx-2">Terms Of Use</small>
            </a>
          </div>
        </div>
      </div>
      <Header />
    </>
  );
}
