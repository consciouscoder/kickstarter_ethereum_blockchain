import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not runnnig MetaMask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/BT5aNdzdatRBPJwy52wl'
  );

  web3 = new Web3(provider);
}

// MetaMask injection (won't work on Node server - needs window object)
//const web3 = new Web3(window.web3.currentProvider);

export default web3;
