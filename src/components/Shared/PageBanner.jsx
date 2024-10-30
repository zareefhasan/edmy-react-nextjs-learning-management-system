"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const PageBanner = ({
	pageTitle,
	homePageUrl,
	homePageText,
	activePageText,
	lang,
}) => {
	const variants = {
		hidden: {
			scale: 0.8,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.2,
			},
		},
	};
	const pVariants = {
		hidden: {
			scale: 0.8,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.4,
			},
		},
	};

	return (
		<>
			<div className="pages-banner-area ptb-100">
				<div className="container">
					<div className="pages-banner-content">
						<motion.h2
							initial="hidden"
							animate="visible"
							variants={variants}
						>
							{pageTitle}
						</motion.h2>
						<motion.ul
							initial="hidden"
							animate="visible"
							variants={pVariants}
						>
							<li>
								<Link href={`/${lang}/${homePageUrl}`}>
									{homePageText}
								</Link>
							</li>
							<li className="active">{activePageText}</li>
						</motion.ul>
					</div>
				</div>

				<Image
					src="/images/page-banner-shape-1.svg"
					className="shape shape-1"
					alt="courses"
					width={286}
					height={286}
				/>
				<Image
					src="/images/page-banner-shape-2.svg"
					className="shape shape-2"
					alt="courses"
					width={174}
					height={105}
				/>
				<Image
					src="/images/page-banner-shape-3.svg"
					className="shape shape-3"
					alt="courses"
					width={135}
					height={173}
				/>
			</div>
		</>
	);
};

export default PageBanner;
