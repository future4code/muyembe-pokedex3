import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  customizeToolbar: {
    minHeight: 36,
  },

  logo: {
    height: "120px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  grow: {
    flexGrow: 1,
  },

  button: {
    width: "160px",
  },
}));
