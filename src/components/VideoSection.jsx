import React, { useState, useRef, useEffect } from "react";
import heroVideoImage from "../assets/images/BEST-INTERIOR-DESIGNS-01.jpg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  // You can replace this with your actual video URL or path
  // For example: "/videos/interior-design-showcase.mp4" or a YouTube embed URL
 // const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"; 
    const videoUrl = "https://harpreethusne.bsite.net/images/Portfolio/6.mp4"; 
  

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative bg-[#F7F3ED] py-10 md:py-16 px-4 sm:px-8 lg:px-16 overflow-x-hidden">

    {/* <section className="relative bg-[#F7F3ED] py-10 md:py-32 px-4 sm:px-8 lg:px-16 overflow-x-hidden"> */}
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c59a6d]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#c59a6d]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-8xl relative z-10">
        {/* Heading */}
        <div className="mb-12 md:mb-16 w-full text-center md:text-left">
          {/* <div className="inline-block mb-4">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#c59a6d] mb-3 relative inline-block">
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c59a6d] opacity-50"></span>
              Our Design Process
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#c59a6d] opacity-50"></span>
            </p>
          </div> */}
          <div className="grid md:grid-cols-1 gap-8 md:gap-12 items-start">
            <div className="md:col-span-1">
              <h2 className="text-5xl md:text-5xl lg:text-5xl font-Urbanist font-bold leading-tight text-[#1f1a17] mb-6">
                A New Chapter in Our {" "}
                <span className="relative inline-block">
                  <span className="text-[#c59a6d]">Design Journey</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c59a6d]/30 to-transparent"></span>
                </span>
              </h2>
            </div>
            {/* <div className="md:col-span-1">
              <p className="mt-0 md:mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
                Discover how thoughtful design transforms ordinary rooms into extraordinary living spaces. Explore our creative process, premium materials, and expert craftsmanship that bring your dream home to life.
              </p>
            </div> */}
          </div>
          <p className="text-base md:text-lg text-gray-700 font-Urbanist leading-relaxed">
            Good design is not just about how a space looks —

            it’s about how well it works, how long it lasts, and how effortlessly it is delivered.



            Gurjot Shan Designs was founded with this belief.



            Led by Gurjot Shan, the studio brings together creativity, technical understanding, and execution expertise. Over the years, we have evolved into a design-build studio, trusted by clients who value clarity, commitment, and craftsmanship.     </p>
        </div>

        {/* Video Card */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative rounded-[20px] bg-white shadow-[0_32px_100px_rgba(15,23,42,0.15)] overflow-visible transition-all duration-500 hover:shadow-[0_40px_120px_rgba(15,23,42,0.2)] hover:-translate-y-1">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c59a6d]/10 to-transparent rounded-bl-full z-0"></div>

            <div className="relative overflow-hidden rounded-[20px]">
              {/* Video Element */}
              <video
                ref={videoRef}
                src={videoUrl}
                poster={heroVideoImage}
                className="w-full h-[280px] sm:h-[400px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                onEnded={handleVideoEnd}
                playsInline
              />

              {/* Enhanced gradient overlay - only show when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 transition-opacity duration-300" />
              )}

              {/* Animated play button */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer focus:outline-none group/play"
                  aria-label="Play interior design video"
                >
                  {/* Ripple effect background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-32 h-32 rounded-full bg-white/20 animate-ping"></div>
                    <div className="absolute w-28 h-28 rounded-full bg-white/30 animate-pulse"></div>
                  </div>

                  {/* Main play button */}
                  <span className="relative flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-white/98 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-md transition-all duration-300 group-hover/play:scale-110 group-hover/play:shadow-[0_25px_70px_rgba(197,154,109,0.4)] active:scale-95">
                    {/* Inner glow */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-[#f6efe7] opacity-80"></span>
                    {/* Play icon */}
                    <span className="relative ml-1.5 inline-block border-l-[22px] md:border-l-[26px] border-l-[#c59a6d] border-y-[12px] md:border-y-[14px] border-y-transparent transition-transform duration-200 group-hover/play:translate-x-1"></span>
                  </span>

                  {/* Play text */}
                  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-medium tracking-wider uppercase opacity-90">
                    Watch Our Story
                  </span>
                </button>
              )}

              {/* Enhanced pause button overlay when playing */}
              {isPlaying && (
                <button
                  type="button"
                  onClick={handlePlayPause}
                  className={`absolute inset-0 flex items-center justify-center z-10 cursor-pointer focus:outline-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  aria-label="Pause video"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-black/60 backdrop-blur-md transition-all duration-200 hover:bg-black/70 hover:scale-110">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              )}

              {/* Decorative badge - positioned inside container bounds */}
              <div className="pointer-events-none absolute right-4 top-4 hidden lg:block z-20">
                <div className="h-28 w-28 rounded-full border-6 border-[#f1e2cf] bg-gradient-to-br from-[#f9f1e6] to-white shadow-xl flex items-center justify-center transform rotate-12 transition-transform duration-500 group-hover:rotate-6">
                  <div className="h-20 w-20 rounded-full border-2 border-dashed border-[#c59a6d]/50 flex items-center justify-center">
                    <div className="text-center px-2">
                      <p className="text-[9px] tracking-[0.18em] uppercase text-[#c59a6d] font-bold">
                        Showcase
                      </p>
                      <p className="mt-0.5 text-[8px] text-[#8a6b40] leading-tight">
                        Design Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom text row with icons */}
        <div className="mt-12 md:mt-16 grid gap-8 md:gap-10 text-sm md:text-base text-gray-700 md:grid-cols-3">
          <div className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#f1e2cf]/50 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#c59a6d]/10 flex items-center justify-center group-hover:bg-[#c59a6d]/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-[#c59a6d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="leading-relaxed pr-4">
              Our team of experienced interior designers works closely with you to understand your lifestyle,
              preferences, and vision, ensuring every detail reflects your unique personality.
            </p>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#c59a6d]/5 to-[#f1e2cf]/30 border border-[#c59a6d]/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#c59a6d]/20 flex items-center justify-center group-hover:bg-[#c59a6d]/30 transition-colors duration-300">
              <svg className="w-6 h-6 text-[#c59a6d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="italic font-medium text-[#8a6b40] leading-relaxed pr-4">
              "Great design is not just about aesthetics—it's about creating spaces that enhance your daily life
              and bring joy to every moment you spend at home."
            </p>
          </div>

          <div className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#f1e2cf]/50 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#c59a6d]/10 flex items-center justify-center group-hover:bg-[#c59a6d]/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-[#c59a6d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="leading-relaxed pr-4">
              From concept to completion, we handle every aspect of your interior design project,
              delivering exceptional results that exceed expectations and transform your living space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;




