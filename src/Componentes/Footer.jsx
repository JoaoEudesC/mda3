const Footer = ()=>{
    return(
        <footer>
            <div id="coluna1">
                <h3 className='Subtitulo-Footer'>MAPA DO SITE +</h3>
                <p className='Information'>Quem somos</p>
                <p className='Information'>Investidores</p>
                <p className='Information'>Notícias</p>
                <p className='Information'>Promoções</p>
                <br />
                <p className='ATP termos' id="condiçoes">ACESSIBILIDADE</p>
            </div>
            <div id="coluna2">
                <h3 className='Subtitulo-Footer'>PRECISA DE SUPORTE?</h3>
                <p className='Information'>Fale conosco</p>
                <p className='Information'>E-mail</p>
                <p className='Information'>Chat Online</p>
                <br />
                <br />
                <br />
                <p className='ATP termos'>TERMOS E CONDIÇÕES</p>
            </div>
            <div id="coluna3">
                <h3 className='Subtitulo-Footer'>SIGA-NOS</h3>
                <button className='icones'><i class="fa-brands fa-instagram fa-3x" id='instagram'></i></button>
                <button className='icones'><i class="fa-brands fa-facebook fa-3x" id='facebook'></i></button>
                <button className='icones'><i class="fa-brands fa-youtube fa-3x" id='youtube'></i></button>
                <br />
                <br />
                <p className='ATP' id="atp">PRIVACIDADE</p>
            </div>
            
        </footer>
    )
}




export default Footer