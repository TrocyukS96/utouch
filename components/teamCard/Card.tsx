import {FC} from "react";
import s from "./styles.module.scss";


interface ICard {
    className?:any
    card:{image:string, title:string,description:string,text:string,quote?:string }
}

export const TeamCard:FC<ICard> = ({card,className})=>{
    const finalClassName = className ? `${s.card} ${className}` : `${s.card}`
    return(
        <div className={finalClassName}>
            <img src={card.image} alt="card-icon"/>
            <h4 className={s.cardTitle}>{card.title}</h4>
            <div className={s.cardDescr}>{card.description}</div>
            {/*<div className={s.cardText}>{card.text}</div>*/}
            <div className={s.cardText}>{card.quote}</div>
        </div>
    )
}
