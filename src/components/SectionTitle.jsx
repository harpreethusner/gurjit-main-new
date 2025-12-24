export function SectionTitle({ subtitle, title, needWhite }) {
  return (
    <div className="text-center flex flex-col gap-2 font-Urbanist text-gray-600">
      <p className="text-sm uppercase tracking-widest text-[#9A7B50]">
        {subtitle}
      </p>
      <h2
        className={`text-4xl !font-base !font-Urbanist ${
          needWhite ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
