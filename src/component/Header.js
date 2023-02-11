import HouseImg from "../images/house1.png";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-5 d-flex align-items-center">
        <div className="col-md-6 text-left">
          <h1 className="">
            Impecting Your <span className="text-info"> Home</span>
          </h1>
          <h1 className="my-3">
            Proceting Your <span className="text-info"> Home</span>
          </h1>
          <h1 className="text-info">House Inspection Services</h1>
          <p className="my-5">
            House Inspection Services offers thorough and objective home
            inspection to help clients make informed decisions about their real
            estate purchase. We aim to protect clients’ investment by providing
            detailed evaluations and recommendation
          </p>
          <form className="d-flex">
          <button
            className="btn btn-outline-info mx-3 border-3 fw-bolder"
            type="submit"
          >
            Log in
          </button>
          <button className="btn btn-info text-light fw-bolder" type="submit">
            Get Started Free <BsFillPlayFill className="mx-2 fs-4" />
          </button>
        </form>
        </div>
       
        <div className="col-md-6 home-img">
        <img src={HouseImg} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Header;
