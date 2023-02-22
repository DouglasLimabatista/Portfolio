import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faCommentDots, faHome, faPhone, faRectangleList } from '@fortawesome/free-solid-svg-icons'

function Menu(){
    
    return(
      <div className='menu'>
        <p>Portfólio</p>
         <header>
            <ul>    
              <li> 
                <FontAwesomeIcon icon={faHome} />
                <a href="#">Menu</a>
              </li>        
              <li> 
                <FontAwesomeIcon icon={faCommentDots} />
                <a href="#about">Sobre</a>
              </li> 
              <li> 
                <FontAwesomeIcon icon={faRectangleList} />
                <a href="#projects">Projetos</a> 
              </li>  
              <li> 
                <FontAwesomeIcon icon={faBookBookmark} />
                <a href="#skills">Habilidades</a>
              </li> 
              <li> 
                <FontAwesomeIcon icon={faPhone} />
                <a href="#contacts">Contatos</a>
              </li>             
            </ul>
         </header>
      </div>
    )
  }
  export default Menu