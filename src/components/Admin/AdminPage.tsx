import { useEffect, useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FeedbackAdmin from "./Feedback/FeedbackAdmin";
import PriceList from "./Price/PriceList";
import VideoAdmin from "./VideoAdmin/VideoAdmin";

import css from "./AdminPage.module.css";
import { Link } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, minHeight: "600px" }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container">
    <Link to="/" >Повернутись</Link>
          <Box
            sx={{
              maxWidth: { xs: 320, sm: "100%" },
              bgcolor: "background.paper",
            }}
            className={css.box}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs"
            >
              <Tab label="Відгуки" />
              <Tab label="Прайс лист" />
              <Tab label="Відео" />
            </Tabs>
          </Box>
        <CustomTabPanel value={value} index={0}>
          <FeedbackAdmin />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PriceList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <VideoAdmin />
        </CustomTabPanel>
      </div>
    </>
  );
}
