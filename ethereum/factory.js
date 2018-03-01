import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xF510833E62dB99f5A69d21287cD517C92B61D25C'
);

export default instance;
