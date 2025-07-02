import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { LettersPullUp } from "../../components/LettersPullUp/LettersPullUp";
import { TypingEffect } from "../../components/TypingEffect/typingEffect";
import { useFormik } from "formik";
import { loginValidation } from "../../validation/loginValidation";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-5"
      >
        <img
          className="w-7 h-6.5 object-contain"
          src="./logo1.png"
          alt="logo"
        />
        <p className="text-[#503DE6] font-medium">TYLET</p>
      </motion.div>
      <div>
        <LettersPullUp
          text="Log In"
          className="text-2xl md:text-3xl font-bold"
        />
        <TypingEffect
          text="Enter your email and password to login our dashboard."
          className="text-sm text-gray-400 mb-3"
        />
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-1 mb-2"
          >
            <motion.label
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-medium"
              htmlFor="email"
            >
              Email
            </motion.label>
            <motion.input
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.8 }}
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="border border-gray-300 transition duration-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
              placeholder="Enter your Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
            <motion.label
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-medium"
              htmlFor="password"
            >
              Password
            </motion.label>
            <motion.input
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.8 }}
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="border border-gray-300 transition duration-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
              placeholder="Enter your Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-4"
            >
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="w-4 h-4 accent-purple-600 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              type="submit"
              className="bg-[#6150FE] w-full py-2 mb-2 text-white font-medium rounded-sm cursor-pointer button relative overflow-hidden z-1"
            >
              Sign In
            </motion.button>
          </form>

          <div className="text-sm">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 font-medium mb-2 "
            >
              Don't have an Account?{" "}
              <NavLink className="text-[#6150FE] transition duration-300 hover:text-purple-900">
                Sign Up
              </NavLink>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <NavLink className="text-[#6150FE] font-medium transition duration-300 hover:text-purple-900">
                Forgot Password?
              </NavLink>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
