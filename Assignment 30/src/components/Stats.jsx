import React from "react";

const Stats = () => {
  const stats = [
    {
      id: 1,
      label: "Designers",
      value: "150+",
    },
    {
      id: 2,
      label: "Clients",
      value: "500+",
    },
    {
      id: 3,
      label: "Masterpieces",
      value: "20K+",
    },
    {
      id: 4,
      label: "Events",
      value: "50+",
    },
  ];

  return (
    <section className="container flex flex-col gap-4 md:flex-row justify-center items-around md:items-center md:justify-around p-4 w-full">
      {stats.map(function ({ id, label, value }) {
        return (
          <div className="flex flex-col items-center justify-center " key={id}>
            <p className="text-gray">{label}</p>
            <h1 className="font-body text-5xl">{value}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
