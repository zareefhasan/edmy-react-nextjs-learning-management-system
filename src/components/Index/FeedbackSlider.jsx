"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = ({ testimonials = [] }) => {
  return (
    <>
      <div className="testimonial-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-img">
                <Image
                  src="/images/testimonials/testimonial-1.png"
                  alt="testimonial"
                  width={630}
                  height={694}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="testimonials-slide"
              >
                {testimonials.length > 0 &&
                  testimonials.map((teste) => (
                    <SwiperSlide key={teste.id}>
                      <div className="single-testimonial m-30">
                        <div className="testimonial-conetent">
                          <p>{teste.description}</p>
                        </div>

                        <div className="testimonial-info d-flex align-items-center">
                          <Image
                            src={teste.image}
                            width={55}
                            height={55}
                            className="rounded-pill me-3"
                            alt="image"
                          />
                          <h4 className="mb-0">
                            {teste.name}, <span>{teste.designation}</span>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
