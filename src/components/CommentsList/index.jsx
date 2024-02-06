import "./styles.css"
import {PropTypes} from "prop-types"
import { Comments } from "../Comments"

const CommentsList = ({commnets}) => {
    return(
        <ul className={"commentlist"}>

            {commnets.map(({icone, nome, data,comentario, id}) =>  
                    <Comments 
                    key={id}
                    icone={icone}
                    nome={nome}
                    data={data}
                    comentario={comentario}
                    />
            
            
            )}
        </ul>
    )
} 

CommentsList.propTypes = {
    commnets: PropTypes.array.isRequired
}


export {CommentsList}