import React from "react";
import styles from './AccountInfo.module.css'
import whale from '../../Whale.png'


const AccountInfo = (props) => {

    return(
        <div class="col-sm-4">
            {props.user === undefined && <h2>Not logged in</h2>}
            {props.user !== undefined && <h2>Wallet:0x...{props.user.substring(36, 42)} </h2>}
            <p ></p>
                <div className={styles.container}>
                  <div>
                    <img src={`https://cryptobroskis.com/cryptobroskis/avaxImg/${props.nftId}.png`} className={styles.nft}></img>
                    </div>
                    <div>

                      <ul className={styles.list}>
                        <li> AVAX:{props.avax.toFixed(3)}</li>
                        <li> WAVAX:{props.wavax.toFixed(3)}</li>
                        <li> Eth:{props.ethBalance.toFixed(3)}</li>
                        <li>CB's Owned: {props.nftCount}</li>
                     </ul>
                    </div>

                </div>
                {props.nftCount > 200 && <img src={whale} className={styles.whale} />}
          </div>
    )
};

export default AccountInfo;
