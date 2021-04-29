import s from '../Preloader/Preloader.module.css'


const Preloader = () => {
    return <div className={s.lds}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader