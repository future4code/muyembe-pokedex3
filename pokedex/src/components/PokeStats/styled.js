import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  skillName: {
    textAlign: "left",
    color: "black",
  },

  score: {
    textAlign: "right",
    paddingRight: "10px",
    color: "white",
  },

  containerBar: {
    marginBottom: "16px",
  },
}));

export const ContainerBar = styled.div`
  margin-bottom: 16px;
`;

export const Skill = styled.div`
  background-color: #f44336;
  width: ${(props) => props.width};
  height: 20px;
`;
