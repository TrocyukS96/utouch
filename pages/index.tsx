import type {NextPage} from 'next'
import Head from 'next/head'
import s from './styles.module.scss';
import {useEffect, useState} from 'react';
import {Hero} from "../components/hero/Hero";
import {Production} from "../components/production/Production";
import {Benefits} from "../components/benefits/Benefits";
import {Technologies} from "../components/technologies/Technologies";
import {Team} from "../components/team/Team";
import {Portfolio} from "../components/portfolio/Portfolio";
import {Feedback} from "../components/feedback/Feedback";
import {Header} from "../components/header/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import clsx from "clsx";

const Home: NextPage = () => {
    const [active, setActive]=useState(false)

    useEffect(() => {
        const body = document.body

        if (active) {
            body.classList.add(s.overflowHidden)
        } else {
            body.classList.remove(s.overflowHidden)
        }
    }, [active])

    return (
        <>
            <Head>
                <title>Utouch. Создаем IT продукты для бизнеса и людей</title>
                <meta name="description" content="Создаем digital-продукты с целью получения эффективного результата для вас и вашей деятельности.Реализуем идеи, предлагая оптимальные пути их улучшения"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta property="og:image"  content="/static/icon.png" />
                <link rel="shortcut icon" href="/static/icon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Manrope:wght@300;400;500;600;700;800&display=swap"
                            rel="stylesheet"/>
            </Head>
            <div className={clsx(s.wrapper, active && s.overflowHidden)}>
                <Header
                    active={active}
                    setActive={setActive}
                />
                <Hero/>
                <Production/>
                <Benefits/>
                <Technologies/>
                <Portfolio/>
                <Feedback/>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home
