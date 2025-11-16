import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

import img1 from "../assets/Featured/alt.png";
import img2 from "../assets/Featured/alt(1).png";
import img3 from "../assets/Featured/alt(2).png";
import img4 from "../assets/Featured/alt(3).png";
import img5 from "../assets/Featured/alt(4).png";
import img6 from "../assets/Featured/alt(5).png";
import img7 from "../assets/Featured/alt(6).png";
import img8 from "../assets/Featured/alt(7).png";
import img9 from "../assets/Featured/alt(8).png";
import img0 from "../assets/Featured/alt(9).png";

const categories = [
  { img: img1, name: "Cake & Milk", items: "11 items", bg: "#EAF7D9" },
  { img: img2, name: "Organic Kiwi", items: "6 items", bg: "#F6F7D9" },
  { img: img3, name: "Peach", items: "6 items", bg: "#FDE6DC" },
  { img: img4, name: "Read Apple", items: "10 items", bg: "#FEE9E7" },
  { img: img5, name: "Snacks", items: "11 items", bg: "#FEF0D8" },
  { img: img6, name: "Vegetables", items: "6 items", bg: "#F3E7FF" },
  { img: img7, name: "Strawberry", items: "10 items", bg: "#EBF9E7" },
  { img: img8, name: "Black plum", items: "10 items", bg: "#FCE8E8" },
  { img: img9, name: "Custard apple", items: "10 items", bg: "#EAF7D9" },
  { img: img0, name: "Coffe & Tea", items: "11 items", bg: "#FDE6DC" }
];

const CategorySlider = () => {
  return (
    <div className="w-full relative flex items-center justify-center gap-2">
      <div className="hidden md:block">
      <button className="swiper-button-prev custom-nav-left">
        <CiCircleChevLeft />
      </button>
      </div>

      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-nav-right",
            prevEl: ".custom-nav-left",
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={20}
          loop={true}

          breakpoints={{

            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
          }}

        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div
                className="hover:scale-105 duration-300"
                style={{
                  background: cat.bg,
                  borderRadius: "16px",
                  textAlign: "center",
                  padding: "20px 10px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.05)"
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    margin: "0 auto"
                  }}
                />

                <h4 style={{ marginTop: "10px", fontSize: "16px", fontWeight: "600" }}>
                  {cat.name}
                </h4>

                <p style={{ fontSize: "14px", color: "#666", marginTop: "4px" }}>
                  {cat.items}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
       <div className="hidden md:block">   
      <button className="swiper-button-next custom-nav-right">
        <CiCircleChevRight />
      </button>
      </div>
    </div>
  );
};

export default CategorySlider;