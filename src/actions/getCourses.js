import prisma from "@/libs/prismadb";

export async function getCourses(params) {
  const { q, sort, page = 1, pageSize = 15 } = params;

  const getOrderByClause = () => {
    switch (sort) {
      case "desc":
        return { created_at: "desc" };
      case "asc":
        return { created_at: "asc" };
      case "price_low":
        return { regular_price: "asc" };
      case "price_high":
        return { regular_price: "desc" };
      default:
        return { created_at: "desc" }; // Default sorting option
    }
  };

  const parsedPage = parseInt(page, 10);
  const parsedPageSize = parseInt(pageSize, 10);
  const skip = (parsedPage - 1) * parsedPageSize;

  try {
    let where = {};
    if (q) {
      where.OR = [
        {
          title: {
            contains: q,
          },
        },
        {
          overview: {
            contains: q,
          },
        },
      ];
    }
    where.approved = true;

    const totalCourses = await prisma.course.count({
      where,
    });
    const totalPages = Math.ceil(totalCourses / parsedPageSize);

    const courses = await prisma.course.findMany({
      where,
      skip: skip,
      take: parsedPageSize,
      orderBy: getOrderByClause(),
      include: {
        user: true,
      },
    });

    // console.log(courses);

    return { courses, totalPages, totalCourses };
  } catch (error) {
    console.error("Error fetching counts:", error);
  }
}

export async function getCategoryCourses(slug) {
  try {
    const category_courses = await prisma.category.findUnique({
      where: { slug: slug },
      include: {
        courses: {
          include: {
            user: true,
          },
        },
      },
    });

    return { category_courses };
  } catch (error) {
    console.error("Error fetching counts:", error);
  }
}

export async function getPopularCourses() {
  try {
    const popular_courses = await prisma.course.findMany({
      where: { approved: true },
      take: 4,
      orderBy: {
        id: "asc",
      },
      include: {
        user: true,
      },
    });

    // console.log(courses);

    return { popular_courses };
  } catch (error) {
    console.error("Error fetching counts:", error);
  }
}

export async function getFeaturedCourses() {
  try {
    const featured_courses = await prisma.course.findMany({
      where: { approved: true, in_home_page: true },
      take: 4,
      orderBy: {
        id: "asc",
      },
      include: {
        user: true,
      },
    });

    // console.log(courses);

    return { featured_courses };
  } catch (error) {
    console.error("Error fetching counts:", error);
  }
}

export async function getMostViewedCourses() {
  try {
    const viewed_courses = await prisma.course.findMany({
      where: { approved: true },
      take: 4,
      orderBy: {
        regular_price: "desc",
      },
      include: {
        user: true,
      },
    });

    // console.log(courses);

    return { viewed_courses };
  } catch (error) {
    console.error("Error fetching counts:", error);
  }
}
