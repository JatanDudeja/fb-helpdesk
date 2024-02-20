import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [registerValues, setRegisterValues] = useState({
        email: "",
        password: "",
        rememberMe: false,
      });
    
      const handleRegisterValueChange = (e) => {
        const { name, value } = e.target;
        setRegisterValues((singleValue) => ({ ...singleValue, [name]: value }));
      };
    
      const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setRegisterValues((singleValue) => ({ ...singleValue, [name]: checked }));
      };
    
      const handleRegisterSubmit = (e) => {
        e.preventDefault();
    
        if (!registerValues.email.trim()) {
          alert("Please enter your email.");
          return;
        }
    
        if (!/^\S+@\S+\.\S+$/.test(registerValues.email)) {
          alert("Please enter a valid email address.");
          return;
        }
    
        if (!registerValues.password.trim()) {
          alert("Please enter a password.");
          return;
        }
    
        console.log("Working");
      };
    
      return (
        <div className="flex justify-center items-center h-screen">
          <form className="p-12 bg-[#fff] flex flex-col items-center w-[430px] rounded-[20px] justify-between">
            <h2 className=" text-[20px] font-semibold mb-6">Login to your account</h2>
            <div className="w-full flex flex-col mb-[15px]">
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input
                className="w-full border border-[#dadada] h-[30px] p-[20px] rounded-[5px]"
                type="email"
                name="email"
                value={registerValues.email}
                onChange={handleRegisterValueChange}
              />
            </div>
            <div className="w-full flex flex-col mb-[15px]">
              <label htmlFor="Password" className="font-semibold text-sm">
                Password
              </label>
              <input
                className="w-full border border-[#dadada] h-[30px] p-[20px] rounded-[5px]"
                name="password"
                type="password"
                value={registerValues.password}
                onChange={handleRegisterValueChange}
              />
            </div>
            <div className="flex justify-start w-full mb-7">
              <input
                type="checkbox"
                className="border mr-3 w-4"
                name="rememberMe"
                checked={registerValues.rememberMe}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox" className="font-semibold text-sm">
                Remember Me
              </label>
            </div>
            <button
              onClick={handleRegisterSubmit}
              className="bg-[#1e4d91] w-full rounded-[5px] h-[50px] text-white"
            >
              SignUp
            </button>
            <div className="mt-7 flex items-center">
              <span>
                New to MyApp
                <Link className="ml-2 text-[#1e4d91] " to="/register">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      );
    };
    
 
export default Login;