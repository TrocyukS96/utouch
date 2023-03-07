import {Container} from '../container/Container';
import s from './styles.module.scss';
import {TopTable} from "../topTable/TopTable";
import Image from '../image';

const cardData = [
    {
        image: '/Round.png',
        title: 'Только специалисты. Никого больше',
        text: 'В нашей команде все сотрудники имеют большой опыт работы  в нетривиальных задачах и проектах.'
    },
    {
        image: '/Puzzle.png',
        title: 'Гибкость в решении',
        text: 'Применяем нестандартные пути решения сложных задач для достижения необходимого результата.'
    },
    {
        image: '/Numbers.png',
        title: 'Time2Market',
        text: 'Мы готовы предложить лучшие решения для быстрого и качественного выхода  продукта на рынок.'
    },
    {
        image: '/Clock.png',
        title: 'Время - это важно',
        text: 'Эффективно используем этот ключевой ресурс в работе с нашими клиентами и специалистами.'
    },
    {
        image: '/UserMale.png',
        title: 'Пользователи - наши друзья',
        text: 'Вашим продуктом будут пользоваться люди, и наша задача – сделать пользование продуктом простым и удобным.'
    },
]

export const Benefits = () => {
    return (
        <div className={s.benefits}>
            <Container>
                <TopTable text={'Наши ценности'} className={s.benefitsTitle} id={'benefits'}/>
                <div className={s.inner}>
                    {
                        cardData.map((card, index) => {
                            return (
                                <div className={s.card} key={index}>
                                    <Image
                                        width={34}
                                        height={34}
                                        src={card.image}
                                        alt="card-icon"
                                    />
                                    <h3 className={s.cardTitle}>{card.title}</h3>
                                    <p className={s.cardText}>{card.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}
