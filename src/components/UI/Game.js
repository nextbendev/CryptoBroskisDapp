import React from "react";
import styles from './Game.css';

const Game = (props) => {

    let playerLeft = props.size - props.lottoEntries.length;
    let futureEntry = ( playerLeft * props.cost);
    let potInt = parseInt(props.pot) * .000000000000000001;
    let totalPot = (potInt + futureEntry);
    

    return(
        <div>
            <h2>Play CryptoBroski Luck!</h2>
            <div class="fakeimg containerGame">
                <div class="details">
                    <h5>Round #{props.round} Info</h5>
                    <p>Cost: {props.cost} AVAX</p>
                    <p> entered:{props.lottoEntries.length}/{props.size}</p>
                </div>
                <div class="prize">
                    <h5>Prize Pool: {totalPot} AVAX</h5>
                    <p>1st {totalPot * .6}</p>
                    <p>2nd {totalPot * .3}</p>
                    <p>3rd {totalPot * .1}</p>
                </div>
            </div>
            {props.lottoEntries.length <= props.size ? (<button onClick={() => props.enter()}>enter</button>
            ) : (
            <p>already entered</p>
            )}
            {props.lottoEntries.length >= props.size && <button onClick={props.pickWinner}>Call winner</button>}


            <h3 class="mt-4">Game Entrants</h3>
            <ul>
                {props.lottoEntries.length > 0 && props.lottoEntries.map(entry => <li key={entry.toString()}>0x...{entry.substring(36, 42)}</li>)}


            </ul>
        </div>
    )
};

export default Game;
