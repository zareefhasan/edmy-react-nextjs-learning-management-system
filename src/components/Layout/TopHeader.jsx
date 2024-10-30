import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const TopHeader = ({ currentUser, lang }) => {
  return (
    <>
      <div className="top-header-area bg-color-0f6c76">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="header-left-content">
                <p>
                  Keep learning with free resources during COVID-19.{" "}
                  <Link href={`/${lang}/about`} className="read-more">
                    Learn more <i className="ri-arrow-right-line"></i>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <ul className="header-right-content">
                <li>
                  <Link href={`/${lang}/faq`}>
                    Faq's
                  </Link>
                </li>
                <li className="auth-link">
                  {currentUser ? (
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        signOut()
                      }}
                    >
                      <i className="bx bx-log-out"></i> Sign out
                    </Link>
                  ) : (
                    <Link href={`/${lang}/auth`}>
                      <i className="ri-arrow-right-line"></i> Signin
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
