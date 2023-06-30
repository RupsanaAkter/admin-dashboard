
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/Global/Sidebar";
import Topbar from './scenes/Global/Topbar';
import Dashboard from "./scenes/Dashboard/Dashboard";
import Team from './scenes/Team/Team';
import Contacts from './scenes/Contacts/Contacts';
import Invoices from './scenes/Invoices/Invoices';
import Bar from "./scenes/Bar/Bar";
import Line from "./scenes/Line/Line";
import FAQ from "./scenes/FAQ/FAQ";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/bar" element={<Bar />} />
              {/* <Route path="/pie" element={<Pie />} /> */}
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;