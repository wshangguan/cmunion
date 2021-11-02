import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

// import team1 from "assets/img/faces/avatar.jpg";
// import team2 from "assets/img/faces/christian.jpg";
// import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>What&apos;s it about?</h2>
      {/* <br />
      <br />
      <br /> */}
      <div>
        <GridContainer>
          <GridItem>
            <iframe
              width="65%"
              height="240%"
              src="https://www.youtube.com/embed/eDeLOEk8j18"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
              {" "}
            </iframe>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
