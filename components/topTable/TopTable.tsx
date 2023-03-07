import s from './styles.module.scss';
import {FC} from "react";
interface Iprops {
    text:string
    className?:string
    id?:string
}
export const TopTable:FC<Iprops> =({text,className,id})=>{
    const finalClassName = className ? `${s.table} ${className}` : `${s.table}`
    return (
        <div id={id} className={finalClassName}>{text}</div>
    )
}