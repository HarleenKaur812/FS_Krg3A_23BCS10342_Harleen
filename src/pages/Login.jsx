import { useCallback, memo } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Login = memo(() => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
    navigate("/");
  }, [setIsAuthenticated, navigate]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "100%",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardContent
            sx={{
              padding: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                marginBottom: 3,
                fontWeight: 700,
                color: "#2ecc71",
              }}
            >
              Welcome to EcoTrack
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 3,
                color: "text.secondary",
              }}
            >
              Track your carbon footprint and make a positive impact on the
              environment.
            </Typography>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password"
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleLogin}
              startIcon={<LoginIcon />}
              sx={{
                marginTop: 3,
                backgroundColor: "#2ecc71",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 600,
                padding: "12px",
                "&:hover": {
                  backgroundColor: "#27a35f",
                },
              }}
            >
              Login to EcoTrack
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
});

Login.displayName = "Login";

export default Login;
