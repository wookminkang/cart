import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
import { useQuery } from "react-query";
import { getStoreDatas } from "../../api/api";
import { Link } from "react-router-dom";

import styles from "../main/main.module.css";



export function Store(){
    const {isLoading,data:stores} = useQuery("stores",getStoreDatas);
    const swiperRef = useRef();

    return (
        <section className={styles.gray}>
            {
                isLoading ? (
                    <>
                        loading...
                    </>
                ):(
                    <article>
                        <div className={styles.articleHead}>
                            <h2>쉿! 쉐어잇에서만 예약 가능해요</h2> 
                            <div>
                                <p>
                                    <button className={styles.store_swiper_button_prev}
                                    onClick={() => swiperRef.current?.slidePrev()}><BsChevronLeft /></button>
                                </p>
                                <p>
                                    <button className={styles.store_swiper_button_next}
                                    onClick={() => swiperRef.current?.slideNext()}><BsChevronRight /></button>
                                </p>
                            </div>
                        </div>

                        <div className={styles.store_banner_wrap}>
                            <Swiper
                                spaceBetween={25}
                                slidesPerView={3}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                >
                                

                                {
                                    stores.map((item,index)=>(
                                        <SwiperSlide className={styles.event_slides} key={index}>
                                            <Link to="">
                                                <div>
                                                    <img src={`${item.image}`} />
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }                
                                
                            </Swiper>
                        </div>
                    </article>
                )
            }
        </section>
    );
}