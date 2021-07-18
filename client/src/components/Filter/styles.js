import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  itemDiv: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
  },
  sliderGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
  },
  filterDiv: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
  },
}));