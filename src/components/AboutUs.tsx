import { useDarkMode } from "@/context/DarkModeToggleProvider";
import classNames from "classnames";

interface Props {
  isItPage?: boolean;
}

const AboutUs = ({ isItPage }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={classNames({
        "grid grid-cols-1 md:grid-cols-2 mt-16 p-4 gap-4": true,
        "bg-neutral-900": darkMode,
        "mt-0": isItPage,
      })}
    >
      <div
        className={`w-full uppercase text-[#031C1D] ${
          darkMode && "text-white"
        }`}
      >
        <p className="text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          Welcome to Z and N Construction and Landscaping, where quality meets
          creativity. Founded with a passion for transforming outdoor spaces and
          building lasting structures, we are dedicated to providing exceptional
          services that enhance both the beauty and functionality of your
          property.
        </p>
        <h2 className="mt-10 font-bold text-[24px] md:text-[28px]">
          Our Mission
        </h2>
        <p className="text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          At Z and N, our mission is to deliver high-quality construction and
          landscaping solutions tailored to meet the unique needs of our
          clients. We believe in creating spaces that reflect your vision while
          ensuring durability and sustainability.
        </p>
        <h2 className="mt-10 font-bold text-[24px] md:text-[28px]">
          Our Team
        </h2>
        <p className="text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          Our experienced team of professionals brings a wealth of knowledge and
          expertise to every project. From skilled landscapers to expert
          builders, we work collaboratively to ensure that each job is completed
          to the highest standards. We pride ourselves on our attention to
          detail, commitment to excellence, and passion for our craft.
        </p>
        <h2 className="mt-10 font-bold text-[24px] md:text-[28px]">
          What We Offer
        </h2>
        <ul className="list-disc pl-8">
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
            Construction Services: From residential projects to commercial
            builds, we handle everything from design to execution, ensuring a
            seamless construction process.
          </li>
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
            Landscaping Services: Our landscaping team specializes in creating
            beautiful gardens, patios, and outdoor living spaces that enhance
            your property’s appeal.
          </li>
        </ul>
      </div>
      <div className={`uppercase text-[#031C1D] ${darkMode && "text-white"}`}>
        {/* Here we will put a video later on */}
        <div className="w-full h-[300px] md:w-[852px] md:h-[587px] bg-black mb-4"></div>

        <h2 className="font-bold text-[24px] md:text-[28px]">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-8">
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
            Quality Craftsmanship: We use only the best materials and techniques
            to ensure lasting results.
          </li>
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
            Customer-Centric Approach: Your satisfaction is our priority.
            Welisten to your needs and work closely with you throughout
            theproject.
          </li>
          <li className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
            Sustainable Practices: We are committed to environmentally friendly
            practices that benefit both our clients and the planet.
          </li>
        </ul>
        <p className="mt-2 text-[24px] leading-[29px] font-medium md:text-[28px] md:leading-[33.89px]">
          Join us in creating beautiful, functional spaces that you can cherish
          for years to come. At Z and N Construction and Landscaping, we turn
          your dreams into reality.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
