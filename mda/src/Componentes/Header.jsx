import style from '../ComponentesCss/Header.module.css'

const Header = ()=>{
    return(
        <header className={style.header}>
            <nav className={style.nav}>
                <img src="logo.png" alt=""  className={style.img} width={120}/>
                <a className={style.paragrafo} href="#">Home</a>
                <a className={style.paragrafo} href="#">Feature</a>
                <a className={style.paragrafo} href="#">About Us</a>
                <a className={style.paragrafo} href="#">Contact Us</a>
                <input className={style.input} type="submit" value="Sign up" />
            </nav>
        </header>
    )
}


export default Header