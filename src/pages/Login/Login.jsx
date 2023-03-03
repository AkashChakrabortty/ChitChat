import React from "react";
import loginAnimation from "./68312-login.gif";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
         <div className="header font-semibold text-2xl text-center -mb-28 mt-20">
         Login now!
        </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hidden lg:block h-fit">
            <div className="card-body">
              <img src={loginAnimation} alt="Login animation" className="" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
                </label>
              </div>
              <div className="form-control mt-2">
              <button className="btn btn-outline btn-primary">Login</button>
               
              </div>
              <div className="mt-2 text-center">
                <p>
                  Don't have an account?
                  <Link to="/register" className="text-blue-700 font-semibold">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
