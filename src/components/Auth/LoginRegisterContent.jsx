"use client";

import React, { useState } from "react";
import Image from "next/image";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import { motion } from "framer-motion";

const LoginRegisterContent = ({ lang }) => {
  const [register, setRegister] = useState("register");
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
      <div className="register-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="register-img">
                <Image
                  src="/images/register-img.png"
                  alt="Image"
                  width={645}
                  height={517}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="register-form">
                {register == "register" ? (
                  <motion.h2
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, x: 0 }}
                    exit={{ scale: 0 }}
                  >
                    Create your account
                  </motion.h2>
                ) : (
                  <motion.h2
                    initial={{ scale: 0 }}
                    animate={{ scale: 0.9, x: 0 }}
                    exit={{ scale: 1 }}
                  >
                    Sign in to Edmy
                  </motion.h2>
                )}

                <ul
                  className="register-tab nav nav-tabs justify-content-between"
                  data-ison={isOn}
                  onClick={toggleSwitch}
                >
                  <li className="nav-item" role="presentation">
                    <motion.button
                      className={`nav-link ${
                        register == "register" ? "active" : ""
                      }`}
                      onClick={() => setRegister("register")}
                      whileHover={{
                        scale: 1.3,
                        transition: { duration: 1 },
                      }}
                      whileTap={{ scale: 0.8 }}
                      layout
                      transition={{
                        type: "spring",
                      }}
                    >
                      Register
                    </motion.button>
                  </li>
                  
                  <li className="nav-item" role="presentation">
                    <motion.button
                      className={`nav-link ${
                        register == "login" ? "active" : ""
                      }`}
                      type="button"
                      onClick={() => setRegister("login")}
                      whileHover={{
                        scale: 1.3,
                        transition: { duration: 1 },
                      }}
                      whileTap={{ scale: 0.8 }}
                      transition={{
                        type: "spring",
                      }}
                    >
                      Login
                    </motion.button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  {register == "register" ? (
                    <RegisterForm lang={lang} />
                  ) : (
                    <LoginForm lang={lang} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterContent;
