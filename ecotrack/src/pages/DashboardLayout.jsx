import { memo, useCallback, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Container,
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const DashboardLayout = memo(() => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = useCallback((event, newValue) => {
    setActiveTab(newValue);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#2ecc71",
            marginBottom: 3,
          }}
        >
          Dashboard
        </Typography>

        <Card sx={{ boxShadow: 2 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="dashboard navigation"
            >
              <Tab
                icon={<DashboardIcon />}
                iconPosition="start"
                label="Summary"
                component={Link}
                to="summary"
                sx={{
                  textTransform: "none",
                  fontSize: 16,
                }}
              />
              <Tab
                icon={<AnalyticsIcon />}
                iconPosition="start"
                label="Analytics"
                component={Link}
                to="analytics"
                sx={{
                  textTransform: "none",
                  fontSize: 16,
                }}
              />
            </Tabs>
          </Box>

          <CardContent sx={{ paddingY: 4 }}>
            <Outlet />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
});

DashboardLayout.displayName = "DashboardLayout";

export default DashboardLayout;
