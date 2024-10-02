/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {
  Building2,
  PaintBucket,
  Lightbulb,
  Zap,
  BookOpen,
  Cog,
} from "lucide-react";
import Button from "../components/uiComponents/Button";
import Section from "../components/HomePageCommpenet/Section";
import AboutUsSection from "../components/HomePageCommpenet/AboutUsSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 3,
    title: "Finishing Works",
    description: "Expert solutions for all finishing needs.",
    icon: PaintBucket,
  },
  {
    id: 2,

    title: "Concrete Construction",
    description: "Quality concrete services for every project.",
    icon: Building2,
  },
  {
    id: 1,

    title: "Consultation",
    description: "Professional advice and project guidance.",
    icon: Lightbulb,
  },
];

const services = [
  {
    title: "Quick Connections",
    description:
      "Find and connect with finishing engineers quickly and efficiently.",
    icon: Zap,
  },
  {
    title: "Expert Consulting",
    description:
      "Consult with professional engineers to get expert advice for your projects.",
    icon: BookOpen,
  },
  {
    title: "Comprehensive Services",
    description:
      "From start to finish, we offer comprehensive services to ensure your project is completed to the highest standards.",
    icon: Cog,
  },
];

function Home({ isDarkMode, handleRedirectingUrl, userType }) {
  const navigate = useNavigate();

  useEffect(() => {
    handleRedirectingUrl("/");
  }, [handleRedirectingUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/CategoryDetails/${category.id}`);
  };

  return (
    <main
      className={`
  `}
    >
      <div className=" bg-gradient-to-r from-main to-accent dark:to-main-dark ">
        <img src="curve.svg" alt="" className="w-full    dark:hidden" />
        <img src="curvedark.svg" alt="" className="w-full hidden dark:block" />

        <div className="container mx-auto lg:relative -top-16   px-6 py-0  hero flex flex-col pb-10  md:flex-row justify-between items-center  ">
          <div className="about  text-center md:text-left mb-20 md:mb-0 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent ">
              Field Talent
            </h1>
            <p className="mb-6 text-lg  leading-relaxed text-text-dark">
              Welcome to Field Talent! Your one-stop platform to connect quickly
              with professional finishing engineers. Whether you need expert
              advice or looking to hire a skilled engineer, Field Talent makes
              the process seamless and efficient.
            </p>
            {userType ? (
              <div className="card-actions relative justify-center md:justify-start">
                <Button
                  to={userType === "engineer" ? "/showjobs" : "/add-job"}
                  text={userType === "engineer" ? "Show Jobs" : "Add job"}
                  variant="fill"
                  size="lg"
                />
              </div>
            ) : (
              <div className="card-actions relative justify-center md:justify-start">
                <Button
                  to="/registration"
                  text="join us now"
                  variant="fill"
                  size="lg"
                />
              </div>
            )}
          </div>
          {isDarkMode ? (
            <img
              src="feildtalentlogodark.png"
              alt="Field Talent Logo"
              className="img-fluid w-full md:w-1/2  rounded-lg shadow-lg"
            />
          ) : (
            <img
              src="feildtalentlogo.png"
              alt="Field Talent Logo"
              className="img-fluid w-full md:w-1/2  rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
      <hr className="my-28 border-gray-200" />

      <Section
        title="Our Categories"
        items={categories}
        onClick={handleCategoryClick}
      />
      <hr className="my-12 border-gray-200" />
      <Section title="Our Services" items={services} />
      <hr className="my-12 border-gray-200" />
      <AboutUsSection />
    </main>
  );
}

export default Home;
