import "./styles.css"
import {PropTypes} from "prop-types"

const Comments = ({icone, nome, data,comentario}) => {
    return(
        <li className={"comments"}>  
            <div className="first">
                <img src={icone} alt="" />
                <h1> {nome}</h1>
            </div>
            <div>
                <span>{data}</span>
                <p>{comentario}</p>
            </div>

        </li>
    )
}

Comment.propTypes = {
    icone: PropTypes.string,
    nome: PropTypes.string,
    data: PropTypes.string,
    comentario: PropTypes.string,
    id: PropTypes.number
}
export {Comments}