import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Trend from "@material-ui/icons/TrendingUp";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Face from "@material-ui/icons/Face";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Why CMUnion?</h2>
          <h5 className={classes.description}>
            CMUnion offers one of a kind CMU-themed digital arts NFTs. We turns
            We turns arts into limited edition tokens on the Ethereum blockchain
            for alumni and students, and allows token tradings.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="CMU Network"
              description="Leverage your CMU network and get to know other talented graduates. Build connections through events, referral, and NFT tradings."
              icon={Face}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Collectible NFTs"
              description="We collaborate with local artists, and proudly delivers limited-edition collectable NFT tokens for all events hold by the CMU alumni engagement team."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Success"
              description="Start building your CMU network today for job referrals, potential start-up partners, and have fun!"
              icon={Trend}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
