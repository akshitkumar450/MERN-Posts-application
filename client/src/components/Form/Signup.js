import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { JWTsignUp } from "../../redux/actions/userActions";

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(JWTsignUp(email, password, name, history));
  };

  return (
    <Card className="p-2 max-w-md mx-auto mt-20">
      <form
        className="space-y-5"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}>
        <Typography variant="h6" className="text-center">
          Sign Up
        </Typography>

        <TextField
          name="name"
          variant="outlined"
          type="text"
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          name="email"
          variant="outlined"
          type="email"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          name="Password"
          type="password"
          variant="outlined"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>
          signup
        </Button>
        <Link to="/auth/login" className="block">
          <Button size="small" fullWidth>
            already have an account ? Login
          </Button>
        </Link>
      </form>
    </Card>
  );
}

export default Signup;
