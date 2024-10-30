"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Categories = ({ categories, currentUser, lang }) => {
  return (
    <>
      <div className="categories-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Top Categories</span>
            <h2>Browse Top Categories</h2>
          </div>

          <div className="row justify-content-center">
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                className="col-lg-3 col-sm-6"
                whileHover={{
                  scale: 1.02,
                  originX: 0,
                  transition: { duration: 0.5 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className="single-categorie d-flex justify-content-between align-items-center align-items-center"
                >
                  <h3>{cat.name}</h3>
                  <i className="flaticon-developer"></i>
                </Link>
              </motion.div>
            ))}

            <div className="col-lg-12 ">
              <p className="text-center">
                Browse All{" "}
                {currentUser ? (
                  <Link href={`/${lang}/courses`} className="read-more">
                    Courses <i className="ri-arrow-right-line"></i>
                  </Link>
                ) : (
                  <Link href={`/${lang}/auth`} className="read-more">
                    Join For Free <i className="ri-arrow-right-line"></i>
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
