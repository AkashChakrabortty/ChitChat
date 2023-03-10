import React, { useContext } from "react";
import loginAnimation from "./68312-login.gif";
import { Link, Navigate } from "react-router-dom";
import { inputData } from "../../fakeData/inputData/inputData";
import { UserInfo } from "../../UserContext/AuthProvider";
import { useDispatch } from "react-redux";
const Login = () => {
  const { LogIn, user, isLoginLoading, setIsLoginLoading } =
    useContext(UserInfo);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoginLoading(true);
    const email = event.target.email.value;
    const password = event.target.password.value;
    LogIn(email, password);
  };
  if (user) {
    dispatch({ email: user.email, type: "click" });
    return <Navigate to="/home" replace={true} />;
  }
  return (
    <div className="">
      {/* <div className="header font-semibold text-2xl text-center sm:-mb-16  sm:pt-20 pt-32">
      Login now!
      </div> */}
      <div className="hero bg-base-200 overflow-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 hidden lg:block h-fit sm:mt-16">
            <div className="card-body">
              <img src={loginAnimation} alt="Login animation" className="" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 sm:mt-16">
            <div className="card-body p-12">
              <form onSubmit={handleSubmit}>
                {inputData?.map((value, index) => {
                  return (
                    <div className="form-control" key={index}>
                      {value.id !== 1 ? (
                        <div className="flex p-4 mt-4 items-center border rounded-md">
                          <div className="icon">{value.icon}</div>
                          <div className="in">
                            <input
                              type={value.name}
                              name={value.name}
                              placeholder={value.placeholder}
                              className="input focus:outline-none"
                            />
                          </div>
                        </div>
                      ) : undefined}
                    </div>
                  );
                })}
                {/* <label className="label mt-1">
                <Link className="label-text-alt link link-hover font-semibold">
                Forgot password?
              </Link>
                </label> */}
                <div className="form-control mt-4">
                  <button
                    className={`btn-default`}
                    type="submit"
                    style={{ border: "none" }}
                  >
                    {
                      isLoginLoading ? <div className="flex justify-center items-center">
                      <div className="custom-spinner"></div>
                     </div> :  <span>Login</span>
                    }
                   
                  
                  </button>
                </div>
               
              </form>
              <div className="mt-2 text-center">
                <p>
                  Don't have an account?
                  <Link
                    to="/register"
                    className=" font-semibold"
                    style={{ color: "#1877F2" }}
                  >
                    Register
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

export default Login;
