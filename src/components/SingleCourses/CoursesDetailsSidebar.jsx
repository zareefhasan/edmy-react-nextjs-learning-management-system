"use client";

import React, { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import StickyBox from "react-sticky-box";
import axios from "axios";
import toast from "react-hot-toast";
import { couponCode } from "@/store/coupon";
import { calculateDiscount } from "@/utils/calculateDiscount";
import Image from "next/image";

const CoursesDetailsSidebar = ({
  id,
  title,
  slug,
  image,
  before_price,
  regular_price,
  duration,
  lessons,
  access_time,
  user,
}) => {
  const { currentUser, course, lang, setCouponCode, discount } = couponCode(
    (state) => state
  );

  const [apply, setApplyCoupon] = useState(false);
  const [coupon, setCoupon] = useState({ coupon: "" });

  const handleCoupon = async (e) => {
    e.preventDefault();
    try {
      const data = { coupon };

      const response = await axios.post(`/api/coupons`, data);
      if (response.data.discount)
        setCouponCode(response.data.discount.discount);

      toast.success(response.data.message);
    } catch (err) {
      let {
        response: {
          data: { message },
        },
      } = err;
      toast.error(message);
    }
  };

  return (
    <>
      <StickyBox className="sticky-box" offsetTop={100} offsetBottom={20}>
        <div className="course-details-sidebar">
          <div className="course-preview">
            <Image src={image} alt="course" width={1008} height={636} />
          </div>

          <div className="sidebar-feature">
            <div className="sidebar-title d-flex justify-content-between">
              <h2>
              {discount
                    ? calculateDiscount(discount, regular_price)
                    : regular_price} <del>${before_price}</del>
              </h2>
              <p>Offer for today</p>
            </div>

            <ul>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <i className="ri-user-2-line"></i> Instructor
                  </span>
                  {user.name}
                </div>
              </li>

              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <i className="ri-time-line"></i> Duration
                  </span>
                  {duration}
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <i className="ri-booklet-line"></i> Lessons
                  </span>
                  {lessons}
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <i className="ri-group-line"></i> Enrolled
                  </span>
                  255 students
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <i className="ri-key-2-fill"></i> Access
                  </span>
                  {access_time}
                </div>
              </li>
            </ul>

            <div className="coupon">
              <h4 onClick={() => setApplyCoupon(!apply)}>Apply Coupon</h4>
              {apply && (
                <form onSubmit={handleCoupon}>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Enter Coupon"
                    name="search"
                    value={coupon.coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button type="submit">
                    <b>Apply</b>
                  </button>
                </form>
              )}
            </div>

            <div style={{ marginTop: "30px" }}>
              <AddToCartButton
                id={id}
                title={title}
                slug={slug}
                before_price={before_price}
                regular_price={regular_price}
                duration={duration}
                lessons={lessons}
                access_time={access_time}
                image={image}
                user={user.name}
              />
            </div>

            <p className="text-center" style={{ marginTop: "20px" }}>
              30-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </StickyBox>
    </>
  );
};

export default CoursesDetailsSidebar;
