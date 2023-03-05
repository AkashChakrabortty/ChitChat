import React, { useContext } from "react";
import loginAnimation from "./68312-login.gif";
import { Link, Navigate } from "react-router-dom";
import { inputData } from "../../fakeData/inputData/inputData";
import { UserInfo } from "../../UserContext/AuthProvider";
const Login = () => {
  const { LogIn , user} = useContext(UserInfo);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    LogIn(email, password)
  };
  if(user){
    return <Navigate to="/home" replace={true} />;
  }
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
            <div className="card-body p-12">
              <form onSubmit={handleSubmit}>
            {
                    inputData?.map((value,index)=>{
                        return    <div className="form-control" key={index}>
                        {
                            value.id !== 1 ?  <div className="flex p-2 items-center border rounded-md">
                            <div className="icon">
                               {value.icon}
                            </div>
                            <div className="in">
                            <input
                          type={value.name}
                          name={value.name}
                          placeholder={value.placeholder}
                          className="input focus:outline-none"
                        />
                            </div>
                        </div> : undefined
                        }
                      </div>  
                    })
                }
              <label className="label mt-1">
                <Link className="label-text-alt link link-hover font-semibold">
                Forgot password?
              </Link>
                </label>
              <div className="form-control mt-2">
              <button className="btn-default" type="submit">Login</button>
              </div>
              </form>
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
