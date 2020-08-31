import green from "@material-ui/core/colors/green";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      secondary: green,
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
