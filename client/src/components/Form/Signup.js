import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <Card className="p-2 max-w-md mx-auto mt-20">
      <form
        className="space-y-5"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}>
        <Typography variant="h6" className="text-center">
          Login
        </Typography>

        <TextField
          name="name"
          variant="outlined"
          type="text"
          label="name"
          value={name}
          onChang={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          name="email"
          variant="outlined"
          type="email"
          label="email"
          value={email}
          onChang={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          name="Password"
          type="password"
          variant="outlined"
          label="password"
          value={password}
          onChang={(e) => setPassword(e.target.value)}
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
