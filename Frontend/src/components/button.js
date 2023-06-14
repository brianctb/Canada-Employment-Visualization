import '../css/button.css';

function button({customkey, message, onClick}){
    return(
    <button className='menu_button' key={customkey} onClick={onClick}>{message}</button>
    );
}

export default button;