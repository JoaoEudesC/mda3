import Style from '../ComponentesCss/Main.module.css'

const Main = ()=>{
    return(
        <main className={Style.main}>
            <div className={Style.div1}>
                <h3 className={Style.ApresentationText}>Somos um app, voltado para a economia dos nossos clientes em relação as suas tarefas diárias, o intuito é fazer com que voçê consiga economizar o seu dinheiro em determinadas tarefas do cotidiano, como por exemplo: cortar o cabelo, fazer compras, ir a restaurantes e até mesmo ao cinema.</h3>
                <button className={Style.saberMais}>Saber mais</button>
            </div>
            <div className={Style.div2}>
                <img src="saveMoney.svg" alt="" width={600} className="img-fluid" />
            </div>
            <div className={Style.section1}>
                <p className={Style.gold}>GET TO KNOW US</p>
                <h2>Enjoy exclusive discounts</h2>
                <p>Enjoy exclusive discounts at parking lots and garages at or near airports across the country, and book early to ensure you have a guaranteed reserved parking space for your next flight. </p>
                <a href="#" className={Style.link}>Learn More</a>
            </div>
            <div className={Style.section2}>
                <div>
                    <h3 className={Style.h3}>Find Favorites</h3>
                    <p>Excepteur sint occaecat cupidatat non poroident, sunt culpa qui officia deserunt mollit anim.</p>
                </div>
                <div>
                    <h3 className={Style.h3}>Free Easy</h3>
                    <p>Excepteur sint occaecat cupidatat non poroident, sunt culpa qui officia deserunt mollit anim.</p>
                </div>
                <div>
                    <h3 className={Style.h3}>Earn Points</h3>
                    <p>Excepteur sint occaecat cupidatat non poroident, sunt culpa qui officia deserunt mollit anim.</p>
                </div>
            </div>
        </main>
    )
}


export default Main