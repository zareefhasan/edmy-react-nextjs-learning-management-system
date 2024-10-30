"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-area bg-color-f6fafb pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <Link href={`/${lang}/`} className="logo">
                  <Image
                    src="/images/logo.png"
										className="main-logo"
                    width={134}
                    height={137}
                    alt="logo"
                  />
                  <Image
                    src="/images/white-logo.png"
										className="white-logo"
                    width={134}
                    height={137}
                    alt="logo"
                  />
                </Link>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis mi suscipit bibendum sit amet, consectetur.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget pl-40">
                <h3>Quick Link</h3>

                <ul className="import-link">
                  <li>
                    <Link href={`/${lang}/courses`}>Courses</Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/about`}>About Us</Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/terms-conditions`}>
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Help Center</h3>

                <ul className="import-link">
                  <li>
                    <Link href={`/${lang}/contact`}>Support</Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/faq`}>Get Help</Link>
                  </li>

                  <li>
                    <Link href={`/${lang}/privacy-policy`}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>

                <ul className="info">
                  <li>
                    <span>Call Us:</span>{" "}
                    <a href="tel:1-885-665-2022">1-885-665-2022</a>
                  </li>
                  <li>
                    <span>Address:</span> +7011 Vermont Ave, Los Angeles, CA
                    90044
                  </li>
                  <li>
                    <span>Mail Us:</span>{" "}
                    <a href="mailto:hello@edmy.com">hello@edmy.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/footer-shape-1.png"
          className="shape shape-1"
          alt="footer"
					width={130}
					height={96}
        />
        <Image
          src="/images/footer-shape-2.png"
          className="shape shape-2"
          alt="footer"
					width={192}
					height={144}
        />
      </div>

      <div className="copy-right-area bg-color-f6fafb">
        <div className="container">
          <p>
            &copy; Edmy {currentYear} is Proudly Owned by{" "}
            <a href="https://hibootstrap.com/" target="_blank">
              HiBootstrap
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
