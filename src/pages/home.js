import { CircleTwoTone } from "@mui/icons-material";
import {
  AppBar,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useEffect, useState } from "react";

import { addUser, loadUser } from "../api/user";
import { Card } from "../components/card";
import { AddUser } from "../components/add-user";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearch] = useState("");
  const [addUserDialog, openAddUser] = useState(false);
  const fetchData = async () => {
    let result = await loadUser();
    console.log(result);
    setUsers(result);
  };
  const getData = () => {
    if (searchQuery) {
      return users.filter(({ user }) =>
        user.email.includes(searchQuery.toLowerCase())
      );
    }
    return users;
  };
  const updateUsers = async (newUser) => {
    const newUsers = await addUser(newUser);
    setUsers(newUsers);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const closeDialog = () => {
    openAddUser(false);
  };
  return (
    <div>
      <AppBar color="inherit" variant="outlined">
        <Container maxWidth="lg">
          <Toolbar sx={{ mt: 4, justifyContent: "space-between" }}>
            <Typography variant="h4">All Users</Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TextField
                autoFocus
                sx={{ m: 1 }}
                margin="normal"
                id="name"
                label="Search by email"
                type="text"
                size="small"
                onChange={(e) => setSearch(e.target.value)}
                value={searchQuery}
                variant="outlined"
              />
              <Button
                style={{ textTransform: "capitalize" }}
                variant="outlined"
                onClick={() => {
                  openAddUser(true);
                }}
              >
               <b> Add user</b>
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ my: 12,textAlign:'left' }} component={Paper} variant="outlined">
          <Typography color="GrayText" sx={{ml:1,mt:1}}><b>Showing {getData().length} users</b></Typography>
        {getData().length > 0 ? (
          getData().map(({ user }, index) => (
            <Card user={user} index={index}></Card>
          ))
        ) : searchQuery ? (
          <Typography>No results found</Typography>
        ) : (
          <CircularProgress variant="indeterminate" />
        )}
      </Container>
      <AddUser
        open={addUserDialog}
        closeDialog={closeDialog}
        addUser={updateUsers}
      ></AddUser>
    </div>
  );
};
export default Home;
