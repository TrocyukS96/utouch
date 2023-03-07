
import s from './styles.module.scss';
import {FC} from "react";
interface Iprops {
  children:any
}
export const Container:FC<Iprops> =({children})=>{
    return (
        <div className={s.container}>{children}</div>
    )
}