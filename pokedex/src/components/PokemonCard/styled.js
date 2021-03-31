import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  pokemonImg: {
    height: "200px",
    width: "200px",
    margin: "16px",
  },

  button: {
    margin: "12px",
    //     '&:hover': {
    //         backgroundColor: "#e76f51",
    //         color: '#FFF',
    //   }
  },

  pokeCardContent: {
    textAlign: "center",
    margin: "32px",
  },
}));
