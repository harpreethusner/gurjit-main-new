import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/images/bg1.jpg";

const services = [
  {
    id: "interior-design",
    label: "Interior Design",
    heading: "1. Interior Design Services",
    intro:
      "Our interior design services form the foundation of every project. We design with execution in mind — ensuring that every drawing is practical, budget-aligned, and achievable on site.",
    sections: [
      {
        title: "Scope of Interior Design",
        bullets: [
          "Space planning & layout design",
          "Furniture planning & custom joinery design",
          "Material, finish & hardware selection",
          "Lighting design & electrical layouts",
          "Color palettes & texture planning",
          "3D views for clarity and alignment",
        ],
      },
    ],
    closing:
      "Our design approach is collaborative, practical, and execution-ready.",
  },
  {
    id: "turnkey",
    label: "Turnkey Interior Execution",
    heading: "2. Turnkey Interior Execution",
    intro:
      "Our turnkey execution service is designed for clients who want a single, reliable partner to manage the entire interior journey.",
    sections: [
      {
        title: "What Turnkey Means at Gurjot Shan Designs",
        bullets: ["One contract", "One team", "One timeline", "One point of responsibility"],
      },
      {
        title: "Execution Scope Includes",
        bullets: [
          "Civil & structural modifications",
          "Electrical, lighting & automation",
          "Plumbing & sanitary works",
          "False ceiling & gypsum works",
          "Custom furniture & modular installations",
          "Flooring, wall finishes & painting",
          "Final styling & detailing",
        ],
      },
    ],
    closing:
      "We ensure the final outcome matches the approved design — no surprises, no compromises.",
  },
  {
    id: "residential",
    label: "Residential Interiors",
    heading: "3. Residential Interior Design",
    intro: "We create homes that are calm, functional, and deeply personal.",
    sections: [
      {
        title: "Residential Projects Include",
        bullets: [
          "Apartments & builder floors",
          "Independent homes & villas",
          "Full home renovations",
          "Kitchens, bedrooms, living & dining areas",
        ],
      },
    ],
    closing:
      "Every residential project balances comfort, aesthetics, durability, and budget discipline.",
  },
  {
    id: "commercial",
    label: "Commercial & Office Interiors",
    heading: "4. Commercial & Office Interiors",
    intro:
      "We design commercial spaces that support workflow, brand identity, and long-term usability.",
    sections: [
      {
        title: "Commercial Expertise",
        bullets: [
          "Corporate offices",
          "Design studios & creative spaces",
          "Clinics & professional setups",
          "Retail & boutique interiors",
        ],
      },
    ],
    closing: "Our commercial interiors are planned for efficiency, scalability, and visual clarity.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section
        className="h-[60vh] md:h-[70vh] lg:h-[75vh] bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative h-full max-w-5xl mx-auto px-6 flex flex-col items-start justify-center gap-4">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-400">Services</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Thoughtful design paired with seamless execution.
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-gray-200">
            Explore our core service lines and see how we keep every project aligned with vision,
            budget, and build quality.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full border border-white/40 bg-white/10 text-sm hover:bg-white/20 transition-colors"
              >
                {service.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.25em] text-xs text-amber-500">Services</p>
            <h2 className="text-2xl sm:text-3xl font-semibold">Designed to deliver, end-to-end.</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each offering is crafted to keep your project moving smoothly — from the earliest design
              decisions to the last layer of paint.
            </p>
          </div>

          {services.map((service, index) => (
            <section
              id={service.id}
              key={service.id}
              className={`scroll-mt-28 rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${
                index % 2 === 1 ? "bg-slate-50" : "bg-white"
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-10 p-8 md:p-10">
                <div className="flex-1 space-y-4">
                  <p className="text-sm font-semibold text-amber-500 uppercase">
                    {service.label}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold">{service.heading}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.intro}</p>
                  <p className="text-gray-800 font-medium">{service.closing}</p>
                </div>

                <div className="flex-1 space-y-6">
                  {service.sections.map((section) => (
                    <div
                      key={section.title}
                      className="rounded-xl bg-white shadow-sm border border-slate-200 p-5"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <div className="bg-black text-white">
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
















