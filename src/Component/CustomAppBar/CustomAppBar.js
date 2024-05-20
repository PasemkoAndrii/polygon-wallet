import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const buttons = [
  { name: "main", link: "/" },
  { name: "Create", link: "create" },
  { name: "Dashboard", link: "Dashboard" },
  { name: "Login", link: "login" },
];

export default function CustomAppBar() {
  return (
    <AppBar position="static" sx={{ top: 0 }}>
      <Toolbar>
        {buttons.map((button) => (
          <Button sx={{ color: "white" }} to={button.link} component={Link}>
            {button.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
