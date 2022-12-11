import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Homemodule.scss";
import lalo from "./lalo.jpg";
import mike from "./mike.jpg";
import Nacho from "./Nacho.jpg";
import walter from "./walter-wjpg.jpg";
import quote from "./quote.png";
export default () => {
  return (
    <div className="testimonial-container section__padding">
      <h1>
        Look At What Our <br /> Clients Have to Say
      </h1>
      <div className="gpt3__swiperslide  ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="gpt3__swiperslide-first" grabCursor={true}>
            <img className="profile-pic" src={lalo} alt="" />
            <p className="header">
              "GPT3 has truly made my financial life alot more stable with the
              features it provides me with. I reccomend this product to anyone
              who wishes for a easier financial lfie managing thier family
              business."
            </p>
            <img className="quote" src={quote} alt="" />
            <p>Eduardo Lalo Salamanca</p>
            <p>Owner of Lalo's Tacos</p>
          </SwiperSlide>
          <SwiperSlide className="gpt3__swiperslide-second" grabCursor={true}>
            <img className="profile-pic" src={mike} alt="" />
            <p className="header">
              "GPT3 really helps me to manage my financial life with proper
              guidance and support. It has done wonders for me and my family
              with money management "
            </p>{" "}
            <img className="quote" src={quote} alt="" />
            <p>Mike Ehrm</p>
            <p>Security Head</p>
          </SwiperSlide>
          <SwiperSlide className="gpt3__swiperslide-third" grabCursor={true}>
            <img className="profile-pic" src={Nacho} alt="" />
            <p className="header">
              As a young person who wants to save money GPT3 really does the
              trick in helping me achieve a secure future.
            </p>{" "}
            <img className="quote" src={quote} alt="" />
            <p>Nacho Varga</p>
            <p>Student</p>
          </SwiperSlide>
          <SwiperSlide className="gpt3__swiperslide-fourth" grabCursor={true}>
            <img className="profile-pic" src={walter} alt="" />
            <p className="header">
              I have been saving up for my retirement funds and GPT3 really has
              been helping me alot to do so, a strongly reccomended service to
              use
            </p>{" "}
            <img className="quote" src={quote} alt="" />
            <p>Walter White</p>
            <p>Chemistry Teacher</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
