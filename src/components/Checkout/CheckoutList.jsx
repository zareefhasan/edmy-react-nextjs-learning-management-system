"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CheckoutList = ({
  id,
  image,
  title,
  user,
  slug,
  before_price,
  regular_price,
  lessons,
  duration,
  access_time,
  onRemove,
  lang,
}) => {
  return (
    <>
      <li className="single-cart-list d-flex justify-content-between align-items-center">
        <div className="single-cart-content d-flex align-items-center">
          <Link href={`/${lang}/course/${slug}`} className="d-block image">
            <Image width={599} height={750} src={image} alt={title} />
          </Link>

          <div className="single-cart-contents">
            <h3>
              <Link href={`/${lang}/course/${slug}`}>{title}</Link>
            </h3>

            <p>By {user}</p>

            <ul className="lectures">
              <li>
                {duration} <span>Total Length</span>
              </li>
              <li>
                {lessons} <span>Lectures</span>
              </li>
              <li>{access_time}</li>
            </ul>
          </div>
        </div>

        <div className="prw">
          <h4>
            {before_price > 0 && <del>${before_price}</del>} ${regular_price}
          </h4>

          <div className="wis-rem d-flex align-items-center">
            <button
              onClick={() => onRemove(id)}
              className="remove"
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CheckoutList;
