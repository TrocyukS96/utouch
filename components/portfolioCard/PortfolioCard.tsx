import {FC, useState} from "react";
import s from "./styles.module.scss";
import {CustomLink} from "../customLink/CustomLink";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface IPortfolioCard {
    className?: any
    title: string
    text: string
    goal?: string
    solution?: string
    url?: string,
    cardImage?: string
    time: string
}

export const PortfolioCard: FC<IPortfolioCard> = ({title, text, className, url, goal, solution, cardImage, time}) => {
    const finalClassName = className ? `${s.card} ${className}` : `${s.card}`
    const [flip, setFlip] = useState(false)
    return (
        <div className={finalClassName}>

            <div className={s.flipContainer} onClick={() => setFlip(!flip)}>
                <div className={s.flipper} style={flip ? {transform: 'rotateY(180deg)'} : {transform: 'rotateY(0deg)'}}>
                    <div className={s.front}>
                        <div className={s.content}>
                            <h4 className={s.cardTitle}>{title}</h4>
                            <p className={s.cardText}>{text}</p>
                            <div className={s.cardImgBlock}>
                                <img className={s.image} src={cardImage} alt="cardImage"/>
                            </div>

                        </div>
                        <CustomLink className={s.portfolioLink}>Подробнее</CustomLink>
                    </div>
                    <div className={s.back}>
                        <div className={s.content}>
                            <div className={s.description}>
                                <h4 className={s.cardTitle}>{title}</h4>
                                <p className={s.cardText}><b>{text}</b></p>
                                <p className={s.hoverText}><b>Цели и задачи:</b> {goal}</p>
                                <p className={s.hoverText}><b>Решение:</b> {solution}</p>
                                <p className={s.hoverText}>{time}</p>
                            </div>
                            <div className={s.more}>
                                Больше информации есть в desktop версии сайта
                            </div>
                            <div className={s.cardImgBlock}>
                                <img src={cardImage} alt="cardImage"/>
                            </div>
                            <div className={s.blurBg}></div>
                        </div>
                        <a className={s.portfolioLink} onClick={() => setFlip(!flip)}>
                            <ArrowForwardIosIcon style={{transform:'rotate(180deg)'}}/>
                            <span>Назад</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
