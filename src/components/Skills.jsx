import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

function Skills(){
    return(
        <div className="skills" id ="skills" >
            <h1>Habilidades</h1>

                <div class="container">
                 <div class="card">
                 <div class="face face1">
                  <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>React</h3>
                 </div>
                  </div>
                  <div class="face face2">
                  <div class="content">
                  <p> React</p>
              </div>
             </div>
             </div>         
                 <div class="card">
                 <div class="face face1">
                  <div class="content">
                  <FontAwesomeIcon icon={faAdjust} />
                  
                  <h3>Angular</h3>
                 </div>
                  </div>
                  <div class="face face2">
                  <div class="content">
                  <p> Angular</p>
              </div>
             </div>
             </div>             
                 <div class="card">
                 <div class="face face1">
                  <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>JavaScript</h3>
                 </div>
                  </div>
                  <div class="face face2">
                  <div class="content">
                  <p> JavaScript</p>
              </div>
             </div>
             </div>
                 <div class="card">
                 <div class="face face1">
                  <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>TypeScript</h3>
                 </div>
                  </div>
                  <div class="face face2">
                  <div class="content">
                  <p> TypeScript</p>
              </div>
             </div>
             </div>
                 <div class="card">
                 <div class="face face1">
                  <div class="content">
                    
                  <h3>HTML5</h3>
                 </div>
                  </div>
                  <div class="face face2">
                  <div class="content">
                  <p> HTML5</p>
              </div>
             </div>
             </div>            
                 <div class="card">
                 <div class="face face1">
                  <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>CSS3</h3>
                 </div>
                  </div>
                  <div class="face face2">
                  <div class="content">
                  <p> CSS3</p>
              </div>
             </div>
             </div>
             <div class="card">
                 <div class="face face1">
                  <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>CSS3</h3>
                 </div>
                  </div>
                  <div class="face face2">
                  <div class="content">
                  <p> CSS3</p>
              </div>
             </div>
             </div>
              </div>
              </div>
    )
}
export default Skills