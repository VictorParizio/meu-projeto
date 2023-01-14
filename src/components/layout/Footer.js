import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <ul className='social_list'>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    )
}

export default Footer