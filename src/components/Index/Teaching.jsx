"use client";

import React from "react";
import Image from "next/image";

const Teaching = () => {
  return (
    <>
      <div className="teaching-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="teaching-content mr-15">
                <h2>Become An Instructor Today And Start Teaching</h2>
                <p>
                  Instructors from around the world teach millions of students
                  on Edmy. We provide the tools and skills to teach what you
                  love. And you can also achieve your goal with us.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="teaching-feature d-flex align-items-center">
                      <Image
                        src="/images/icon/teaching-icon-1.svg"
                        alt="teaching"
                        width={40}
                        height={40}
                      />
                      <h3>Expert Instruction</h3>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="teaching-feature d-flex align-items-center">
                      <Image
                        src="/images/icon/teaching-icon-3.svg"
                        alt="teaching"
                        width={40}
                        height={40}
                      />
                      <h3>Remote Learning</h3>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="teaching-feature d-flex align-items-center">
                      <Image
                        src="/images/icon/teaching-icon-2.svg"
                        alt="teaching"
                        width={40}
                        height={40}
                      />
                      <h3>Lifetime Access</h3>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="teaching-feature d-flex align-items-center">
                      <Image
                        src="/images/icon/teaching-icon-4.svg"
                        alt="teaching"
                        width={40}
                        height={40}
                      />
                      <h3>Self Development</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="teaching-img ml-15">
                <Image
                  src="/images/teaching-img-shape.png"
                  className="teaching-img-shape"
                  alt="teaching"
                  width={558}
                  height={126}
                />
                <Image
                  src="/images/teaching-img.png"
                  alt="teaching"
                  width={712}
                  height={492}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaching;
