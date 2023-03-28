import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faCode, faCommentDots, faEnvelope, faExternalLinkAlt, faGift, faHome, faLink, faLinkSlash, faMessage, faPhone, faRectangleList, faSmileWink, faUnlink } from '@fortawesome/free-solid-svg-icons'

function Contacts(){
    return(
<div className="contacts" id="contacts">
    <h1>Contatos</h1>
    <div className="contactsIcons">
        <ul>
            <li>
                <FontAwesomeIcon icon={faPhone}/>
                <a target= "_blank"
                href="https://api.whatsapp.com/send?phone=985244605"> Telefone</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faEnvelope}/>
                <a href="mailto:douglasl.batista@hotmail.com"> E-mail</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faCode}/>
                <a target= "_blank"
                href= "https://github.com/DouglasLimabatista"> GitHub</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                <a target= "_blank"
                href="https://www.linkedin.com/in/douglas-de-lima-06635921b/"> Linkedin</a>
            </li>
        </ul>
    </div>
</div>

)
}
export default Contacts