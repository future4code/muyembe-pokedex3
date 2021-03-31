import React from "react";
import error from "../../assets/error.png";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { goToHomeScreen } from "../../routes/Coordinator";
import back from "../../assets/back.svg";
import Avatar from "@material-ui/core/Avatar";
import { ContainerPage, ContainerError, Img, Number } from "./styled";

function ErrorPage() {
  const history = useHistory();

  return (
    <ContainerPage>
      <h1>Uh-oh! You seem to be lost.</h1>
      <Button
        size="large"
        variant="outlined"
        startIcon={<Avatar src={back} />}
        onClick={() => goToHomeScreen(history)}
      >
        Return to Home Screen
      </Button>
      <ContainerError>
        <div>
          <Number>4</Number>
        </div>
        <div>
          <Number>
            <Img src={error} alt="psyduck" />
          </Number>
        </div>
        <div>
          <Number>4</Number>
        </div>
      </ContainerError>
    </ContainerPage>
  );
}

export default ErrorPage;
