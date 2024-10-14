const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 mt-16 p-4">
      <div className="w-[840px] uppercase text-[#031C1D]">
        <p className="text-[28px] leading-[33.89px] font-medium">
          Welcome to Z and N Construction and Landscaping, where quality meets
          creativity. Founded with a passion for transforming outdoor spaces and
          building lasting structures, we are dedicated to providing exceptional
          services that enhance both the beauty and functionality of your
          property.
        </p>
        <h2 className="mt-10 font-bold text-[28px]">Our Mission</h2>
        <p className="text-[28px] leading-[33.89px] font-medium">
          At Z and N, our mission is to deliver high-quality construction and
          landscaping solutions tailored to meet the unique needs of our
          clients. We believe in creating spaces that reflect your vision while
          ensuring durability and sustainability.
        </p>
        <h2 className="mt-10 font-bold text-[28px]">Our Team</h2>
        <p className="text-[28px] leading-[33.89px] font-medium">
          Our experienced team of professionals brings a wealth of knowledge and
          expertise to every project. From skilled landscapers to expert
          builders, we work collaboratively to ensure that each job is completed
          to the highest standards. We pride ourselves on our attention to
          detail, commitment to excellence, and passion for our craft.
        </p>
        <h2 className="mt-10 font-bold text-[28px]">What We Offer</h2>
        <ul className="list-disc pl-8">
          <li className="mt-2 text-[28px] leading-[33.89px] font-medium">
            Construction Services: From residential projects to commercial
            builds, we handle everything from design to execution, ensuring a
            seamless construction process.
          </li>
          <li className="mt-2 text-[28px] leading-[33.89px] font-medium">
            Landscaping Services: Our landscaping team specializes in creating
            beautiful gardens, patios, and outdoor living spaces that enhance
            your property’s appeal.
          </li>
        </ul>
      </div>
      <div className="uppercase text-[#031C1D]">
        {/* Here we will but a video latter on */}
        <div className="w-[852px] h-[587px] bg-black mb-4"></div>

        <h2 className="font-bold text-[28px]">Why Choose Us?</h2>
        <ul className="list-disc pl-8">
          <li className="mt-2 text-[28px] leading-[33.89px] font-medium">
            Quality Craftsmanship: We use only the best materials and techniques
            to ensure lasting results.
          </li>
          <li className="mt-2 text-[28px] leading-[33.89px] font-medium">
            Customer-Centric Approach: Your satisfaction is our priority. We
            listen to your needs and work closely with you throughout the
            project.
          </li>
          <li className="mt-2 text-[28px] leading-[33.89px] font-medium">
            Sustainable Practices: We are committed to environmentally friendly
            practices that benefit both our clients and the planet.
          </li>
        </ul>
        <p className="mt-2 text-[28px] leading-[33.89px] font-medium">
          Join us in creating beautiful, functional spaces that you can cherish
          for years to come. At Z and N Construction and Landscaping, we turn
          your dreams into reality.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
