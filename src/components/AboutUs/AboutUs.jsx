"use client";

import React from "react"; 
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="transform-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="transform-conetnt">
                <h2>We Are <span>Edmy!</span> The Best Online Learning Platform</h2>
                <p>
                  Instructors from around the world teach millions of students
                  on Edmy. We provide the tools and skills to teach what you
                  love. And you can also achieve your goal.
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="transform-img">
                <Image
                  src="/images/transform-img-2.png"
                  alt="transform"
                  width={645}
                  height={547}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
