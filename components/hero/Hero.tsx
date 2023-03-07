import s from './styles.module.scss';

import Image from '../image';
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Divider} from "@mui/material";
import {CustomLink} from "../customLink/CustomLink";
import {Container} from "../container/Container";

export const Hero = () => {
    return (
        <div className={s.hero} id={'hero'}>
            <Divider className={s.divider}/>
            <div className={s.bgPhone}>
                <div className={s.bgPhone1}/>
                <div className={s.bgPhone2}/>
                <div className={s.bgPhone3}/>
            </div>
            <div className={s.bgImage}>
                <img src={"./../static/heroBG.webp"} alt="background-image"/>
            </div>
            <Container>
                <div className={s.inner}>
                    <div className={s.bgLikes}>
                        <div className={s.cloud}>
                            <div className={s.likesImg}>
                                <Image
                                    src="/likes.png"
                                    height={66}
                                    width={144}
                                    alt={'likes image'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={s.top}>
                        <h1 className={s.title}>Развитие бизнеса в <br/>
                            несколько кликов</h1>
                        <p className={s.text}>Создаем digital-продукты с целью получения эффективного результата для вас
                            и вашей деятельности.
                        </p>
                        <p className={s.text}>Реализуем идеи, предлагая оптимальные пути их улучшения.</p>
                    </div>
                    <ul className={s.progressList}>
                        <li className={s.progressItem}>
                            <span>20+</span>
                            <p>Выпущенных на рынок проектов, начиная с 2021 г.</p>
                        </li>
                        <li className={s.progressItem}>
                            <span>2 дня</span>
                            <p>Нам требуется, чтобы первично оценить ваш проект</p>
                        </li>
                        <li className={s.progressItem}>
                            <span>100%</span>
                            <p>Техническая поддержка вашего продукта после ввода в эксплуатацию</p>
                        </li>
                    </ul>
                    <div className={s.bottom}>
                        <Button
                            variant={'contained'}
                            className={s.messageBtn}
                            // type={'link'}
                            onClick={() => {
                                document.querySelector('#feedback')?.scrollIntoView({behavior: "smooth"})
                            }}
                        >
                            <svg width="32" height="28" viewBox="0 0 38 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.875 17C11.875 17.6299 11.6248 18.234 11.1794 18.6794C10.734 19.1248 10.1299 19.375 9.5 19.375C8.87011 19.375 8.26602 19.1248 7.82062 18.6794C7.37522 18.234 7.125 17.6299 7.125 17C7.125 16.3701 7.37522 15.766 7.82062 15.3206C8.26602 14.8752 8.87011 14.625 9.5 14.625C10.1299 14.625 10.734 14.8752 11.1794 15.3206C11.6248 15.766 11.875 16.3701 11.875 17ZM21.375 17C21.375 17.6299 21.1248 18.234 20.6794 18.6794C20.234 19.1248 19.6299 19.375 19 19.375C18.3701 19.375 17.766 19.1248 17.3206 18.6794C16.8752 18.234 16.625 17.6299 16.625 17C16.625 16.3701 16.8752 15.766 17.3206 15.3206C17.766 14.8752 18.3701 14.625 19 14.625C19.6299 14.625 20.234 14.8752 20.6794 15.3206C21.1248 15.766 21.375 16.3701 21.375 17ZM28.5 19.375C29.1299 19.375 29.734 19.1248 30.1794 18.6794C30.6248 18.234 30.875 17.6299 30.875 17C30.875 16.3701 30.6248 15.766 30.1794 15.3206C29.734 14.8752 29.1299 14.625 28.5 14.625C27.8701 14.625 27.266 14.8752 26.8206 15.3206C26.3752 15.766 26.125 16.3701 26.125 17C26.125 17.6299 26.3752 18.234 26.8206 18.6794C27.266 19.1248 27.8701 19.375 28.5 19.375Z"
                                    fill="white"/>
                                <path
                                    d="M5.14187 35.5321L5.18937 35.5226C9.53562 34.6605 12.1909 33.5229 13.4259 32.8983C15.2441 33.3832 17.1182 33.6275 19 33.625C29.4928 33.625 38 26.1817 38 17C38 7.81825 29.4928 0.375 19 0.375C8.50725 0.375 0 7.81825 0 17C0 21.18 1.76463 25.0038 4.67875 27.925C4.47487 29.8015 4.05733 31.6485 3.43425 33.4303L3.42712 33.4564C3.25005 33.9667 3.05679 34.4712 2.84763 34.9692C2.66 35.411 3.02338 35.905 3.496 35.829C4.0462 35.739 4.59489 35.64 5.14187 35.5321ZM7.04187 28.1506C7.07514 27.8029 7.03131 27.4522 6.91349 27.1233C6.79567 26.7945 6.60677 26.4957 6.36025 26.2483C3.84275 23.7213 2.375 20.4865 2.375 17C2.375 9.419 9.5095 2.75 19 2.75C28.4905 2.75 35.625 9.419 35.625 17C35.625 24.5834 28.4905 31.25 19 31.25C17.3259 31.2524 15.6586 31.0353 14.041 30.604C13.4757 30.4525 12.8744 30.5151 12.3524 30.7798C11.4333 31.2453 9.40738 32.1335 6.09662 32.9006C6.55851 31.3501 6.87496 29.7599 7.04187 28.1506Z"
                                    fill="white"/>
                            </svg>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
