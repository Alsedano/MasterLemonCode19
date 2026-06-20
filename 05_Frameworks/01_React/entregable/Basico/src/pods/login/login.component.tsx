import React from "react";
import { AuthContext } from "./login.provider";
import { Box, Button, Card, CardContent, FormControl, FormLabel, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export const LoginComponent: React.FC = () => {
  const { user, handleChangeUser, validateUser } = React.useContext(AuthContext);

  function keyPress(e) {
    if (e.keyCode == 13) {
      //Enter key
      console.log("key press enter");
      validateUser();
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <PersonIcon
          fontSize="large"
          sx={{
            width: 80,
            height: 80,
          }}
        />
      </CardContent>

      <Box sx={{ display: "flex", flexDirection: "column", marginBottom: "30px" }}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField
            id="username"
            type="text"
            name="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            size="small"
            value={user.name}
            onChange={handleChangeUser("name")}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            size="small"
            value={user.password}
            onChange={handleChangeUser("password")}
            onKeyDown={keyPress}
          />
        </FormControl>
      </Box>

      <Box>
        <Button fullWidth variant="contained" onClick={validateUser}>
          Login
        </Button>
      </Box>
    </Card>
  );
};
