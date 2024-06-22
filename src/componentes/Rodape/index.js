import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://github.com/pedrosantana-dev'>
                            <img src="/imagens/ig.png" alt="Logo do GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/pedrosantana-dev/'>
                            <img src="/imagens/fb.png" alt="Logo do LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/pedrosantana_dev'>
                            <img src="/imagens/tw.png" alt="Logo do Twitter" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Logo do Organo' />
            </section>
            <section>
                <p>Desenvolvido por Pedro Santana</p>
            </section>
        </footer>
    )
}

export default Rodape