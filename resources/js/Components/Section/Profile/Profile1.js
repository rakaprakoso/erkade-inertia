// import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import Bar from "@/Components/Atoms/Bar/Bar";
import skillData from "./Skill.data"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Profile1 = () => {
    const dataProfile = [
        {
            key: 'Phone',
            value: '+62 81 226 727 363'
        },
        {
            key: 'Email',
            value: 'rakaprakoso2@gmail.com'
        },
        {
            key: 'City',
            value: 'Jepara, Central Java'
        }
    ]

    const dataLogo = [
        '/img/logos/HTML.png',
        '/img/logos/CSS.png',
        '/img/logos/JS.png',
        '/img/logos/NodeJS.png',
        '/img/logos/PHP.png',
        '/img/logos/Python.png',
        '/img/logos/Laravel.png',
        '/img/logos/Git.png',
        '/img/logos/Wordpress.png',
        '/img/logos/Photoshop.png',
        '/img/logos/Corel Draw.png',

    ]

    return (
        <section id="profile" className="py-20">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="p-8 lg:mx-24 rounded-xl shadow-lg">
                        <h2 className="border-bottom text-3xl font-semibold text-center mb-10 uppercase">About</h2>
                        <div className="row">
                            <div className="col-md-4 flex items-center justify-center flex-col">
                                <img
                                    width="300px"
                                    height="300px"
                                    className="object-cover rounded-full"
                                    style={{ width: '300px', height: '300px', }}
                                    src="/img/Profile - Raka D Prakoso(Compressed).jpg" />
                                <div className="w-full mt-6">
                                    <div className="mx-10">
                                    <Swiper slidesPerView={5}
                                        loop={true}
                                        grabCursor={true}
                                        centeredSlides={true}
                                        // autoplay={{
                                        //     "delay": 3000000000,
                                        //     "disableOnInteraction": false
                                        // }}
                                        autoplay={false}
                                        className="">
                                        {dataLogo.map((item, i) => (
                                            <SwiperSlide key={i} >
                                                <div className="swiper-skill">
                                                    <img className="img-item mx-auto" layout='fill' src={item} style={{ height: '60px' }} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 md:mt-0 mt-4">
                                <h3 className="text-2xl font-semibold mb-2">Web Developer</h3>
                                <p className="text-justify">Enthusiasm with full stack developer knowledgeable of backend and frontend development requirements. I am eager to be challenged in order to grow and further improve my skills. My greatest passion is in life is using my technical know-how to benefit other people and organizations.</p>
                                <ul className="profile-list mb-10">
                                    {dataProfile.map((item, i) => (
                                        <li key={i} className="mb-3">
                                            <FaAngleRight />
                                            <b>{item.key}</b> : {item.value}
                                        </li>
                                    ))}
                                </ul>
                                <h3 className="text-2xl font-semibold mb-2">Skills</h3>
                                <Bar skillData={skillData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile1
