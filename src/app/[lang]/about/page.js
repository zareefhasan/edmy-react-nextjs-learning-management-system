import AboutUs from "@/components/AboutUs/AboutUs";
import PageBanner from "@/components/Shared/PageBanner";
import { getTestimonials } from "@/actions/admin/getTestimonials";
import { getDictionary } from "../dictionaries";
import OurFeatures from "@/components/Index/OurFeatures";
import FeedbackSlider from "@/components/Index/FeedbackSlider";
import Business from "@/components/Index/Business";

export const metadata = {
	title: "About | Edmy - React Nextjs Learning Management System",
};

const page = async ({ params: { lang } }) => {
	const dict = await getDictionary(lang);
	const { testimonials } = await getTestimonials();

	return (
		<>
			<PageBanner
				pageTitle="About Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About Us"
				lang={lang}
			/>
			
			<AboutUs />

			<OurFeatures />

			<FeedbackSlider testimonials={testimonials} {...dict} />

			<Business />
		</>
	);
};

export default page;
