import React from "react";

const About = () => {
  return (
    <section className="container flex flex-col md:flex-row gap-4 py-4">
      <div className="left md:w-1/2 bg-secondary-black rounded-2xl p-10 flex flex-col gap-10 md:gap-20">
        <div className="uppercase md:text-2xl">About</div>
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-2xl md:text-5xl">WHERE FASHION MEETS FREEDOM </h1>
          <div className="flex flex-col font-heading md:flex-row text-gray md:gap-4 max-w-prose">
            <p>
              We believe that fashion should be an expression of individuality.
              We encourage creativity and originality in every item we offer,
              presenting customers with exclusive collections from independent
              designers. With a commitment to fostering a community of
              creativity and innovation.
            </p>
            <p>
              We strive to connect designers with fashion enthusiasts who
              appreciate the artistry and individuality behind each piece.
              Driven by our dedication to authenticity, we curate each
              collection with a keen eye for unique designs that inspire
              confidence and self-expression.
            </p>
          </div>
        </div>
      </div>
      <div className="right bg-[url(/images/girlWearingLongCoat.png)] bg-no-repeat object-cover bg-center min-h-60 md:w-1/2 rounded-2xl"></div>
    </section>
  );
};

export default About;
