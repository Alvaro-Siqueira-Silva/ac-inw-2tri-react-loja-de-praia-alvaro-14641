import Header from "../header"
import Navbarr from "../navbar"
import Footery from "../Footery"
function Contato(){
    return(
        <div>
            <Header/>
            <Navbarr/>
            <main className="txtsobre">
            <h1>
                Contato SURFYXs y PRAIYXs:
            </h1>
            <p>Contate os nossos estilistas e nossos agentes per meio de nosso lindo e-mail:</p>
            <h2>surfy_y_praiyxs@torogodó.com.br</h2>
            <div className='bomba'></div>
            <h1>
                Contato desenvolvedor (Álvaryxs productions):
            </h1>
            <p>Comercial:</p>
            <h2>alvaryxsyxsyxsyxs@buzuafu.com.br</h2>
            <p>Institucional:</p>
            <h2>rm14641@fiap.com.br</h2>
            </main>
            <Footery/>
        </div>
    )
}

export default Contato