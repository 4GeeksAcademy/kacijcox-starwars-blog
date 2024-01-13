import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="container mt-5">
	<h2 className="mb-3">characters</h2>
    <div className="row flex-nowrap overflow-auto">
      {/* Card 1 */}
      <div className="col-md-4">
        <div className="card">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/avar-kriss-main_e207523d.jpeg?region=0%2C0%2C1920%2C1080"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-name">name</p>
            <p className="card-gender">gender</p>
			<p className="card-haircolor">haircolor</p>
			<p className="card-eyecolor">eyecolor</p>
            <a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="card">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/avar-kriss-main_e207523d.jpeg?region=0%2C0%2C1920%2C1080"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-name">name</p>
            <p className="card-gender">gender</p>
			<p className="card-haircolor">haircolor</p>
			<p className="card-eyecolor">eyecolor</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="card">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/avar-kriss-main_e207523d.jpeg?region=0%2C0%2C1920%2C1080"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-name">name</p>
            <p className="card-gender">gender</p>
			<p className="card-haircolor">haircolor</p>
			<p className="card-eyecolor">eyecolor</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-4">
        <div className="card">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/avar-kriss-main_e207523d.jpeg?region=0%2C0%2C1920%2C1080"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-name">name</p>
            <p className="card-gender">gender</p>
			<p className="card-haircolor">haircolor</p>
			<p className="card-eyecolor">eyecolor</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 5 */}
	  <div className="col-md-4">
        <div className="card">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/avar-kriss-main_e207523d.jpeg?region=0%2C0%2C1920%2C1080"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-name">name</p>
            <p className="card-gender">gender</p>
			<p className="card-haircolor">haircolor</p>
			<p className="card-eyecolor">eyecolor</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 6 */}
     <div className="col-md-4">
        <div className="card">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/avar-kriss-main_e207523d.jpeg?region=0%2C0%2C1920%2C1080"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-name">name</p>
            <p className="card-gender">gender</p>
			<p className="card-haircolor">haircolor</p>
			<p className="card-eyecolor">eyecolor</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

    </div>


	<div className="container mt-5">
	<h2 className="mb-3">planets</h2>
    <div className="row flex-nowrap overflow-auto">
      {/* Card 1 */}
      <div className="col-md-4">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-population">population</p>
            <p className="terrain">terrain</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="card">
        <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-population">population</p>
            <p className="terrain">terrain</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="card">
        <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-population">population</p>
            <p className="terrain">terrain</p>
            <a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-4">
        <div className="card">
        <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-population">population</p>
            <p className="terrain">terrain</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
			learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 5 */}
	  <div className="col-md-4">
        <div className="card">
        <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-population">population</p>
            <p className="terrain">terrain</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
              learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Card 6 */}
     <div className="col-md-4">
        <div className="card">
        <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
            className="card-img-top"
            alt="Card 1"
          />
          <div className="card-body">
            <p className="card-population">population</p>
            <p className="terrain">terrain</p>
			<a href="#" className="btn btn-success" style={{ marginRight: "225px" }}>
              learn more
            </a>
            <button className="btn btn-outline-danger">
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
  
);
