import { getPartners } from "@/actions/admin/getPartners";
import { getTestimonials } from "@/actions/admin/getTestimonials";
import {
  getFeaturedCourses,
  getPopularCourses,
  getMostViewedCourses,
} from "@/actions/getCourses";
import { getCategories } from "@/actions/admin/getCategories";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Banner from "@/components/Index/Banner";
import FeedbackSlider from "@/components/Index/FeedbackSlider";
import Partner from "@/components/Index/Partner";
import PopularCourses from "@/components/Index/PopularCourses";
import FeaturedCourses from "@/components/Index/FeaturedCourses";
import MostViewedCourses from "@/components/Index/MostViewedCourses";
import { getDictionary } from "./dictionaries";
import Categories from "@/components/Index/Categories";
import Transform from "@/components/Index/Transform";
import OurFeatures from "@/components/Index/OurFeatures";
import Teaching from "@/components/Index/Teaching";
import Business from "@/components/Index/Business";

export const metadata = {
  title: "Home | Edmy - React Nextjs Learning Management System",
};

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const { featured_courses } = await getFeaturedCourses();
  const { popular_courses } = await getPopularCourses();
  const { viewed_courses } = await getMostViewedCourses();
  const { categories } = await getCategories();
  const currentUser = await getCurrentUser();
  const { partners } = await getPartners();
  const { testimonials } = await getTestimonials();
  // console.log(courses);
  return (
    <>
      <Banner currentUser={currentUser} {...dict} lang={lang} />

      <PopularCourses
        currentUser={currentUser}
        courses={popular_courses}
        lang={lang}
        {...dict}
      />

      <FeaturedCourses
        currentUser={currentUser}
        courses={featured_courses}
        lang={lang}
        {...dict}
      />

      <MostViewedCourses
        currentUser={currentUser}
        courses={viewed_courses}
        lang={lang}
        {...dict}
      />

      <Categories
        categories={categories}
        lang={lang}
        {...dict}
        currentUser={currentUser}
      />

      <Transform currentUser={currentUser} {...dict} lang={lang} />

      <OurFeatures />

      <FeedbackSlider testimonials={testimonials} {...dict} />

      <Partner partners={partners} />

      <Teaching />

      <Business />
    </>
  );
}
