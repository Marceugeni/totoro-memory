import './SingleCard.css';

function SingleCard({ card, handleChoice, flipped, isDisabled }) {

    const handleClick = () => {
        if (!isDisabled) {
            handleChoice(card);
        }      
    }

    return ( 
          <div className="card">
            <div className={ flipped ? "flipped" : "" }>
              <img className="front" src={card.src} alt="card front" />
              <img 
                className="back" 
                src="/img/cover.png" 
                alt="card back"
                onClick={handleClick}
              />
            </div>
          </div>
     );
}

export default SingleCard;