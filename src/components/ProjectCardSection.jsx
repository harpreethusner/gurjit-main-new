import React from "react";

const projects = [
  {
    title: "Serenity in the Hills:",
    subtitle: "Minimalist 3BHK",
    image: "/images/project1.png",
    tag: "FLAT INTERIOR",
  },
  {
    title: "Exquisite",
    subtitle: "Carved Creations",
    image: "/images/project2.png",
    tag: "FLAT INTERIOR",
  },
  {
    title: "4 BHK",
    subtitle: "Kothi",
    image: "/images/project3.png",
    tag: "3D ELEVATION",
  },
];

const ProjectCardSection = () => {
  return (
    <div className="w-full px-4 md:px-16 py-10 space-y-20 bg-white">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="relative border shadow-md p-1">
            <img
              src={project.image}
              alt={project.title}
              className="w-[300px] md:w-[350px] h-auto"
            />
            <p className="absolute -left-8 top-1/2 transform -rotate-90 text-xs text-gray-500 tracking-wider">
              {project.tag}
            </p>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-medium leading-tight">
              {project.title} <br />
              {project.subtitle}
            </h2>
            {/* <button className="mt-3 inline-flex items-center border-b-2 border-black pb-1 hover:pr-2 transition-all duration-300 group">
              View More
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardSection;
