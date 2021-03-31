import React from "react";
import { ContainerBar, Skill, useStyles } from "./styled";
import { Typography } from "@material-ui/core";

function PokeStats(props) {
  const classes = useStyles();
  const width = props.statScore + "%";

  return (
    <div>
      <Typography className={classes.skillName}>{props.statName}</Typography>
      <ContainerBar>
        <Skill width={width}>
          <Typography className={classes.score}>{props.statScore}</Typography>
        </Skill>
      </ContainerBar>
    </div>
  );
}

export default PokeStats;
