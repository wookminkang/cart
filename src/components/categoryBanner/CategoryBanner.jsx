import styles from "../main/main.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCategoryDatas } from "../../api/api";


export function CategoryBanner (){
    const {isLoading,data:categorys} = useQuery("categorys",getCategoryDatas);
    const swiperRef = useRef();
    

    
    return (
        <section>
            {
                isLoading ? (
                    <>loding...</>
                ) : (
                    <article>
                        <div className={styles.articleHead}>
                            <h2>1인 스튜디오에서 2천명 대형 체육관까지, 상상 가능한 모든 공간을 한 눈에</h2> 
                            <div>
                                <p>공간</p>
                                <p>행사</p>
                            </div>
                        </div>

                        <div className={styles.category_banner_wrap}>
                            <Swiper
                                spaceBetween={15}
                                slidesPerView={5}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                >
                                <button className={styles.category_swiper_button_prev}
                                onClick={() => swiperRef.current?.slidePrev()}><BsChevronLeft /></button>

                                {
                                    categorys.map((item,index)=>(
                                        <SwiperSlide className={styles.event_slides} key={index}>
                                            <Link to={`${item.link}`}>
                                                <div>
                                                    <img src={`/images/${item.image}`} />
                                                </div>
                                                <h3>{item.name}</h3>
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                }                
                                

                                <button className={styles.category_swiper_button_next}
                                onClick={() => swiperRef.current?.slideNext()}><BsChevronRight /></button>
                            </Swiper>
                        </div>
                    </article>
                )
            }
            
        </section>
    )
}