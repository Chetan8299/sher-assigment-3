import { RiArrowRightUpLine } from "@remixicon/react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Independency",
      description:
        "Explore the creativity of independent designers from around the globe.",
      cta: "Learn More",
    },
    {
      id: 2,
      title: "Uniquity",
      description:
        "Discover the charm of unique pieces that stand out effortlessly.",
      cta: "Learn More",
    },
    {
      id: 3,
      title: "Quality",
      description:
        "Experience unparalleled craftsmanship and attention to detail.",
      cta: "Learn More",
    },
    {
      id: 4,
      title: "Sustainability",
      description:
        "Embrace eco-conscious fashion choices without compromising on style.",
      cta: "Learn More",
    },
  ];

  return (
    <section className="container flex flex-col md:flex-row p-4 items-center gap-4">
      {features.map(function ({ id, title, description, cta }) {
        return (
          <div
            key={id}
            className="bg-secondary-black p-10 rounded-xl flex flex-col items-start gap-2 h-full w-full"
          >
            <div className="mb-4">
              <h1 className="mb-2 text-xl uppercase">{title}</h1>
              <p className="font-heading text-gray">{description}</p>
            </div>
            <button className="flex items-center gap-2 text-gray outline-none border-none cursor-pointer">
              <div className="bg-gray/20 rounded-full p-2 outline outline-white/50">
                <RiArrowRightUpLine size={18} />
              </div>
              <div>{cta}</div>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
