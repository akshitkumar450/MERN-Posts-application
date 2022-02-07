import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const googleFailure = () => {
    alert("google login failed");
  };

  const googleSuccess = async (response) => {
    // console.log(response);
    // console.log(response.profileObj);
    const user = response?.profileObj;
    const token = response?.token;
    dispatch(
      login({
        user,
        token,
      })
    );
    history.push("/posts");
  };
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
          login
        </Button>

        <Link to="/auth/signup" className="block">
          <Button fullWidth>Don't have an account? Sign Up</Button>
        </Link>

        <GoogleLogin
          clientId="341061266972-da2k9reaojd282hvie7d5mi281evedt5.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}>
              Login with google
            </Button>
          )}
          onFailure={googleFailure}
          onSuccess={googleSuccess}
          cookiePolicy={"single_host_origin"}
        />
      </form>
    </Card>
  );
}

export default Login;
