import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
//
// a. Fields:
// i. Gender
// ii. Name: {
// "title"
// "first”
// "last"
// }
// iii. Email
// iv. Username
// v. Password
// vi. DOB
// vii. Phone
//
export const AddUser = ({ open, closeDialog, addUser }) => {
  const [formdata, updateForm] = useState({
    gender: "",
    title: "",
    first: "",
    last: "",
    username: "",
    password: "",
    phone: "",
    dob: "",
  });
  const onChange = (e) => {
    updateForm((formdata) => ({
      ...formdata,
      [e.target.name]: e.target.value,
    }));
  };
  const submit = () => {
    let finalData = { ...formdata };
    delete finalData.title;
    delete finalData.first;
    delete finalData.last;
    finalData.name = {
      title: formdata.title,
      first: formdata.first,
      last: formdata.last,
    };
    addUser(finalData);
  };
  return (
    <Dialog open={open} onClose={closeDialog}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ ml: 1, my: 1 }}>
          Enter the following details
        </DialogContentText>
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.title}
          margin="dense"
          name="title"
          label="Title"
          type="text"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.first}
          margin="dense"
          name="first"
          label="First"
          type="text"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.last}
          margin="dense"
          name="last"
          label="Last"
          type="text"
          variant="outlined"
        />
        <Divider/>

        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.gender}
          margin="dense"
          name="gender"
          label="Gender"
          type="text"
          variant="outlined"
        />
        <Divider/>
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.email}
          margin="dense"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
        />
          <Divider/>
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.username}
          margin="dense"
          name="username"
          label="username"
          type="text"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.password}
          margin="dense"
          name="password"
          label="password"
          type="text"
          variant="outlined"
        />
          <Divider/>
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.dob}
          margin="dense"
          name="dob"
          label="DOB"
          type="text"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ ml: 1, my: 1 }}
          onChange={onChange}
          value={formdata.phone}
          margin="dense"
          name="phone"
          label="Phone"
          type="text"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button onClick={submit}>Add User</Button>
      </DialogActions>
    </Dialog>
  );
};
