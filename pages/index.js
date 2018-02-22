import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  static async getInitialProps() {
    // Used on Next.js
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  // async componentDidMount() {
  //   const campaign = await factory.methods.getDeployedCampaigns().call();
  //
  //   console.log(campaign);
  // }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <h3>Open Campaigns</h3>
        {this.renderCampaigns()}
        <Button content="Create Campaign" icon="add" primary />
      </div>
    );
  }
}

export default CampaignIndex;
