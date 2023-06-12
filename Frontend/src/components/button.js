import '../css/button.css';

function button({message, onClick}){
    return(
    <button className='menu_button' onClick={onClick}>{message}</button>
    )
}

export default button;