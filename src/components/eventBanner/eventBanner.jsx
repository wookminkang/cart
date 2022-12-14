import styles from "./eventBanner.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';






export const EventBanner = () => {

  const swiperRef = useRef();

  return (
    <Swiper
      slidesPerView={1}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      <button className={styles.event_swiper_button_prev}
    onClick={() => swiperRef.current?.slidePrev()}><BsChevronLeft /></button>
      <SwiperSlide>
        <div className={styles.banner}>
          <img src="/images/event01.jpeg" />
        </div>  
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.banner}>
          <img src="/images/event02.jpeg" />
        
        </div>
      </SwiperSlide>
      <button className={styles.event_swiper_button_next}
    onClick={() => swiperRef.current?.slideNext()}><BsChevronRight /></button>
    </Swiper>
    
  

    

    // <article
    //   className={styles.banner}
    //   style={{
    //     backgroundImage: "url(/images/event.png",
    //     backgroundSize: "100%",
    //   }}
    // >
    //   <div className={styles.right}>
    //     <img src="images/icon-swiper-2.svg" alt="right" />
    //   </div>
    //   <div className={styles.left}>
    //     <img src="images/icon-swiper-1.svg" alt="left" />
    //   </div>
    // </article>
  );
};
