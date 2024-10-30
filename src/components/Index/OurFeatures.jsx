"use client";

import React from "react";
import Image from "next/image";

const OurFeatures = () => {
  return (
    <>
      <div className="our-features-area bg-color-f1efee pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Features</span>
            <h2>Why You Should Choose Edmy</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-features">
                <Image
                  src="/images/features/feature-1.svg"
                  alt="feature"
                  width={120}
                  height={120}
                />
                <h3>Expert-Led Video Courses</h3>
                <p>
                  Instructors from around the world teach millions of students
                  on Edmy through video.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-features">
                <Image
                  src="/images/features/feature-2.svg"
                  alt="feature"
                  width={120}
                  height={120}
                />
                <h3>In-Demand Trendy Topics</h3>
                <p>
                  Instructors from around the world teach millions of students
                  on Edmy through video.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 ">
              <div className="single-features">
                <Image
                  src="/images/features/feature-3.svg"
                  alt="feature"
                  width={120}
                  height={120}
                />
                <h3>Segment Your Learning</h3>
                <p>
                  Instructors from around the world teach millions of students
                  on Edmy through video.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-features">
                <Image
                  src="/images/features/feature-4.svg"
                  alt="feature"
                  width={120}
                  height={120}
                />
                <h3>Always Interactive Learning</h3>

                <p>
                  Instructors from around the world teach millions of students
                  on Edmy through video.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/features/feature-shape-1.svg"
          className="shape shape-1"
          alt="feature"
          width={144}
          height={136}
        />
      </div>
    </>
  );
};

export default OurFeatures;
