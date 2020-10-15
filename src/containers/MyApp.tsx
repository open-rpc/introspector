import React, { useEffect } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"; //tslint:disable-line
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../themes/theme";
import "./MyApp.css";
import JSONRPCLogger, { IJSONRPCLog } from "../components/logsReact/logsReact";
import useWebRequest from "../hooks/useWebRequest";

const MyApp: React.FC = () => {
  const darkMode = useDarkMode();
  const [newHistory, setHistory] = useWebRequest();
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    if (chrome && chrome.devtools && chrome.devtools.panels) {
      // Create devtools panel for JSONRPCLogger extension
      chrome.devtools.panels.create("JSONRPCLogger",
        "",
        "index.html",
        (panel) => { return; },

      );
    } else {
      const logs: IJSONRPCLog[] = [
        {
          timestamp: new Date(),
          type: "request",
          method: "foo",
          payload: {
            jsonrpc: "2.0",
            method: "foo",
          },
        },
        {
          timestamp: new Date(),
          type: "request",
          method: "foo",
          payload: {
            jsonrpc: "2.0",
            method: "foo",
          },
        },
        {
          timestamp: new Date(),
          type: "request",
          method: "foo",
          payload: {
            jsonrpc: "2.0",
            method: "foo",
          },
        },
        {
          timestamp: new Date(),
          type: "request",
          method: "foo",
          payload: {
            jsonrpc: "2.0",
            method: "foo",
          },
        },
        {
          timestamp: new Date(),
          type: "request",
          method: "foo",
          payload: {
            jsonrpc: "2.0",
            method: "foo",
          },
        },
      ];
      setHistory(logs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // do not render monaco if collapsed -> see docs
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <JSONRPCLogger logs={newHistory} sidebarAlign="right" />
      </div>
    </MuiThemeProvider >
  );
};

export default MyApp;
