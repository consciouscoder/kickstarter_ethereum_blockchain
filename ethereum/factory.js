import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf3d325E290Fb69Ffe8FEBFA3124dFdeF477A52fE'
);

export default instance;
