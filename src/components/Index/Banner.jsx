"use client";

import React from "react";
import Link from "next/link"; 
import Image from "next/image";
import SearchForm from "./SearchForm";

const Banner = ({ 
  currentUser, homepage, lang,
  homepage: {
    searchCourses,
  },
}) => {
  return (
    <>
      <div className="banner-area bg-1">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-img">
                <Image
                  src="/images/banner/banner-img-1.png"
                  alt="image"
                  width={798}
                  height={555}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-content">
                <h1>{homepage.banner_heading}</h1>
                <p>{homepage.banner_para}</p>

                <SearchForm searchCourses={searchCourses} lang={lang} />
 
                <ul className="client-list">
                  <li>
                    <Image
                      src="/images/banner/client-1.jpg"
                      alt="banner"
                      width={46}
                      height={46}
                    />
                    <Image
                      src="/images/banner/client-2.jpg"
                      className="client"
                      alt="banner"
                      width={46}
                      height={46}
                    />
                    <Image
                      src="/images/banner/client-3.jpg"
                      className="client"
                      alt="banner"
                      width={46}
                      height={46}
                    />
                  </li>
                  <li>
                    <p>
                      500K+ People already trusted us.{" "}
                      {currentUser ? (
                        <Link href={`/${lang}/courses`} className="read-more">
                          View Courses <i className="ri-arrow-right-line"></i>
                        </Link>
                      ) : (
                        <Link href={`/${lang}/auth`} className="read-more">
                          Join For Free <i className="ri-arrow-right-line"></i>
                        </Link>
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shape Images */}
        <Image
          src="/images/banner/shape-1.svg"
          className="shape shape-1"
          alt="banner"
          width={106}
          height={111}
        />
        <Image
          src="/images/banner/shape-2.svg"
          className="shape shape-2"
          alt="banner"
          width={134}
          height={147}
        />
        <Image
          src="/images/banner/shape-3.svg"
          className="shape shape-3"
          alt="banner"
          width={166}
          height={666}
        />
      </div>
    </>
  );
};

export default Banner;
