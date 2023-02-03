import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Udemy from "./images/udemy.png";
import Scrum from "./images/scrum.png";
import IEC from "./images/iec.png";
import Java from "./images/java.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Certificates.css";


SwiperCore.use([Pagination, EffectCoverflow]);

const Certificates = () => {
  return(
    <div className="bg-certificats">
      <p className="heading">Certificates</p>
      <p className="text">These are some of my certifications.</p>

      <div className="slideshow">
        <Swiper
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 75,
            modifier: 6,
            slideShadows: false,
          }}
          pagination={{
            clickable: true, 
            type: "fraction",
          }}
        >
          <SwiperSlide>
            <img src={Udemy} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Scrum} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IEC} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Java} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          

        </Swiper>
      </div>

    </div>
  )
}

export default Certificates;