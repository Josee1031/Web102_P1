
import rickroll from '../images/rickroll-roll.gif'
const card = (props) => {
    return(
        <div className='card'>
            <div className='card_content'>
                <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <button>
                    <a href={rickroll}>View Menu</a>
                    </button>
            </div>


        </div>
    )
}
export default card;