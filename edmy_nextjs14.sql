-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2024 at 07:58 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edmy_nextjs14`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `type` varchar(191) NOT NULL,
  `provider` varchar(191) NOT NULL,
  `providerAccountId` varchar(191) NOT NULL,
  `refresh_token` varchar(191) DEFAULT NULL,
  `access_token` text DEFAULT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `token_type` varchar(191) DEFAULT NULL,
  `scope` varchar(191) DEFAULT NULL,
  `id_token` text DEFAULT NULL,
  `session_state` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `asset`
--

CREATE TABLE `asset` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `lecture_name` varchar(191) NOT NULL,
  `asset_zip` varchar(191) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `asset`
--

INSERT INTO `asset` (`id`, `courseId`, `lecture_name`, `asset_zip`, `created_at`, `updated_at`) VALUES
(1, 1, 'Project catelog', 'https://res.cloudinary.com/dev-empty/raw/upload/v1712122501/g6gnhpql65wzaynmvglq.zip', '2024-04-03 05:35:05.530', '2024-04-03 05:35:05.530');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Web Development', 'web-development', '2024-02-06 07:17:13.567', '2024-02-06 07:17:13.567'),
(2, 'App Development', 'app-development', '2024-02-06 07:17:13.567', '2024-02-06 07:17:13.567'),
(3, 'Mobile', 'mobile', '2024-02-06 07:17:13.567', '2024-04-08 05:57:26.764'),
(4, 'IT Certifications', 'it-certifications', '2024-04-16 03:10:24.787', '2024-04-16 03:10:24.787'),
(5, 'Finance & Accounting', 'finance-accounting', '2024-04-16 06:06:21.447', '2024-04-16 06:06:21.447'),
(6, 'IT & Software', 'it-software', '2024-04-16 06:06:31.926', '2024-04-16 06:06:31.926'),
(7, 'Office Productivity', 'office-productivity', '2024-04-16 06:06:47.686', '2024-04-16 06:06:47.686'),
(8, 'Personal Development', 'personal-development', '2024-04-16 06:07:00.441', '2024-04-16 06:07:00.441'),
(9, 'Design', 'design', '2024-04-16 06:07:10.479', '2024-04-16 06:07:10.479'),
(10, 'Marketing', 'marketing', '2024-04-16 06:07:27.089', '2024-04-16 06:07:27.089'),
(11, 'Lifestyle', 'lifestyle', '2024-04-16 06:07:38.579', '2024-04-16 06:07:38.579'),
(12, 'Photography & Video', 'photography-video', '2024-04-16 06:07:51.034', '2024-04-16 06:07:51.034'),
(13, 'Health & Fitness', 'health-fitness', '2024-04-16 06:08:00.897', '2024-04-16 06:08:00.897'),
(14, 'Music', 'music', '2024-04-16 06:08:10.530', '2024-04-16 06:08:10.530'),
(15, 'Teaching & Academics', 'teaching-academics', '2024-04-16 06:08:22.773', '2024-04-16 06:08:22.773');

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `id` int(11) NOT NULL,
  `code` varchar(191) NOT NULL,
  `discount` double NOT NULL,
  `exp_date` datetime(3) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `active_for_full_site` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coupon`
--

INSERT INTO `coupon` (`id`, `code`, `discount`, `exp_date`, `status`, `deleted_at`, `active_for_full_site`, `created_at`) VALUES
(3, 'FEB25', 25, NULL, NULL, NULL, 0, '2024-04-08 06:40:48.479');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `catId` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `overview` text NOT NULL,
  `regular_price` double DEFAULT NULL,
  `before_price` double DEFAULT NULL,
  `is_free` tinyint(1) NOT NULL DEFAULT 0,
  `lessons` varchar(191) NOT NULL,
  `duration` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `access_time` enum('Lifetime','Three_Months','Six_Months','One_Year') NOT NULL DEFAULT 'Lifetime',
  `requirements` text NOT NULL,
  `what_you_will_learn` text NOT NULL,
  `who_is_this_course_for` text NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT 0,
  `in_home_page` tinyint(1) NOT NULL DEFAULT 0,
  `is_class` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `userId`, `catId`, `title`, `slug`, `overview`, `regular_price`, `before_price`, `is_free`, `lessons`, `duration`, `image`, `access_time`, `requirements`, `what_you_will_learn`, `who_is_this_course_for`, `approved`, `in_home_page`, `is_class`, `created_at`, `updated_at`) VALUES
(1, 6, 3, 'Linux Administration Bootcamp: Go from Beginner to Advanced', 'linux-administration-bootcamp-go-from-beginner-to-advanced', '<p>By the end of this course you will fully understand the most important and fundamental concepts of Linux server administration. More importantly, you will be able to put those concepts to use in practical real-world situations. You\'ll be able to configure, maintain, and support a variety of Linux systems. You can even use the skills you learned to become a Linux System Engineer or Linux System Administrator.</p><p><br></p><p><strong>Free Bonus&nbsp;- Video Demonstrations from my best-selling book, C<em>ommand Line Kung-Fu</em>.</strong></p><p>In this series of videos I\'ll be sharing with you some of my favorite Linux command line tricks. These tips will make your life easier at the command line, speed up your work flow, and make you feel like a certified Linux command line Ninja! If you want to see the pages of&nbsp;<em>Command Line Kung-Fu&nbsp;</em>come to life, then you have to watch these videos!</p>', 100, 199, 0, '156', '22 hours on-demand video', 'https://res.cloudinary.com/dev-empty/image/upload/v1661246066/r56386ipf0e55vcjtg3d.jpg', 'Lifetime', '<ul><li>Access to a computer with an internet connection.</li><li>step 2 repeat<sup>tm</sup></li></ul>', '<ul><li>You will learn how to leverage the power of Python to solve tasks.</li><li>You will build games and programs that use Python libraries.</li><li>You will be able to use Python for your work problems or personal projects.</li><li>You will create a portfolio of Python-based projects you can share.</li><li>Learn to use Python professionally, learning both Python 2 and Python 3!</li><li>Create games with Python, like Tic Tac Toe and Blackjack!</li><li>Learn advanced Python features, like the collections module, and how to work with timestamps!</li><li>Learn to use Object Oriented Programming with classes!</li><li>Understand complex topics, like decorators.</li><li>Understand how to use both the Jupyter Notebook and create .py files</li><li>Get an understanding of how to create GUIs in the Jupyter Notebook system!</li></ul>', '<ul><li>Beginners who have never programmed before.</li><li>Programmers switching languages to Python.</li><li>Intermediate Python programmers who want to level up their skills!</li></ul>', 1, 1, 0, '2024-03-11 18:12:03.503', '2024-06-27 05:36:50.958'),
(2, 6, 4, 'AWS Certified Security Specialty 2022', 'aws-certified-security-specialty-2022', '<p>This course is specially designed for the aspirants who intend to give the AWS Certified Security Specialty 2022 certification as well for those who want to master the security side of AWS.</p><p>Throughout the course, we explore various Real World scenarios and look into why do website gets hacked, what could have been done to prevent it, and learn the best practices related to Security for your AWS environment.</p><p>Since this is a Specialty level certification, it is very important that the candidate has a prior hands-on experience in AWS, and this also acts as a pre-requisite to this certification. We do start our journey into the security side of things from scratch.</p><p>With tons of quizzes in order to prepare you for exams, Real-world scenarios, and great Support from our Instructor in-case of doubts, this course is all you need to master the Security side of AWS and gain the certification.</p><p>I look forward to seeing you join us in this exciting journey on&nbsp;AWS&nbsp;Security.</p>', 74, 200, 0, '203', '14h total length', 'https://res.cloudinary.com/dev-empty/image/upload/v1662283339/r1ysgphohxnzf1t5a4m0.jpg', 'Lifetime', '<ul><li>Beginners welcome! This course was designed with non-techies and newcomers to the cloud in mind</li><li>No need for previous AWS cloud experience as we\'ll teach you the foundations of cloud computing</li><li>A free-tier AWS account is recommended to follow along with the practice lessons - we’ll show you step by step how to create one</li></ul>', '<ul><li>MAXIMIZE YOUR TIME EFFICIENCY: Learn at your own pace with theory lectures and guided practical hands-on exercises</li><li>QUIZZES: At the end of each section you get to review your knowledge with a total of 120 unique quiz questions that test your understanding</li><li>ALL DIAGRAMS, CODE AND SLIDES: Available for download in PDF format</li><li>RESPONSIVE SUPPORT: Our team of AWS experts respond to all of your questions, concerns or feedback</li><li>PRESENTED IN A PROFESSIONAL WAY: Focused and to the point, clear language with professional subtitles</li></ul>', '<ul><li>Students preparing for the AWS Certified Cloud Practitioner exam who want to pass with confidence at first attempt</li><li>Candidates for the AWS exam who want to feel fully prepared and master the cloud with this comprehensive ALL-IN-ONE Training Course</li><li>IT Professionals who want to become qualified AWS Cloud Practitioners and enter any AWS technical Job interview with confidence</li><li>Anyone who is keen to take their AWS Cloud Career and salary to the next level with an AWS certification</li><li>Professionals who want to learn how to leverage the benefits of the AWS Cloud to demonstrate strong capability with AWS to (future) employers</li><li>Those who feel ready to work in a real-world environment and want to gain solid experience on AWS and master the AWS platform</li></ul>', 1, 1, 0, '2024-04-16 03:15:05.395', '2024-04-16 03:22:36.079'),
(3, 6, 15, 'Complete workout : Complete Fitness Certification', 'complete-workout-complete-fitness-certification', '<p>Complete Workout&nbsp;For Weight Loss &amp; Muscle Building</p><p>In this course I will take you through the process of&nbsp;<strong>becoming a fitness expert step by step</strong>. You will learn everything you need to know about the fundamentals of good training programs and how to design your very own program for you or your clients.</p><p>I created this course for stay-at-home moms, college students, and anybody passionate about health and fitness who wants to create extra income or make a living doing what they love… fitness!</p><p><strong><em>Complete workout for Fitness, Weight loss, Weight gain, &amp; Body Building</em></strong></p><p>By the end of this course you will get Fitness Certification from Institute of Pakistan!</p><p>· Learn weight loss for real &amp; forever in A simple Manner</p><p>· How to lose weight very fast</p><p>· Improved fitness through exercise</p><p>· We will learn how we can contour our body shape</p>', 35, 75, 0, '28', '1h 51m', 'https://res.cloudinary.com/dev-empty/image/upload/v1662268371/xbablxdvrkt03pfr4sfw.jpg', 'Lifetime', '<ul><li>A basic understanding of the dynamics of an elementary, middle or high school classroom is required.</li></ul>', '<ul><li><span style=\"color: rgb(45, 47, 49);\">Students who complete this course will develop the skills necessary to develop a safe, caring and orderly classroom where academic and social-emotional learning can</span></li></ul>', '<ul><li>This target audience for this class is any novice or veteran teacher, supervisor, mentor or coach, and principals who would like to learn about effective classroom management.</li></ul>', 1, 1, 0, '2024-04-16 06:11:20.053', '2024-06-27 05:36:26.640'),
(4, 6, 5, 'The Complete Introduction To Accounting and Finance', 'the-complete-introduction-to-accounting-and-finance', '<p><strong>Welcome Students,</strong></p><p><br></p><p>I have been teaching on Udemy since 2011 (over 10 years)&nbsp;and have created&nbsp;88&nbsp;courses on Udemy with 100,000+ students!&nbsp;I&nbsp;love teaching on online, and empowering students with knowledge in accounting, finance, entrepreneurship, Excel and other business topics.&nbsp;</p><p>In my day to day life, I work as a consulting CFO,&nbsp;Chief Financial Officer.&nbsp;Mainly I&nbsp;work with growth stage companies, helping them put in place all the best accounting practices, financial modelling, working with investors, and financial reporting and analysis.&nbsp;&nbsp;</p><p>I have worked as a CFO exclusively to growing companies for 10+&nbsp;years, bringing my past corporate experience, my passion for the entrepreneur community, and experience helping over 100+ startups succeed.</p><p><strong>Now let me take my knowledge and experience and teach you!</strong></p><p><strong>All courses come with lifetime access, friendly support if you get stuck&nbsp;and a&nbsp;30 day money-back&nbsp;guarantee&nbsp;so there\'s no risk to get started.</strong></p><p>See you in class.</p>', 20, 50, 0, '8', '1h 20m', 'https://res.cloudinary.com/dev-empty/image/upload/v1660634620/dcqfowcf3z07sqgsud0e.jpg', 'One_Year', '<ul><li>You do not need any previous experience with stock charts.</li><li>All you need is an Internet connection and a desire to learn.</li><li>I supply links to all of the free tools needed for USA and Canadian traders.</li><li>For students outside the USA and Canada, your charting software must include the CCI - Commodity Chanel Index</li></ul>', '<ul><li>Become a successful trader!</li><li>Know exactly when to lock in profits.</li><li>Keep your losses to an absolute minimum.</li><li>Have a plan for entry and exit on every trade.</li><li>Trade stocks using one technical indicator that gives excellent Buy and Sell Signals.</li></ul>', '<ul><li>Everyone that wants to learn how to be a successful trader of Stocks and Exchange Traded Funds (ETF\'s)</li><li>This trading strategy also work for trading Currencies, Commodities and Cryptocurrencys.</li><li>Anyone that has too many Technical Indicators on their charts.</li><li>Anyone who wants a solid plan for entering and exiting trades.</li><li>Anyone who wants to stop taking big losses on their trades.</li><li>Anyone that needs a solid trading strategy.</li></ul>', 1, 1, 0, '2024-04-16 06:15:29.204', '2024-06-27 05:36:35.707'),
(5, 6, 5, 'How to Run truly Productive Meetings – and add value', 'how-to-run-truly-productive-meetings-and-add-value', '<p>The principles have been tried and tested in classroom training courses in UK, Scandinavia, Iceland and North Africa, in a mix of global businesses.</p><p>The short summaries give you the basics, literally, in minutes. The 12 videos and accompanying book are structured in short, 5 minute sections - and you can keep improving from the greater detail whenever you want.</p><p>If you’re a first time manager, team leader, or business operator and you’re fed up with the time and cost wasted in meetings – click on the link and make meetings work FOR you.</p><p><br></p>', 20, 50, 0, '8', '1h 20m', 'https://res.cloudinary.com/dev-empty/image/upload/v1661246498/gviacpl4bb55gp6r4dal.jpg', 'One_Year', '<ul><li>You do not need any previous experience with stock charts.</li><li>All you need is an Internet connection and a desire to learn.</li><li>I supply links to all of the free tools needed for USA and Canadian traders.</li><li>For students outside the USA and Canada, your charting software must include the CCI - Commodity Chanel Index</li></ul>', '<ul><li>Become a successful trader!</li><li>Know exactly when to lock in profits.</li><li>Keep your losses to an absolute minimum.</li><li>Have a plan for entry and exit on every trade.</li><li>Trade stocks using one technical indicator that gives excellent Buy and Sell Signals.</li></ul>', '<ul><li>Everyone that wants to learn how to be a successful trader of Stocks and Exchange Traded Funds (ETF\'s)</li><li>This trading strategy also work for trading Currencies, Commodities and Cryptocurrencys.</li><li>Anyone that has too many Technical Indicators on their charts.</li><li>Anyone who wants a solid plan for entering and exiting trades.</li><li>Anyone who wants to stop taking big losses on their trades.</li><li>Anyone that needs a solid trading strategy.</li></ul>', 1, 1, 0, '2024-04-16 06:16:56.264', '2024-06-27 05:36:36.807'),
(6, 6, 5, 'Fitness-Yoga-Pilates Combined - Quick Home Workout Program', 'fitness-yoga-pilates-combined-quick-home-workout-program', '<p>Let me ask you a few questions ;</p><ul><li>Are you happy with the&nbsp;<strong>extra pounds&nbsp;</strong>you\'re carrying around?</li><li>Are you happy with your&nbsp;<strong>well-being</strong>?</li><li>Do you wanna know what it feels like to wake up without<strong>&nbsp;back pain</strong>&nbsp;and be fully&nbsp;<strong>energized</strong>?</li><li>Have you ever thought about why you can\'t&nbsp;<strong>lose weight</strong>?</li><li>Maybe you\'ve asked yourself&nbsp;<strong>why</strong>&nbsp;I&nbsp;<strong>skip</strong>&nbsp;workouts after a while.</li></ul><p><strong>I`ve been there</strong>&nbsp;:)</p><p>What if I told you there\'s one thing, just one thing that can help you to change your current situation?</p><ul><li><strong>IF</strong>&nbsp;you can spend 25 minutes, 3 times a week,</li><li><strong>I F</strong>&nbsp;you want to see the difference in a short period of time and will motivate you,</li><li><strong>IF</strong>&nbsp;you can follow a dietary program that won\'t put you starving,</li></ul>', 20, 50, 0, '8', '1h 20m', 'https://res.cloudinary.com/dev-empty/image/upload/v1662283170/znxfx4pp9olufntv6blc.jpg', 'One_Year', '<ul><li>You do not need any previous experience with stock charts.</li><li>All you need is an Internet connection and a desire to learn.</li><li>I supply links to all of the free tools needed for USA and Canadian traders.</li><li>For students outside the USA and Canada, your charting software must include the CCI - Commodity Chanel Index</li></ul>', '<ul><li>Become a successful trader!</li><li>Know exactly when to lock in profits.</li><li>Keep your losses to an absolute minimum.</li><li>Have a plan for entry and exit on every trade.</li><li>Trade stocks using one technical indicator that gives excellent Buy and Sell Signals.</li></ul>', '<ul><li>Everyone that wants to learn how to be a successful trader of Stocks and Exchange Traded Funds (ETF\'s)</li><li>This trading strategy also work for trading Currencies, Commodities and Cryptocurrencys.</li><li>Anyone that has too many Technical Indicators on their charts.</li><li>Anyone who wants a solid plan for entering and exiting trades.</li><li>Anyone who wants to stop taking big losses on their trades.</li><li>Anyone that needs a solid trading strategy.</li></ul>', 1, 0, 0, '2024-04-16 06:18:22.402', '2024-04-16 06:23:27.849'),
(7, 6, 14, 'Live Acoustic Guitar and Electric Guitar Lessons', 'live-acoustic-guitar-and-electric-guitar-lessons', '<p>Eliminate All the Major Struggles When Getting Started With Playing Guitar</p><p>This course is the most&nbsp;<strong>\"Direct and To the Point\"</strong>&nbsp;course for ANY guitar player to watch and learn.&nbsp;</p><p>Finding 2 Hours of Quality Guitar Lessons that can be accessed&nbsp;<em>anywhere</em>&nbsp;for FREE and at&nbsp;<em>any time</em>&nbsp;of the day is hard to come by these days.&nbsp;</p><p>This free course solves all of those problems.&nbsp;</p><p>Follow the Videos in the Exact Same Order and You Will See a Huge Positive Difference in Your Playing</p><ul><li>Over 2 hours of Video and PDF attachments for most Lectures</li><li>Access this course 24/7, Mac or PC, Iphone,&nbsp;Ipad and Android</li></ul><p>Establishing solid core practice habits helps the speed of your results and also the quality of your results.&nbsp;</p><p>You\'ll Go From First Time User, Picking Up the Guitar, to Chord Transitioning AND Everything in Between Including the 9 Most Essential Chords</p><ul><li>Erich Andreas is Consider a Top 5 Online Guitar Teacher</li><li>With&nbsp;<strong>more than 730,000</strong>&nbsp;Youtube subscribers and&nbsp;<strong>over 100 Million</strong>&nbsp;views his teachings have been able to reach Millions of people all around the world</li></ul><p>&nbsp;The built in learning center allows you to track which videos you&nbsp;<strong>have or have not</strong>&nbsp;seen or watched.&nbsp;This is a great feature that gives the student the ability to learn at their own pace.&nbsp;</p><ul><li>Still undecided?&nbsp;Check out the value that\'s in this course.</li></ul>', 99, 120, 0, '22', '50 hours', 'https://res.cloudinary.com/dev-empty/image/upload/v1719381013/n1ydglktcnniunpvpnjg.jpg', 'Lifetime', '<ul><li>No Special Skills Needed</li><li>You Will Need a Guitar</li><li>Practice Can Not Be Avoided</li></ul>', '<ul><li>Establish a Firm Method for Understanding Music</li><li>Develop Your Foundation Which Will be Used For ALL Styles of Playing</li><li>Get You Started On \"the right foot\"</li><li>Fingerpicking Guitar, Strumming, Chords, Theory</li></ul>', '<ul><li>Every Guitar Player That Wants to Get Better Including \"day 1\" Students</li></ul>', 1, 0, 0, '2024-06-26 05:52:40.296', '2024-06-26 06:01:06.630'),
(8, 6, 14, 'Pianoforall - Incredible New Way To Learn Piano & Keyboard', 'pianoforall-incredible-new-way-to-learn-piano-keyboard', '<p><strong>Pianoforall is one of the most popular online piano courses with over 400,000 students worldwide</strong></p><p>Now ANYONE Can Learn Piano or Keyboard</p><p>Imagine being able to sit down at a piano and just PLAY - Ballads,&nbsp;Pop, Blues, Jazz, Ragtime, even amazing Classical pieces? Now you can...&nbsp;and you can do it in months not years without wasting money, time and&nbsp;effort on traditional Piano Lessons.&nbsp;</p><p><strong>An Incredible Set of&nbsp;Videos and ebooks (25 hours of video, 10 carefully structured ebooks)</strong></p><p>Pianoforall is specially designed to take complete beginners to an&nbsp;intermediate level faster than any other method. You start with popular&nbsp;rhythm style piano (think of artists like Lennon &amp; McCartney, Elton&nbsp;John, Billy Joel,&nbsp;Barry Mannilow, Lionel Ritchie, Coldplay and so on) which means you get to sound like a pro right from the&nbsp;start.</p><p>You then expand step-by-step into Ballad style, Blues, Jazz, Ragtime,&nbsp;Improvisation and creating your own melodies. You will even learn how to&nbsp;read music AS you learn how to ‘play-by-ear’ and eventually you will be&nbsp;able to play some amazing Classical pieces.&nbsp;</p><p><strong>The course is divided into 10 very easy to follow sections:</strong></p><ol><li>Party Time - Play-By-Ear - Rhythm Style Piano</li><li>Basic Blues &amp; Rock ’n’ Roll</li><li>Incredible Inversions</li><li>Chord Magic</li><li>Advanced Chords Made Easy</li><li>Ballad Style &amp; Improvisation</li><li>Jazz Piano Made Easy</li><li>Advanced Blues, Fake Stride &amp; The Entertainer</li><li>Taming The Classics</li><li>Speed Learning</li><li>Bonus Book - \'The Miracle of Mindfulness\'</li></ol><p>Pianoforall is one of the only piano&nbsp;courses on Udemy that comes with exceptional supplemental material - each video has an accompanying&nbsp;PDF&nbsp;that you can print out and set on your keyboard. There is a complete PDF ebook at the end of each section.&nbsp;It\'s very important&nbsp;to learn from printed instruction as well as video so that you can explore more written material after you finish the course.</p>', 95, 150, 0, '35', '2 hours', 'https://res.cloudinary.com/dev-empty/image/upload/v1719381789/mso6swkc87rnaglnznjm.jpg', 'Lifetime', '<ul><li>You don\'t need any prior knowledge or experience</li><li>Pianoforall works equally well on Piano or Keyboard</li><li>You only need to practice 20 minutes a day to make rapid progress</li></ul>', '<ul><li>Pianoforall will take complete beginners to an intermediate level in a very short space of time</li><li>You get to sound like a pro right from the start</li><li>You will learn the absolute basic essential techniques that will allow you to play any song in any style - by ear!</li><li>You will learn to read sheet music AS you learn to play-by-ear</li></ul>', '<ul><li>Suitable for all ages - from teens onwards (not for young kids)</li><li>Perfect for people who want to be able to just sit down at a piano and just amaze everyone.</li></ul>', 1, 0, 0, '2024-06-26 06:04:58.402', '2024-06-26 06:10:08.333'),
(9, 6, 6, 'Software Project Management For Start-ups And Solopreneurs', 'software-project-management-for-start-ups-and-solopreneurs', '<p>If you are a solopreneur or a small business owner, learn project management fundamentals for small businesses, and complete your projects successfully, on time, and on budget.</p><ul><li>Learn business prioritization and decision-making</li><li>Learn to use Trello productivity and project management software</li><li>Hire the best freelancers and make sure they deliver successful projects</li><li>Master early team building</li></ul><p><strong>WHO THIS&nbsp;COURSE&nbsp;IS&nbsp;FOR</strong></p><ul><li>Engineers who need to manage their projects better</li><li>Non-technical start-up founders who need to manage their technical co-founders or freelance developers whom they hire</li></ul><p>============================</p><p><strong>INSTRUCTOR BACKGROUND</strong></p><p>I\'ve been an entrepreneur for 15+ years, have coached 1,000+ entrepreneurs in person, taught 100,000+ students, impacted millions entrepreneurs worldwide creating 6 and 7-figure businesses in the process, and I&nbsp;would love to help you.</p><p>I am an expert growth marketer, and I&nbsp;create winning marketing strategies for my clients all the time. Now it is your turn to grow your business, and fulfill your dreams.</p><p>============================</p><p><strong>BONUSES&nbsp;INCLUDED</strong></p><p>* Lots of extra freebies, downloadable worksheets, and exercises to make the course more interactive and valuable</p><p>* Personal invitation to my Facebook community after you complete the course</p><p>* My list of 50 business-success skills when you complete the course</p><p>*&nbsp;Be automatically entered to get chosen for my student of the month status and have your business featured</p>', 147, 220, 0, '25', '10 Hours', 'https://res.cloudinary.com/dev-empty/image/upload/v1719382076/pe9ll3kex0cgq0kfphxv.jpg', 'Lifetime', '<ul><li>You should be a solo entrepreneur who is hiring online freelancers and looking to improve your project management skills</li></ul>', '<ul><li>Have your products go more smoothly, on time and on budget</li><li>Understand different software project management methodologies so you can use the right one for your project</li><li>Manage and complete software projects</li><li>Save money and time on not hiring the wrong developers and not mis-managing the projects</li><li>Increase the chances of success for your business by properly managing your developers to ensure that the project gets completed with high quality</li><li>Use project management productivity tools like Trello</li></ul>', '<ul><li>Entrepreneurs and non-technical start-up founders looking to improve their project management and productivity skills</li><li>Engineers looking to grow their skills beyond just programming and learn small project management</li></ul>', 1, 0, 0, '2024-06-26 06:08:53.379', '2024-06-26 06:10:09.266');

-- --------------------------------------------------------

--
-- Table structure for table `earning`
--

CREATE TABLE `earning` (
  `id` int(11) NOT NULL,
  `cost` double DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `status` enum('Due','Paid','Cancelled') NOT NULL DEFAULT 'Due',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `enrolment`
--

CREATE TABLE `enrolment` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `order_number` varchar(191) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `paymentId` varchar(191) DEFAULT NULL,
  `payment_status` enum('PENDING','PAID','CANCELLED','HOLD') NOT NULL DEFAULT 'PENDING',
  `status` enum('PENDING','PAID','CANCELLED','HOLD') NOT NULL DEFAULT 'PENDING',
  `payment_via` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `enrolment`
--

INSERT INTO `enrolment` (`id`, `userId`, `courseId`, `order_number`, `price`, `paymentId`, `payment_status`, `status`, `payment_via`, `created_at`) VALUES
(1, 6, 1, 'ORD-9818', 100, 'pi_3P116FGkYVWSHYLW1NBlsdSa', 'PAID', 'PAID', 'Stripe', '2024-04-02 06:45:40.214'),
(5, 6, 9, 'ORD-1100', 147, 'pi_3PVpDPGkYVWSHYLW1MoCms8z', 'PAID', 'PAID', 'Stripe', '2024-06-26 06:20:24.607');

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favourite`
--

INSERT INTO `favourite` (`id`, `userId`, `courseId`, `created_at`) VALUES
(5, 6, 5, '2024-06-25 10:06:14.741'),
(6, 6, 4, '2024-06-25 10:06:17.544');

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(11, 'partner-1', 'https://res.cloudinary.com/dev-empty/image/upload/v1719315453/hvar9nhrkdf3b3m29swy.png', '2024-06-25 11:38:48.201', '2024-06-25 11:38:48.201'),
(12, 'partner-2', 'https://res.cloudinary.com/dev-empty/image/upload/v1719315545/ofesdoptoihf51lw82ev.png', '2024-06-25 11:39:06.693', '2024-06-25 11:39:06.693'),
(13, 'partner-3', 'https://res.cloudinary.com/dev-empty/image/upload/v1719315557/o7j9pceqgiinddamztzh.png', '2024-06-25 11:39:19.494', '2024-06-25 11:39:19.494'),
(14, 'partner-4', 'https://res.cloudinary.com/dev-empty/image/upload/v1719315569/tuai1xqpj3nt2bt1viel.png', '2024-06-25 11:39:31.054', '2024-06-25 11:39:31.054'),
(15, 'partner-5', 'https://res.cloudinary.com/dev-empty/image/upload/v1719315578/lumqbilf5xf2du8bdyou.png', '2024-06-25 11:39:39.882', '2024-06-25 11:39:39.882'),
(16, 'partner-6', 'https://res.cloudinary.com/dev-empty/image/upload/v1719315586/fanhpqcl0tnncjrgwvcq.png', '2024-06-25 11:39:48.424', '2024-06-25 11:39:48.424');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `designation` varchar(191) DEFAULT NULL,
  `bio` varchar(191) DEFAULT NULL,
  `location` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `website` varchar(191) DEFAULT NULL,
  `twitter` varchar(191) DEFAULT NULL,
  `facebook` varchar(191) DEFAULT NULL,
  `linkedin` varchar(191) DEFAULT NULL,
  `youtube` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `userId`, `designation`, `bio`, `location`, `phone`, `website`, `twitter`, `facebook`, `linkedin`, `youtube`) VALUES
(1, 6, '', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley ', '', '+8801646295918', 'https://themes.gallery/', 'https://twitter.com', 'https://facebook.com', 'https://linkedin.com', 'https://youtube.com'),
(2, 7, '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', '', '+2923432432432', '#', 'https://twitter.com/', 'https://www.facebook.com/', 'https://www.linkedin.com/', 'https://www.youtube.com/');

-- --------------------------------------------------------

--
-- Table structure for table `progress`
--

CREATE TABLE `progress` (
  `id` int(11) NOT NULL,
  `finished` tinyint(1) NOT NULL DEFAULT 1,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `videoId` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `progress`
--

INSERT INTO `progress` (`id`, `finished`, `userId`, `courseId`, `videoId`, `created_at`) VALUES
(12, 1, 6, 1, 1, '2024-04-03 07:08:32.167'),
(13, 1, 6, 1, 11, '2024-04-03 07:08:43.206'),
(14, 1, 6, 1, 9, '2024-04-03 07:08:45.749'),
(15, 1, 6, 1, 8, '2024-04-03 07:08:48.775'),
(16, 1, 6, 1, 10, '2024-04-03 07:08:50.782'),
(17, 1, 6, 9, 21, '2024-06-26 07:31:24.823');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `rating`, `comment`, `userId`, `courseId`, `created_at`, `updated_at`) VALUES
(1, 2, 'Worst', 6, 1, '2024-04-03 05:52:51.015', '2024-04-03 05:52:51.015'),
(2, 3, 'Everage.....', 6, 1, '2024-04-03 06:05:59.609', '2024-04-03 06:05:59.609'),
(3, 4, 'Good', 6, 9, '2024-06-26 07:31:47.432', '2024-06-26 07:31:47.432');

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `designation` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `name`, `image`, `designation`, `description`, `created_at`, `updated_at`) VALUES
(1, 'John Berkings', 'https://res.cloudinary.com/dev-empty/image/upload/v1712478054/lj5qjro9mgaezlsubgrx.jpg', 'Angular CEO', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', '2024-04-07 08:21:31.106', '2024-06-25 12:06:38.162'),
(3, 'Mobile', 'https://res.cloudinary.com/dev-empty/image/upload/v1712478054/lj5qjro9mgaezlsubgrx.jpg', 'Angular CEO', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', '2024-04-07 08:21:31.106', '2024-06-25 12:06:45.657'),
(4, 'Jeni', 'https://res.cloudinary.com/dev-empty/image/upload/v1716720801/q4rvcoiebixwubtvlveu.jpg', 'Developer', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', '2024-05-26 10:53:50.113', '2024-06-25 12:06:50.211'),
(5, 'Smith', 'https://res.cloudinary.com/dev-empty/image/upload/v1716720835/amys4vgvy2knlo1qbaqv.jpg', 'Developer', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', '2024-05-26 10:54:12.962', '2024-06-25 12:06:55.678'),
(6, 'Jems', 'https://res.cloudinary.com/dev-empty/image/upload/v1716720859/xnpfbnb9n0dsprnvdk0v.jpg', 'Developer', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', '2024-05-26 10:54:28.824', '2024-06-25 12:07:00.808'),
(7, 'Lija', 'https://res.cloudinary.com/dev-empty/image/upload/v1716720872/wsc9zft6lsduogdgf3n7.jpg', 'Developer', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', '2024-05-26 10:54:40.718', '2024-06-25 12:07:05.203');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `hashedPassword` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `role` enum('USER','INSTRUCTOR','ADMIN') NOT NULL DEFAULT 'USER',
  `gender` enum('Male','Female') DEFAULT NULL,
  `is_instructor` tinyint(1) NOT NULL DEFAULT 0,
  `email_confirmed` tinyint(1) NOT NULL DEFAULT 0,
  `email_confirmed_at` datetime(3) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `hashedPassword`, `image`, `role`, `gender`, `is_instructor`, `email_confirmed`, `email_confirmed_at`, `is_active`, `created_at`, `updated_at`) VALUES
(6, 'John Doe', 'admin@edmy.com', '$2b$12$kERK.Uxb3nHHxlFB0iMlnuq5omFj6362gJyyY07193jH.1TcP7s9G', 'https://res.cloudinary.com/dev-empty/image/upload/v1712139903/typ3uhxza7v9wv5w48ch.jpg', 'ADMIN', 'Male', 0, 0, NULL, 1, '2024-03-11 08:47:48.153', '2024-04-03 10:25:06.433'),
(7, 'Steve Smith', 'teacher@edmy.com', '$2b$12$wl./Sb1GsDk86mLboGcQOuTTVtdPY0dbXxJ.UGbf06rTPK0t6tXQ.', 'https://res.cloudinary.com/dev-empty/image/upload/v1719201256/u0dgwyhh9lj1zwkvs7cd.jpg', 'USER', 'Male', 0, 0, NULL, 1, '2024-06-24 03:53:09.828', '2024-06-24 03:55:55.929'),
(8, 'novis', 'muttakin.3s.et@gmail.com', '$2b$12$r4jW/zfLDuwa5uW.zgsBM.Msqu4TAaNE3Qj6ZIgjLad9ZeVmxqJae', NULL, 'USER', NULL, 0, 0, NULL, 1, '2024-06-25 09:34:22.746', '2024-06-25 09:34:22.746'),
(9, 'Student', 'student@edmy.com', '$2b$12$THMz/l29CXCOsCQ8gUNV6evqN8z6OnYLdl5wlL3R15AFWvdbbHDOe', NULL, 'USER', NULL, 0, 0, NULL, 1, '2024-06-27 05:39:32.141', '2024-06-27 05:39:32.141');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `group_name` varchar(191) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `thumb_Image` varchar(191) DEFAULT NULL,
  `video_url` varchar(191) NOT NULL,
  `video_length` varchar(191) DEFAULT NULL,
  `is_preview` tinyint(1) NOT NULL DEFAULT 0,
  `short_id` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `courseId`, `group_name`, `title`, `thumb_Image`, `video_url`, `video_length`, `is_preview`, `short_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'Introduction', 'How to setup computer?', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 1, 1, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(8, 1, 'Introduction', 'Setep 1', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 0, 3, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(9, 1, 'Introduction', 'Setep 2', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 1, 5, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(10, 1, 'Introduction', 'Setep 3', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1710652558/xatwghyrdowx7wm1ewt2.mp4', '00:00:08', 1, 2, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(11, 1, 'Introduction', 'Setep 4', 'https://res.cloudinary.com/dev-empty/image/upload/v1710652579/rvlhltiuwjvfr9lx13vx.jpg', 'https://res.cloudinary.com/colbycloud-next-cloudinary/video/upload/q_auto/f_auto:video/v1/videos/mountain-stars?_s=vp-1.10.6', '00:00:08', 1, 10, '2024-03-17 05:16:59.100', '2024-03-17 05:16:59.100'),
(12, 2, 'Phase 1', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713237409/o3rjz4nxiu9xzj5i3qat.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713237433/wvo6bepjgkg5nsgwz9bm.mp4', '00:00:08', 1, 0, '2024-04-16 03:17:27.816', '2024-04-16 03:17:27.816'),
(13, 2, 'Phase 1', 'Setup Environment', 'https://res.cloudinary.com/dev-empty/image/upload/v1713237525/srrnamqv1vqsgrq8buhz.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713237494/gud1w1cimli7yf23glgb.mp4', '00:00:25', 0, 1, '2024-04-16 03:20:53.188', '2024-04-16 03:20:53.188'),
(14, 6, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248339/j1xmqfob3bmrvifyotno.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248349/exuhwhbteencg7etqbl5.mp4', '00:00:10', 1, 0, '2024-04-16 06:19:19.605', '2024-04-16 06:19:19.605'),
(15, 6, 'Introduction', 'Technical Analysis', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248421/wendd6igfdg6spinol2c.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248398/fxuf781bz1smwrqr6hbh.mp4', '00:00:20', 0, 1, '2024-04-16 06:20:27.030', '2024-04-16 06:20:27.030'),
(16, 4, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248471/swf357os32qf0nywkk4o.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248486/i4gtg3jtg3zq4eefonp3.mp4', '00:00:06', 1, 0, '2024-04-16 06:21:33.383', '2024-04-16 06:21:33.383'),
(17, 5, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248554/remidjexilj2nmucpdt0.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248526/qg2tcp96vytoisg8mfpr.mp4', '00:00:10', 0, 1, '2024-04-16 06:22:40.066', '2024-04-16 06:22:40.066'),
(18, 3, 'Introduction', 'Introduction', 'https://res.cloudinary.com/dev-empty/image/upload/v1713248577/hcvbbktracmft2z4s0rh.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1713248587/rtmsqdcyxvgn61u8nybf.mp4', '00:00:19', 1, 1, '2024-04-16 06:23:15.384', '2024-04-16 06:23:15.384'),
(19, 7, 'Lessons 1', 'Lessons 1', 'https://res.cloudinary.com/dev-empty/image/upload/v1719381599/hwyfigujnr7hvdcxwv2j.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1719381615/nicbqx8jyabg7jrjr6km.mp4', '00:00:15', 1, 1, '2024-06-26 06:00:26.057', '2024-06-26 06:00:26.057'),
(20, 8, 'Lessons 1', 'Lessons 1', 'https://res.cloudinary.com/dev-empty/image/upload/v1719381910/rdivbgyz9yagqlip6uuv.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1719381923/bnwc6v8h2hjcsphzx6q8.mp4', '00:00:30', 1, 1, '2024-06-26 06:05:32.038', '2024-06-26 06:05:32.038'),
(21, 9, 'Lessons 1', 'Lessons 1', 'https://res.cloudinary.com/dev-empty/image/upload/v1719382179/ce8fz8pcweixgra4wm11.jpg', 'https://res.cloudinary.com/dev-empty/video/upload/v1719382190/cyjmvvvch9pjepye3dut.mp4', '00:00:13', 1, 1, '2024-06-26 06:09:57.162', '2024-06-26 06:09:57.162');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Account_provider_providerAccountId_key` (`provider`,`providerAccountId`),
  ADD KEY `Account_userId_idx` (`userId`);

--
-- Indexes for table `asset`
--
ALTER TABLE `asset`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Asset_courseId_idx` (`courseId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Category_slug_key` (`slug`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Coupon_code_key` (`code`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Course_slug_key` (`slug`),
  ADD KEY `Course_userId_catId_idx` (`userId`,`catId`);

--
-- Indexes for table `earning`
--
ALTER TABLE `earning`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Earning_courseId_userId_idx` (`courseId`,`userId`);

--
-- Indexes for table `enrolment`
--
ALTER TABLE `enrolment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Enrolment_order_number_key` (`order_number`),
  ADD KEY `Enrolment_courseId_userId_idx` (`courseId`,`userId`);

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Favourite_courseId_userId_idx` (`courseId`,`userId`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Profile_userId_key` (`userId`);

--
-- Indexes for table `progress`
--
ALTER TABLE `progress`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Progress_courseId_userId_videoId_idx` (`courseId`,`userId`,`videoId`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Review_userId_courseId_idx` (`userId`,`courseId`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Subscription_email_key` (`email`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Video_courseId_idx` (`courseId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `asset`
--
ALTER TABLE `asset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `earning`
--
ALTER TABLE `earning`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `enrolment`
--
ALTER TABLE `enrolment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `progress`
--
ALTER TABLE `progress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
