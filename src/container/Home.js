import React from 'react';
import ad1 from "../assets/ad.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Home = () => {
    return (
        <>
            <div className='container'>
                <div className=' d-flex justify-content-between' style={{ fontSize: "small", color: "black", width: "90%", cursor: "pointer" }}>

                    <div>
                        <p className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                All Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">1....</a></li>
                                <li><a className="dropdown-item" href="#">1....</a></li>
                                <li><a className="dropdown-item" href="#">1....</a></li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        Books
                    </div>
                    <div>
                        Electronics
                    </div>
                    <div>
                        Real estate
                    </div>
                    <div>
                        Cars-bikes
                    </div>
                    <div>
                        Dorm-furniture
                    </div>
                    <div>
                        Men
                    </div>
                    <div>
                        Women
                    </div>
                    <div>
                        Music
                    </div>
                    <div>
                        hobbies Games
                    </div>
                    <div>
                        toys
                    </div>
                    <div>
                        Kids
                    </div>


                </div>
            </div>

            <div className='container' >
                <Swiper

                    modules={[Pagination, A11y]}
                    spaceBetween={4}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}

                >
                    <SwiperSlide className='m-2 p-5' style={{ position: "relative" }}>
                        <img src={ad1} alt='...' style={{ width: "100%", }} />
                        <div className='' style={{ width: "50%", position: "absolute", top: "150px", left: "45%" }}  >
                            <h2 style={{ fontWeight: "lighter" }}>From students to senior citizens</h2>
                            <h2 style={{ fontWeight: "lighter" }}>This web portal of </h2>
                            <h2>"Products and Classifieds”</h2>
                            <h2 style={{ fontWeight: "lighter" }}>provides it all</h2>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='m-2 p-5' style={{ position: "relative" }}>
                        <img src={ad1} alt='...' style={{ width: "100%", }} />
                        <div className='' style={{ width: "50%", position: "absolute", top: "150px", left: "45%" }}  >
                            <h2 style={{ fontWeight: "lighter" }}>From students to senior citizens</h2>
                            <h2 style={{ fontWeight: "lighter" }}>This web portal of </h2>
                            <h2>"Products and Classifieds”</h2>
                            <h2 style={{ fontWeight: "lighter" }}>provides it all</h2>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='m-2 p-5' style={{ position: "relative" }}>
                        <img src={ad1} alt='...' style={{ width: "100%", }} />
                        <div className='' style={{ width: "50%", position: "absolute", top: "150px", left: "45%" }}  >
                            <h2 style={{ fontWeight: "lighter" }}>From students to senior citizens</h2>
                            <h2 style={{ fontWeight: "lighter" }}>This web portal of </h2>
                            <h2>"Products and Classifieds”</h2>
                            <h2 style={{ fontWeight: "lighter" }}>provides it all</h2>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>



        </>

    )
}

export default Home