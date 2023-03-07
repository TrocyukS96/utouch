import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from './Spinner.module.scss'
import clsx from "clsx";

interface Props {
    loading: boolean
}

const Spinner = ({ loading }: Props) => {
    return (
        <div className={clsx(styles.wrapper, loading && styles.blur)}>
            <ClipLoader
                loading={loading}
                size={100}
                color={'#0038FF'}
            />
        </div>
    )
}

export default Spinner
