import {Container} from '../container/Container';
import s from './styles.module.scss';
import Button from "@mui/material/Button";
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import Input from '@mui/material/Input';
import {Divider} from "@mui/material";
import {media} from "../../consts";
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const year = new Date().getFullYear()

export const Feedback = () => {

    return (
        <div className={s.feedback} id={'feedback'}>

            <Container>
                <div className={s.bgImage}>
                    <img src="./../static/feedbackImg.webp" alt="background image"/>
                </div>
                <div className={s.inner}>
                    <div className={s.phone1}></div>
                    <div className={s.phone2}></div>
                    <div className={s.phone3}></div>

                    <div className={s.top}>
                        <div className={s.support}>
                            <h4 className={s.title}>
                                У вас остались вопросы?
                            </h4>
                            <p className={s.text}>Задайте их нам лично!</p>
                            <div className={s.links}>
                                <a>{media.email}</a>
                                {/*<a href={`tel:${media.phone}`}>+7 (913) 102-83-73</a>*/}
                            </div>
                            <div className={s.social}>
                                {/*<a href="https://vk.com/utouch_it" className={s.socialLink} target={"_blank"}>*/}
                                    <a href={media.vk} target={'_blank'} className={s.socialLink} rel={'noreferrer'}>
                                        <div className={s.linkInner}>
                                            <svg className={s.linkIcon} width="18" height="12" viewBox="0 0 18 12"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M17.5875 1.461C17.712 1.0515 17.5875 0.75 16.9913 0.75H15.0225C14.5215 0.75 14.2905 1.01025 14.1652 1.2975C14.1652 1.2975 13.164 3.6945 11.7458 5.2515C11.2867 5.703 11.0782 5.84625 10.8278 5.84625C10.7025 5.84625 10.5142 5.703 10.5142 5.29275V1.461C10.5142 0.969 10.3763 0.75 9.95925 0.75H6.86325C6.5505 0.75 6.36225 0.978 6.36225 1.19475C6.36225 1.6605 7.07175 1.7685 7.1445 3.0795V5.928C7.1445 6.55275 7.02975 6.666 6.77925 6.666C6.11175 6.666 4.488 4.25775 3.52425 1.50225C3.3375 0.966 3.1485 0.75 2.64525 0.75H0.675C0.1125 0.75 0 1.01025 0 1.2975C0 1.809 0.6675 4.35 3.10875 7.71075C4.73625 10.0057 7.0275 11.25 9.11475 11.25C10.3665 11.25 10.521 10.974 10.521 10.4977V8.763C10.521 8.21025 10.6395 8.1 11.0363 8.1C11.3287 8.1 11.829 8.244 12.9975 9.35025C14.3325 10.662 14.5523 11.25 15.3038 11.25H17.2725C17.835 11.25 18.117 10.974 17.955 10.428C17.7765 9.885 17.139 9.09675 16.2938 8.1615C15.8348 7.629 15.1463 7.05525 14.937 6.768C14.6453 6.39975 14.7285 6.2355 14.937 5.90775C14.937 5.90775 17.337 2.58825 17.5868 1.461H17.5875Z"
                                                />
                                            </svg>
                                            <span className={s.linkText}>
                                            Перейти в группу ВКонтакте
                                        </span>
                                        </div>
                                    </a>
                                    <a href={media.tgLink} rel={'noreferrer'} target={'_blank'} className={s.socialLink}>
                                    <div className={s.linkInner}>
                                        <svg className={s.linkIcon} width="16" height="14" viewBox="0 0 16 14"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.4988 0.787752L1.20125 5.9155C0.293752 6.28 0.299002 6.78625 1.03475 7.012L4.44875 8.077L12.3478 3.09325C12.7213 2.866 13.0625 2.98825 12.782 3.23725L6.38225 9.013H6.38075L6.38225 9.01375L6.14675 12.5328C6.49175 12.5328 6.644 12.3745 6.8375 12.1878L8.49575 10.5753L11.945 13.123C12.581 13.4733 13.0378 13.2933 13.196 12.5343L15.4603 1.86325C15.692 0.934002 15.1055 0.513252 14.4988 0.787752Z"
                                            />
                                        </svg>
                                        <span className={s.linkText}>Написать вTelegram</span>
                                    </div>
                                    </a>
                            </div>
                        </div>
                        <div className={s.report}>
                            <h4 className={s.title}>Оставьте заявку</h4>
                            <p className={s.text}>Расскажите о вашей идее, а мы поможем и проконсусльтируем.</p>

                            <FeedbackForm />
                        </div>
                    </div>
                    <footer className={s.footer}>
                        <Divider className={s.divider}/>
                        <p className={s.footerText}>Политика конфиденциальности</p>
                        <p className={s.footerMark}>© UTOUCH {year}</p>
                    </footer>
                </div>
            </Container>
        </div>
    )
}
