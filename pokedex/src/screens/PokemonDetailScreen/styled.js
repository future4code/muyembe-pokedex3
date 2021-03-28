import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  totalPage: {
    display: "grid",
    gridTemplateRows: "100px auto 80px",
    alignItens: "center",
    minHeight: "100vh",
  },

  pokemonDetailContainer: {
    paddingTop: "20px",
    paddingLeft: "60px",
    paddingRight: "60px",
    textAlign: "center",
    justifyContent: "center",
  },

  detailsScreen: {
    textAlign: "center",
    marginTop: "40px",
  },

  pokeImg: {
    width: "300px",
    height: "300px",
    margin: "16px",
  },

  card: {
    textAlign: "center",
    margin: "16px",
  },
}));
