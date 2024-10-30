"use client";

import React from "react";
import Image from "next/image";

const Business = () => {
  return (
    <>
      <div className="business-area pb-100">
        <div className="container">
          <div className="business-bg rounded bg-color-f2f0ef ptb-100">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="business-img">
                  <Image
                    src="/images/business-img.png"
                    alt="business"
                    width={704}
                    height={470}
                  />
                </div>
              </div>

              <div className="col-lg-5">
                <div className="business-content">
                  <h2>
                    Be A Member Of Edmy Business & Start Earning Limitless Today
                  </h2>
                  <p>
                    Instructors from around the world teach millions of students
                    on Edmy. We provide the tools and skills to teach what you
                    love. And you can also achieve your goal with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
