import {useMemo, useState} from "react";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import emailjs from "@emailjs/browser";
import s from "../feedback/styles.module.scss";
import Button from "@mui/material/Button";
import Spinner from "../Spinner/Spinner";
import clsx from "clsx";

const FeedbackForm = () => {
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            idea: '',
        },
        onSubmit: values => {
            setLoading(true)
            const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
            const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
            const publicKey = process.env.NEXT_PUBLIC_EMAIL_KEY

            if (!(publicKey && templateId && serviceId)) {
                setLoading(false)
                return
            }

            emailjs.send(serviceId, templateId, {
                name: values.name,
                phone: values.phone,
                idea: values.idea,
                email: values.email
            }, publicKey)
                .then(res => {
                    toast.success('Ваша заявка в обработке!')
                    formik.resetForm()
                })
                .catch(err => toast.error('Ошибка отправки'))
                .finally(() => setLoading(false))
        },
    });

    const isValidate = useMemo<boolean>(() => !!(formik.values.idea && formik.values.name && formik.values.email), [formik.values])

    return (
        <div className={s.formWrapper}>
            <Spinner loading={loading} />
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.inputNameWrap}>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div className={s.inputPhoneWrap}>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Телефон"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                </div>
                <div className={s.inputEmailWrap}>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className={s.TextareaWrap}>
                                    <textarea
                                        id="idea"
                                        name="idea"
                                        placeholder="Идея"
                                        onChange={formik.handleChange}
                                        value={formik.values.idea}
                                    />
                </div>
                <Button
                    variant="contained"
                    type={'submit'}
                    className={clsx(s.submitBtn, !isValidate && s.disabled)}
                    disabled={!isValidate}
                >
                    Отправить
                </Button>
            </form>
        </div>
    )
}

export default FeedbackForm
