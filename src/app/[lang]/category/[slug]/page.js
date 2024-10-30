import { getCategoryCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";
import CategoryCourses from "@/components/Index/CategoryCourses";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
  title: "Category | Edmy - React Nextjs Learning Management System",
};

const page = async ({ params: { lang, slug } }) => {
  const currentUser = await getCurrentUser();
  const {
    category_courses: { courses },
  } = await getCategoryCourses(slug);
  // console.log(courses);
  return (
    <>
      <PageBanner
        pageTitle="Category"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Category"
        lang={lang}
      />

      <CategoryCourses
        currentUser={currentUser}
        courses={courses}
        lang={lang} 
      />
    </>
  );
};

export default page;
