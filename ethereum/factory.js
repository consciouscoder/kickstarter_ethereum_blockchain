import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0a8a50684701Aa21223ae83D8B05718DAef99B1e'
);

export default instance;
