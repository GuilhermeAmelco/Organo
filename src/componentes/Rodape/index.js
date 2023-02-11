import './Rodape.css'

const RodapePrincipal = () => {

    return (

        <footer className='footer-principal'>
            <div className='images-logo'>
                <button className='btn'>
                    <a href='https://www.facebook.com'>
                        <img src="/imagens/fb.png" alt='facebook-logo' className='image-regular' />
                    </a>
                </button>
                <button className='btn'>
                    <a href='https://twitter.com'>
                        <img src="/imagens/tw.png" alt='twitter-logo' className='image-regular' />
                    </a>
                </button>
                <button className='btn'>
                    <a href='https://www.instagram.com/guilherme_amelco/'>
                        <img src="/imagens/ig.png" alt='instagram-logo' className='image-regular'/>
                    </a>
                </button>
            </div>
            
            <div className='image-logo-organo-box'>
                <img src="/imagens/logo.png" alt='organo-logo' className='image-regular'/>
            </div>
            
            <div className='credits'>
                <h4>Desenvolvida por Guilherme Amelco</h4>
            </div>
        </footer>
    )
}

export default RodapePrincipal