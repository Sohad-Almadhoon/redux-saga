import { Button, Container, Input } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/user";
import { addUser } from "../redux/slice/users";
import { UPDATE_USER_BY_ID ,CREATE_USER} from "../redux/types";

const MyForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleChange = (prop) => (event) => {
    dispatch(setUser({ ...user, [prop]: event.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    !user.id
      ? dispatch({
          type: CREATE_USER,
          user: addUser({ ...user, id: nanoid(9) }),
        })
      : dispatch({ type:UPDATE_USER_BY_ID , user});

    dispatch(
      setUser({
        id: 0,
        name: "",
        email: "",
        password: "",
      })
    );
  };
  return (
    <>
      <Container>
        <Input value={user.id} fullWidth disabled />
        <Input
          value={user.name}
          fullWidth
          placeholder="Enter Name"
          onChange={handleChange("name")}
        />
        <Input
          value={user.email}
          fullWidth
          placeholder="Enter Email"
          onChange={handleChange("email")}
        />
        <Input
          value={user.password}
          fullWidth
          placeholder="Enter Password"
          onChange={handleChange("password")}
        />
        <Button variant="contained" fullWidth onClick={(e)=>handleSubmit(e)}>
          Submit
        </Button>
      </Container>
    </>
  );
};

export default MyForm;
