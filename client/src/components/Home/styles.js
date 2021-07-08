import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "10px",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  gridContainer: {
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  root: {
    flexGrow: 1,
  },
}));