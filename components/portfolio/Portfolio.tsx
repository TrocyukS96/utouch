import s from './styles.module.scss'
import {Container} from "../container/Container";
import {TopTable} from "../topTable/TopTable";
import {PortfolioCard} from "../portfolioCard/PortfolioCard";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

interface Project {
    name: string
    type: string
    image: string
    goal: string
    solution: string
    time: string
}

import { Pagination } from "swiper";
const portfolioCardsData: Project[] = [
    {
        name: 'Приложение для Смарт-ТВ',
        type: 'Кроссплатформенное приложение',
        image: './../static/portfolio/portfolio1.webp',
        goal: 'разработка MVP приложения для смарт-тв устройств с целью одновременного просмотра  контента со множества девайсов.',
        solution: 'В рамках MVP данного приложения была реализована система с возможностями: подключения телевизоров по ID, управление плейлистами с контентом и добавление нескольких устройств в плейлист.\n',
        time: 'Система была реализована за 3 месяца\n'
    },
    {
        name: 'Система документооборота',
        type: 'Веб-приложение',
        image: './../static/portfolio/portfolio3.webp',
        goal: 'разработка системы для автоматизации и упрощения работы юридической компании.',
        solution: 'Была разработана система, позволяющая создавать шаблоны текстовых документов с возможностью импорта/экспорта в различных форматах, добавления вопросов в шаблон и формы ответов на них, а также создание шаблонных документов с заданными параметрами. В работе использовалась интеграция с Google Docs API.',
        time: 'Система была реализована за 5 месяцев'
    },
    {
        name: 'Каталог недвижимости',
        type: 'Мобильное приложение, веб-приложение',
        image: './../static/portfolio/city4.webp',
        goal: 'разработка мобильного приложения с целью выбора и просмотра понравившегося контента в приложении, в условиях быстрого вывода продукта на рынок.',
        solution: 'У заказчика был запрос на создание мобильного кроссплатформенного приложения - каталога недвижимости для риэлторских агентств. На разработку закладывалось 3 месяца. \n' +
            'В ходе аналитики продукта было принято решение разработать мобильное приложение на кросcплатформенном фреймворке Flutter.\n' +
            'Backend разрабатывался на Nest.js, что позволило сохранить баланс между производительностью продукта и скоростью его разработки\n' +
            'Для разработки Frontend-части использовался фреймворк Next.js, что обеспечило высокую производительность и высокий уровень SEO.\n' +
            '',
        time: 'Система была реализована за 4 месяца'
    },
    {
        name: 'Система контроля наземного транспорта',
        type: 'Веб-приложение',
        image: './../static/portfolio/portfolio2.webp',
        goal: 'разработка автоматизированной системы контроля наземного транспорта',
        solution: 'реализовали возможность получения и отправки данных из 3 сервисов (active directory, wialon, SAP) с целью объединения и контроля под одним интерфейсом всех наземных транспортов компании.',
        time: 'Система была реализована за 4 месяца'
    },
    {
        name: 'Административная панель для иностранного банка',
        type: 'Веб-приложение',
        image: './../static/portfolio/bank.webp',
        goal: 'создание интерфейса для сотрудников банка по управлению счетами и картами клиентов.',
        solution: 'был создан удобный интерфейс административной панели с помощью фреймворков React.js, TypeScript.\n' +
            'Приложение имеет возможность получения актуальной информации о клиентах банка и формирования отчетности о действиях пользователей, а также выгрузки и экспорта документации.\n' +
            'Для безопасности регистрации и авторизации, система использует самописный код.\n',
        time: 'Система была реализована за 3 месяца'
    },
]

export const Portfolio = () => {
    const settings = {
        // focusOnSelect:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '25px',
        dots: true
    };
    return (
        <div className={s.portfolio}>
            <Container>
                <div className={s.inner}>
                    <TopTable text={'Портфолио'} className={s.portfolioTitle} id={'portfolio'}/>
                    <div className={s.cards}>
                        {portfolioCardsData.map((card,index)=>{
                            return(
                                <PortfolioCard
                                    className={s.portfolioCard}
                                    title={card.name}
                                    text={card.type}
                                    goal={card.goal}
                                    solution={card.solution}
                                    key={index}
                                    cardImage={card.image}
                                    time={card.time}
                                />
                            )
                        })}
                    </div>
                </div>
            </Container>
            <div className={s.cardsSlider}>
                <Swiper
                    slidesPerView={'auto'}
                    style={{height:'510px'}}
                    centeredSlides={true}
                    spaceBetween={10}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={s.portfolioSwiper}
                >
                    {portfolioCardsData.map((card, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className={s.portfolioSlide}
                                style={{width:'300px'}}
                            >
                                <PortfolioCard
                                    className={s.portfolioMobCard}
                                    title={card.name}
                                    text={card.type}
                                    goal={card.goal}
                                    solution={card.solution}
                                    key={index}
                                    cardImage={card.image}
                                    time={card.time}
                                />
                            </SwiperSlide>

                        )
                    })}

                </Swiper>

                {/*<CustomLink className={s.portfolioSliderLink}>Показать больше</CustomLink>*/}

            </div>
        </div>
    )
}


