import img from "./assets/imgabout.jpg"

function Panel(){
    
    return(
      <div className="painel">      
          <h2>
            Ajudando empresas a construírem produtos digitais de forma moderna e de alta qualidade.
          </h2>        
        <img src={img}/>     
      </div>
    )
  }
  export default Panel