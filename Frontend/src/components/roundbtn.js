import '../css/general.css'

function Roundbtn({img, onClick, msg}){
    return(
        <button className="roundbtn" onClick={onClick}>
            <img src={img} alt={msg} />
        </button>
    );
}

export default Roundbtn;