import s from './styles.module.scss';
import {TopTable} from "../topTable/TopTable";
import {Container} from "../container/Container";


export const Production = () => {
    return (
        <div className={s.production}>
            <Container>
                <div className={s.inner}>
                    <div className={s.top}>
                        <TopTable text={'Наша специализация'} id={'production'}/>
                        <h1 className={s.title}>
                            Разрабатываем web и мобильные приложения в сферах: финтех, gamedev, e-commerce, ритейл.                        </h1>
                    </div>
                    <div className={s.card}>
                        <div className={s.iconWrap}>
                            <svg width="30" height="30" viewBox="0 0 30 30"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V28.5C0 28.8978 0.158035 29.2794 0.43934 29.5607C0.720644 29.842 1.10218 30 1.5 30H28.5C28.8978 30 29.2794 29.842 29.5607 29.5607C29.842 29.2794 30 28.8978 30 28.5V1.5C30 1.10218 29.842 0.720644 29.5607 0.43934C29.2794 0.158035 28.8978 0 28.5 0ZM13.5 27H3V12H13.5V27ZM27 27H16.5V12H27V27ZM27 9H3V3H27V9Z"
                                />
                            </svg>
                        </div>
                        <h4 className={s.cardTitle}>Веб-разработка</h4>
                        <ul className={s.cardContent}>
                            <li className={s.cardItem}>Индивидуальные CMS, ERP, CRM системы</li>
                            <li className={s.cardItem}>Административные панели</li>
                            <li className={s.cardItem}>3D визуализация</li>
                            <li className={s.cardItem}>E-Commerce продукты</li>
                            <li className={s.cardItem}>Приложения B2C, B2B</li>
                        </ul>
                    </div>
                    <div className={s.card}>
                        <div className={`${s.iconWrap} ${s.mobile}`}>
                            <svg width="24" height="35" viewBox="0 0 24 35"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.3333 0H2.66667C1.95942 0 1.28115 0.287337 0.781049 0.798799C0.280952 1.31026 0 2.00395 0 2.72727V32.2727C0 32.996 0.280952 33.6897 0.781049 34.2012C1.28115 34.7127 1.95942 35 2.66667 35H21.3333C22.0406 35 22.7189 34.7127 23.219 34.2012C23.719 33.6897 24 32.996 24 32.2727V2.72727C24 2.00395 23.719 1.31026 23.219 0.798799C22.7189 0.287337 22.0406 0 21.3333 0ZM2.66667 2.72727H21.3333V24.0909H2.66667V2.72727ZM2.66667 32.2727V26.8182H21.3333V32.2727H2.66667Z"
                                />
                            </svg>

                        </div>
                        <h4 className={s.cardTitle}>Мобильная разработка</h4>
                        <ul className={s.cardContent}>
                            <li className={s.cardItem}>Приложения B2C, B2B</li>
                            <li className={s.cardItem}>Разработка MVP</li>
                            <li className={s.cardItem}>Кроссплатформенные и нативные решения</li>
                            <li className={s.cardItem}>Разработка игр</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}




