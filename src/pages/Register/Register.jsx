import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { inputData } from "../../fakeData/inputData/inputData";
import { useStoreUserInfoMutation } from "../../features/api/apiSlice";
import { UserInfo } from "../../UserContext/AuthProvider";
import registerAnimation from "./107385-reg.gif";

const Register = () => {
  const { createUser , setUser , user} = useContext(UserInfo);
  const [storeUser,{isLoading }] = useStoreUserInfoMutation()
 
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const user = {
      name,
      email,
      password,
    };
    createUser(email, password).then((userCredential) => {
      setUser(userCredential)
      storeUser(user)
    });
  };

  if(user && !isLoading){
    return <Navigate to="/home" replace={true} />;
  }
  return (
    <div className="flex items-center h-screen">
      {/* <div className="header font-semibold text-2xl text-center">
        Create Your Account!
      </div> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 hidden lg:block h-fit">
            <div className="card-body">
              <img
                src={registerAnimation}
                alt="Register animation"
              />
            </div>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 p-2">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                {inputData?.map((value, index) => {
                  return (
                    <div className="form-control" key={index}>
                      <div className="flex p-2 mt-2 items-center border rounded-md">
                        <div className="icon">{value.icon}</div>
                        <div className="in">
                          <input
                            type={value.name}
                            placeholder={value.placeholder}
                            className="input focus:outline-none"
                            name={value.name}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="form-control mt-3">
                  <button className='btn-default' btn type="submit" style={{border: 'none'}}>
                  {
                      isLoading ? <div className="flex justify-center items-center">
                      <div className="custom-spinner"></div>
                     </div> :  <span>Register</span>
                    }
                  </button>
                </div>
              </form>

              <div className="mt- text-center">
                <p>
                  Already have an account?
                  <Link to="/" className="font-semibold" style={{color: '#1877F2'}}>
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
