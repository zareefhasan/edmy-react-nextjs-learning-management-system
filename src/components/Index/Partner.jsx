"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Image from "next/image";

const Partner = ({ partners }) => {
	if (partners.length == 0) return;
	return (
		<>
			<div className="partner-area bg-color-f2f0ef ptb-100">
				<div className="container">
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						breakpoints={{
							768: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 6,
							},
						}}
						className="tpartner-slide"
					>
						{partners.map((partner) => (
							<SwiperSlide key={partner.id}>
								<motion.div
									className="partner-item"
									initial="hidden"
									whileInView="visible"
									transition={{
										type: "spring",
										duration: 3,
										bounce: 0.3,
									}}
									variants={{
										visible: { opacity: 1, scale: 1 },
										hidden: { opacity: 0, scale: 0 },
									}}
								>
									<Image
										width={145}
										height={125}
										src={partner.image}
										alt={partner.name}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Partner;
