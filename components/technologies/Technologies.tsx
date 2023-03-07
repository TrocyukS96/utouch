import s from './styles.module.scss';
import {TopTable} from "../topTable/TopTable";
import {Container} from "../container/Container";
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "../image";
import {Pagination, Autoplay} from "swiper";
import "swiper/css/pagination";
import {useState} from "react";
import clsx from "clsx";

const slidesData = [
    {
        image:'./../static/stack/nodejs.svg',
        title:'node',
        text:'Каскадные таблицы стилей третьего поколения',
        style:{width: '128px'}
    },
    {
        image:'./../static/stack/swift.svg',
        title:'swift',
        text:'Каскадные таблицы стилей третьего поколения',
        style:{width: '128px'}
    },
    {
        image:'./../static/stack/kotlin.svg',
        title:'Kotlin',
        text:'Some text',
        style:{width: '128px'}
    },
    {
        image:'./../static/stack/react.svg',
        title:'React',
        text:'Some text',
        style:{width: '128px'}
    },
    {
        image:'./../static/stack/ts.svg',
        title:'ts',
        text:'Some text',
        style:{width: '128px'}
    },
    {
        image:'./../static/stack/vue.svg',
        title:'Vue',
        text:'Some text',
    },
    {
        image:'./../static/stack/laravel.svg',
        title:'laravel',
        text:'Some text',
        style:{width: '128px'}
    },
]

export const Technologies = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <div className={s.technologies}>
            <div className={s.inner}>
                <Container>
                    <TopTable id={'technologies'} text={'Применяемые технологии'} className={s.topTitle}/>
                </Container>
                <div className={s.sliderWrap}>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    style={{height:'300px'}}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    speed={1000}
                    allowTouchMove={true}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className={s.sliderWrap}
                    onActiveIndexChange={(index) => {
                        setActiveIndex(index.activeIndex % slidesData.length)
                    }}
                >
                    {slidesData.map((card, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className={clsx(s.slide, index === activeIndex && s.active)}
                            >
                                <div>
                                    <Image
                                        src={card.image}
                                        height={128}
                                        width={128}
                                        className={s.image}
                                        alt={card.title}
                                    />
                                </div>
                            </SwiperSlide>

                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

