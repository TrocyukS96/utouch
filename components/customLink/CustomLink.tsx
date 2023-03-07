import s from './styles.module.scss';
import {FC} from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Iprops {
    className?:string
    children:any
    url?:string
}

export const CustomLink:FC<Iprops> = ({className,children,url})=>{
    const finalClassName = className ? `${s.link} ${className}` : `${s.link}`
    return(
        <a className={finalClassName} onClick={() => {
            document.querySelector(`${url}`)?.scrollIntoView({ behavior: "smooth" });
        }}>
            <span>{children}</span>
            <ArrowForwardIosIcon/>
        </a>
    )
}
