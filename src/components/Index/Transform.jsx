"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Transform = ({ currentUser, lang }) => {
  return (
    <>
      <div className="transform-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="transform-conetnt">
                <h2>Transform Your Life Through Online Education</h2>
                <p>
                  Instructors from around the world teach millions of students
                  on Edmy. We provide the tools and skills to teach what you
                  love. And you can also achieve your goal.
                </p>

                <div className="single-transform d-flex align-items-center">
                  <div className="transform-video-img flex-shrink-0">
                    <Image
                      src="/images/courses/course-16.jpg"
                      alt="about"
                      width={133}
                      height={103}
                    />

                    <div className="video-btns">
                      <i className="ri-play-circle-fill"></i>
                    </div>
                  </div>

                  <div className="transform-video-content flex-grow-1">
                    <h3>
                      <Link href="#">
                        Watch Video From the Community How Edmy Change Their
                        Life
                      </Link>
                    </h3>
                    <ul>
                      <li>My Courses</li>
                    </ul>
                  </div>
                </div>

                {currentUser ? (
                  <Link href={`/${lang}/courses`} className="default-btn">
                    Find Out How
                  </Link>
                ) : (
                  <Link href={`/${lang}/auth`} className="default-btn">
                    Join For Free
                  </Link>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="transform-img">
                <Image
                  src="/images/transform-img.png"
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

export default Transform;
