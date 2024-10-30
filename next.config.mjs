/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
		],
	},
	env: {
		NEXTAUTH_SECRET: "b51afa1ed38dde0d5d8f21gftybjsygg458086548a7fe48e1a",
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dev", // Update here the NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
		NEXT_CLOUDINARY_PRESET: "vikings", // Update here the NEXT_CLOUDINARY_PRESET
		STRIPE_PUBLISHABLE_KEY: "pk_test_ZaZZWZGlvdIn12y4e18Kf7", // Update here the STRIPE_PUBLISHABLE_KEY
		STRIPE_SECRET_KEY: "sk_test_2pEMVQ3qSAw00zgrbnfPk", // Update here the STRIPE_SECRET_KEY
	},
};

export default nextConfig;
