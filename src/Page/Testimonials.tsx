// src/components/Testimonials.tsx
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  start: string; // Added Start / Rating
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michelle Selvaratnam",
    start: "★★★★★",
    message:
      "Lyceum Campus provides excellent teaching and practical experience, allowing me to apply my knowledge effectively.",
    image:
      "https://lyc-website-bucket.s3.ap-southeast-1.amazonaws.com/home/testimonials/sanuldi-de-silva-deakin-pathway-programme-2022-september-batch-lyceum-campus.webp",
  },
  {
    name: "Yasas Weliwita",
    start: "★★★★☆",
    message:
      "The lecturers were passionate and helped me gain confidence and real-world skills for my career.",
    image:
      "https://lyc-website-bucket.s3.ap-southeast-1.amazonaws.com/home/testimonials/yasas-weliwita-deakin-pathway-programme-lyceum-campus.webp",
  },
  {
    name: "Student Three",
    start: "★★★★★",
    message:
      "The curriculum was practical and relevant. Lecturers encouraged critical thinking and creativity.",
    image:
      "https://lyc-website-bucket.s3.ap-southeast-1.amazonaws.com/home/testimonials/lihini-marian-chamishka-ratnayake-diploma-in-english-language-teaching-2022-november-batch-lyceum-campus.webp",
  },
];

const Testimonials: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        padding: isMobile
          ? "30px 10px 60px"
          : isTablet
          ? "40px 20px 70px"
          : "60px 0 80px",
        backgroundColor: "#F3F4F6",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Section Heading */}
      <h3
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: isMobile ? "16px" : "18px",
          fontWeight: 500,
          color: "#111",
          marginBottom: "8px",
        }}
      >
        Customer Feedback
      </h3>
      <h2
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: isMobile ? "24px" : isTablet ? "28px" : "36px",
          fontWeight: 700,
          color: "#0b1033",
          marginBottom: isMobile ? "20px" : "40px",
        }}
      >
        Feedback from Our Clients
      </h2>

      {/* Swiper Slider */}
      <Swiper
        initialSlide={0}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1 : isTablet ? 1.2 : 1.3}
        spaceBetween={isMobile ? 10 : isTablet ? 15 : 20}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        style={{
          width: "100%",
          maxWidth: "900px",
          paddingBottom: isMobile ? "40px" : "50px",
          perspective: "100px",
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: "#fff",
              borderRadius: "16px",
              border: "1px solid #ddd",
              width: isMobile ? "90%" : "85%",
              maxWidth: "750px",
              overflow: "hidden",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.5s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                textAlign: isMobile ? "center" : "left",
                height: "100%",
              }}
            >
              {/* Image */}
              <div
                style={{
                  flex: isMobile ? "0 0 auto" : "0 0 45%",
                  height: isMobile ? "200px" : "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text Content */}
              <div
                style={{
                  flex: 1,
                  padding: isMobile ? "15px 20px" : "25px 30px",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: 700,
                    marginBottom: "6px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: isMobile ? "14px" : "16px",
                    color: "#f5a623", // gold color for stars
                    marginBottom: "10px",
                  }}
                >
                  {item.start}
                </p>
                <p
                  style={{
                    fontSize: isMobile ? "13px" : "14px",
                    color: "#444",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {item.message}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
