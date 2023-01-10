import React from "react";
import styles from './Navbar.module.css'

const Navbar = (props) => {
    return(
        <div className={styles.topnav}>
            {!props.showEth &&
                (<a class="nav-link active btn" onClick={props.dispEth}>Eth Collection</a>)} 
            {props.showEth &&
                 <a class="nav-link active btn" onClick={props.hideEth}>Hide Eth NFts</a>}
            {!props.showAvax &&
                (<a class="nav-link active btn" onClick={props.dispAvax}>Avax Collection</a>)} 
            {props.showAvax &&
                 <a class="nav-link active btn" onClick={props.hideAvax}>Hide Avax NFts</a>}
            {props.avaxNftBal > 0 && !props.nftDisp &&
            (<a class="nav-link active btn" onClick={props.dispNft}>My Avax Nft's</a>)}
            {props.nftDisp &&
                 <a class="nav-link active btn" onClick={props.hideNft}>Bye Avax Nft's</a>}
            {!props.ethNftDisp && props.EthNftBal > 0 &&
                (<a class="nav-link active btn" onClick={props.dispEthNft}>My Eth Nft's</a>)} 
            {props.ethNftDisp &&
                 <a class="nav-link active btn" onClick={props.hideEthNft}>Bye Eth Nft's</a>}          
         </div>
    )
};

export default Navbar;