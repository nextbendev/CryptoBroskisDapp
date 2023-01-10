import Web3 from 'web3';
let url = window.ethereum;

let selectedAccount;

let isInitialized = false;
localStorage.setItem('Initialized', isInitialized);

export const init = async () => {
    console.log('where we at')
    if(typeof url !== 'undefined') {
      url
        .request({method: 'eth_requestAccounts'})
        .then(accounts => {
            selectedAccount = accounts[0];
            localStorage.setItem('userWallet', selectedAccount);
        console.log(`web3 Selected account is ${selectedAccount}`)
      }).catch(err => {
        console.log(err);
      });
      window.ethereum.on('accountsChanged', function (accounts) {
        selectedAccount = accounts[0];      
        console.log(`web3 Selected account changed to ${selectedAccount}`);
        localStorage.setItem('userWallet', selectedAccount);
      });
    }
    isInitialized = true;
    localStorage.setItem('Initialized', isInitialized);
};

