import React from "react";
import { Link } from "react-router-dom";
import { inputData, register } from "../../fakeData/inputData/inputData";
import registerAnimation from "./107385-reg.gif";


const Register = () => {
   
  return (
    <div>
      <div className="header font-semibold text-2xl text-center -mb-28 mt-20">
        Create Your Account!
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hidden lg:block h-fit">
            <div className="card-body">
              <img
                src={registerAnimation}
                alt="Register animation"
                className=""
              />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-2">
            <div className="card-body">
                {
                    inputData?.map((value,index)=>{
                        return    <div className="form-control" key={index}>
                        <div className="flex p-2 items-center border rounded-md">
                            <div className="icon">
                               {value.icon}
                            </div>
                            <div className="in">
                            <input
                          type={value.name}
                          placeholder={value.placeholder}
                          className="input focus:outline-none"
                        />
                            </div>
                        </div>
                      </div>  
                    })
                }
              
              <div className="form-control mt-2">
                <button className="btn-default">
                  Register
                </button>
              </div>
              <div className="mt-2 text-center">
                <p>
                  Already have an account?
                  <Link to="/" className="text-blue-700 font-semibold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
