"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const ProfileDropdown = ({ currentUser, lang }) => {
	const pathname = usePathname();
	const isAdmin = currentUser?.role === "ADMIN";

	return (
		<>
			<div className="dropdown profile-dropdown">
				<div className="img ptb-15">
					<Image
						src={
							currentUser.image
								? currentUser.image
								: "/images/avatar.jpg"
						}
						width={35}
						height={35}
						alt={currentUser.name}
					/>
				</div>

				<ul className="dropdown-menu">
					<li>
						<Link
							href={`/${lang}/profile/basic-information/`}
							className={`dropdown-item author-dropdown-item ${
								pathname === `/${lang}/profile/basic-information/` ? "active" : ""
							}`}
						>
							<div className="d-flex align-items-center">
								<div className="img">
									<Image
										src={
											currentUser.image
												? currentUser.image
												: "/images/avatar.jpg"
										}
										width={200}
										height={200}
										alt={currentUser.name}
									/>
								</div>

								<span className="ps-3">
									<span className="fw-semibold fs-16 mb-1 d-block">
										{currentUser.name}
									</span>
									<span className="d-block fs-13 mt-minus-2">
										{currentUser.email}
									</span>
								</span>
							</div>
						</Link>
					</li>

					<li>
						<hr className="dropdown-divider" />
					</li>

					<li>
						<Link
							href={`/${lang}/instructor/courses/`} 
							className={`dropdown-item ${
								pathname === `/${lang}/instructor/courses/` ? "active" : ""
							}`}
						>
							<i className="bx bx-book"></i>
							My Courses
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/instructor/course/create/`}
							className={`dropdown-item ${
								pathname === `/${lang}/instructor/course/create/` ? "active" : ""
							}`}
						>
							<i className="bx bx-folder-plus"></i> Create New
							Course
						</Link>
					</li>

					{isAdmin && (
						<li>
							<Link
								href={`/${lang}/admin/`}
								className={`dropdown-item ${
									pathname === `/${lang}/admin/` ? "active" : ""
								}`}
							>
								<i className="bx bxs-dashboard"></i> My
								Dashboard
							</Link>
						</li>
					)}

					<li>
						<Link
							href={`/${lang}/learning/my-courses/`}
							className={`dropdown-item ${
								pathname === `/${lang}/learning/my-courses/` ? "active" : ""
							}`}
						>
							<i className="bx bx-book"></i>
							My Learning
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/learning/my-purchase-history/`}
							className={`dropdown-item ${
								pathname === `/${lang}/learning/my-purchase-history/` ? "active" : ""
							}`}
						>
							<i className="bx bx-credit-card-front"></i>
							My Purchases
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/learning/wishlist/`}
							className={`dropdown-item ${
								pathname === `/${lang}/learning/wishlist/` ? "active" : ""
							}`}
						>
							<i className="bx bxs-heart"></i>
							Wishlist
						</Link>
					</li>

					<li>
						<Link
							href={`/${lang}/profile/basic-information/`}
							className={`dropdown-item ${
								pathname === `/${lang}/profile/basic-information/` ? "active" : ""
							}`}
						>
							<i className="bx bxs-user-account"></i> Account
							settings
						</Link>
					</li>

					<li>
						<hr className="dropdown-divider" />
					</li>

					<li>
						<button
							type="submit"
							onClick={() => signOut()}
							className="dropdown-item"
						>
							<i className="bx bx-log-out"></i> Log out
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ProfileDropdown;
