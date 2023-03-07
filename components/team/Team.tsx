import {Container} from '../container/Container';
import s from './styles.module.scss';
import {TopTable} from "../topTable/TopTable";
import React, {FC} from "react";

import {Promo} from "../promo/Promo";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { TeamCard } from '../teamCard/Card';
const cardsData = [
    {
        image:"./../static/team/teamPerson1.webp",
        title:'Аникьев Данил',
        description:'Технический директор',
        text:'Организую производство программных продуктов для вашего бизнеса.\n' +
            '\n',
        quote:'«Планирование и грамотная организация деятельности - залог успеха»'
    },
    {
        image:"./../static/team/teamPerson2.webp",
        title:'Глушков Андрей ',
        description:'Коммерческий директор',
        text:'Организую  внутреннюю среду  компании. \n' +
            'Разработка стратегии развития и масштабирования.\n' +
            '\n',
        quote:'“Важен каждый день. Что мы делаем, с какой целью и с кем”'    },
    {
        image:"./../static/team/teamPerson3.webp",
        title:'Максин Илья',
        description:'Руководитель frontend разработки',
        text:'Организую разработку удобных и современных пользовательских интерфейсов и web-приложений',
        quote:'«Нет возможностей, пока вы их не создадите»'
    },
    {
        image:"./../static/team/teamPerson4.webp",
        title:'Никонов Валерий',
        description:'Руководитель backend разработки',
        text:'Организую работу разработчиков по бэкенд направлению. Отвечаею за бизнес-логику приложений.',
        quote: '«Иногда черная полоса становиться взлетной»'
    },
    {
        image:"./../static/team/teamPerson5.webp",
        title:'Рысьев Александр',
        description:'Руководитель mobile разработки',
        text:'Организую, контролирую и развиваю процессы внутри  Mobile-направления компании\n' +
            '\n',
        quote: '«Время - самый важный ресурс твоей жизни»'
    },
    // {
    //     image:"./../static/teamPerson6.png",
    //     title:'Платонов Юрий',
    //     description:'Руководитель инновационных разработок',
    //     text:'Здесь описаны обязанности технического директора, за что он отвечает и какую по важности роль играет в команде'
    // },
]

type cardsDataType = typeof cardsData
export const Team = () => {
    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: '25px',
        dots:true
    };
    return (
        <div className={s.team}>
            <Container>
                <div className={s.inner}>
                    <TopTable text={'Менеджмент Utouch'} id={'team'}/>
                    <p className={s.text}>Познакомьтесь с фронтменами нашей компании:</p>
                    <div className={s.cards}>
                        {
                            cardsData.map((card,index)=>{
                                return(
                                    <TeamCard card={card} key={index}/>
                                )
                            })
                        }
                        <Promo className={s.cardsPromo}/>
                    </div>
                </div>
            </Container>

            <div className={s.cardsSlider}>
                <Swiper
                    slidesPerView={'auto'}
                    style={{height:'450px'}}

                    centeredSlides={true}
                    spaceBetween={10}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={s.teamSwiper}
                >
                    {
                        cardsData.map((card,index)=>{
                            return(
                                <SwiperSlide
                                    key={index}
                                    className={s.portfolioSlide}
                                    style={{width:'300px'}}
                                >
                                <div key={index} className={s.card}>
                                    <TeamCard card={card}/>
                                </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
            <div className={s.mobilePromo}>
                <Promo/>
            </div>
        </div>
    )
}




