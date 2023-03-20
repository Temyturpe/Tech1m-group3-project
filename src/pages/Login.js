import React from "react";
import logo from "../assets/images/logos/blue.png";
import backgroundImg from "../assets/images/background_images/page3.jpg";
import "../assets/css/global.css";
import { Link, useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import arrow from "../assets/icons/login.svg";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const Login = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const history = useNavigate();
  const [showPassword, setShowPassword] = useState(true);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });
  function getStyles(errors, fieldName, touched) {
    if ((errors, fieldName, touched)) {
      return {
        border: "1px solid red",
      };
    }
  }

  const disable = function (isSubmitting, dirty) {
    if (isSubmitting || Formik.dirty) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className=" h-screen flex-col flex lg:flex-row w-screen">
      <div
        className=" w-screen h-[50%] lg:h-full lg:w-1/2 flex flex-col  lg:flex-row items-center justify-between  "
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col bg-primary-100 bg-opacity-50 h-full justify-center md:px-10  lg:w-1/2">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, errors) => {
            console.log(values);
            console.log(errors);
            try {
              setError("");
              await login(values.email, values.password);
              history("/in/home");
            } catch {
              setError("Invalid password or username");
              setTimeout(() => {
                setError("");
              }, 3000);
            }
            console.log(values);
          }}
        >
          {({ errors, touched, isSubmitting, isValid }) => (
            <Form className="flex flex-col justify-center items-center w-[100%] bg-white-30 rounded-lg px-5 py-2 lg:py-10 gap-y-[1rem] h-fit-content w-[70%] m-auto">
              <div className=" w-[7rem] ">
                <img src={logo} alt="backgroundimage" />
              </div>
              <p className="text-red h6">{error}</p>

              <div className="w-full m-auto flex flex-col justify-center md:items-center">
                <SignInForm
                  title="Email Address"
                  inputType="email"
                  placeholder="Adams@gmail.com"
                  smalltext="Enter your valid email"
                  name="email"
                  isValid={Formik.errors}
                  style={getStyles(touched.email, "email", errors.email)}
                />
                <AiOutlineMail
                  className="relative top-[-1.5em] left-[90%] md:left-[40%]"
                  color="blue"
                />
                {errors.email && touched.email ? (
                  <p className="text-xs text-error w-[90%] grid justify-left ">
                    Please enter the correct email format
                  </p>
                ) : (
                  <p className="text-xs text-neutral-50 w-[90%] grid justify-left ">
                    Enter your valid email
                  </p>
                )}
              </div>
              <div className="w-full m-auto flex flex-col md:items-center">
                <SignInForm
                  title="Password"
                  inputType={showPassword ? "text" : "password"}
                  placeholder="......"
                  name="password"
                  style={getStyles(
                    touched.password,
                    "password",
                    errors.password
                  )}
                  smalltext="Enter strong password"
                />
                {showPassword ? (
                  <AiOutlineEye
                    className="relative top-[-1.5em] left-[90%] md:left-[40%]"
                    color="blue"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    color="blue"
                    className="relative top-[-1.5em] left-[90%] md:left-[40%]"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
                {errors.password && touched.password ? (
                  <p className="text-xs text-error w-[90%] grid justify-left ">
                    {errors.password}
                  </p>
                ) : (
                  <p className="text-xs text-neutral-50 w-[90%] grid justify-left ">
                    Enter strong password
                  </p>
                )}
              </div>
              <div className="w-[100%] md:w-[90%]  ">
                <div className="flex mb-1 justify-between">
                  <label htmlFor="" className="text-primary-500 text-xs">
                    Role
                  </label>
                  <p className="text-primary-200 text-xs">Details</p>
                </div>
                <select
                  name=""
                  id=""
                  className=" items-center bg-white-20 p-1.5 text-primary-200 text-sm px-4 w-full"
                >
                  <option value="">Instructor</option>
                  <option value="">Super Admin</option>
                  <option value="">Admin</option>
                </select>
                <p className="text-xs text-neutral-50">Select your role</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className=" py-1 disabled:bg-primary-100 rounded-lg hover:bg-primary-500 bg-primary-200 text-white-10 w-[100%] md:w-[90%]"
              >
                <div className="flex justify-center space-x-2">
                  <img src={arrow} alt="" />
                  <div>Log in</div>
                </div>
              </button>
              <p className="text-xs text-center md:col-span-2">
                Don't have an account!{" "}
                <Link
                  to="/signup"
                  className="text-primary-200 hover:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              <Link
                to="/forgotPassword"
                className=" text-xs text-center text-neutral-70 hover:text-neutral-200"
              >
                Forgot Password?
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
