"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "../FormHelpers/Input";
import TextArea from "../FormHelpers/TextArea";
import Image from "next/image";
import Link from 'next/link';

const ContactForm = ({ lang }) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const url = `/api/contact`;
      const response = await axios.post(url, data);
      toast.success(response.data.message, {
        style: {
          border: "1px solid #4BB543",
          padding: "16px",
          color: "#4BB543",
        },
        iconTheme: {
          primary: "#4BB543",
          secondary: "#FFFAEE",
        },
      });
      reset();
    } catch (err) {
      let {
        response: {
          data: { message },
        },
      } = err;
      toast.error(message, {
        style: {
          border: "1px solid #ff0033",
          padding: "16px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <>
      <div className="contact-area pb-100">
        <div className="container">
					<div className="section-title">
						<span className="top-title">Contact Us</span>
						<h2>Send Us Message Anytime</h2>
					</div>

          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Input
                    label="Full Name"
                    id="name"
                    labelShow={false}
                    disabled={isSubmitting}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6">
                  <Input
                    label="Email"
                    id="email"
                    labelShow={false}
                    disabled={isSubmitting}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6">
                  <Input
                    label="Phone"
                    id="phone"
                    labelShow={false}
                    disabled={isSubmitting}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12">
                  <Input
                    label="Subject"
                    id="subject"
                    labelShow={false}
                    disabled={isSubmitting}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

                <div className="col-lg-12 col-md-12">
                  <TextArea
                    id="subject"
                    disabled={isSubmitting}
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

								<div className="col-12">
									<div className="form-check">
										<div className="form-group">
											<div className="form-check">
												<input
													name="check"
													value="I agree to the terms and privacy policy."
													className="form-check-input"
													type="checkbox"
												/>

												<label className="form-check-label">
													I agree to the{" "}
													<Link href={`/${lang}/terms-conditions`}>Terms &amp; conditions</Link>
												</label>
											</div>
										</div>
									</div>
								</div>

                <div className="col-lg-12 col-sm-12 text-center">
                  <button
                    type="submit"
                    className="default-btn"
                    disabled={!isValid}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

				<Image
					src="/images/contact-shape-1.svg"
					className="shape shape-1"
					alt="contact"
					width={104}
					height={119}
				/>
				<Image
					src="/images/contact-shape-2.svg"
					className="shape shape-2"
					alt="contact"
					width={144}
					height={136}
				/>
      </div>
    </>
  );
};

export default ContactForm;
