import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfileDataContext } from "./components/ProfileDataContext";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import HomeScreen from "./pages/HomeScreen/HomeScreenPage";
import RegistryPage from "./pages/Registry/RegistryPage";
import TodaysPage from "./pages/TodaysPage/TodaysPage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  const [loginData, setLoginData] = useState({});
  const [ habits, setHabits] = useState([]);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ProfileDataContext.Provider value={loginData}>
          <Routes>
            <Route path="/" element={<HomeScreen setLoginData={setLoginData} />} />
            <Route path="/cadastro" element={<RegistryPage />} />
            <Route path="/habitos" element={<HabitsPage habits={habits} setHabits={setHabits}/>} />
            <Route path="/hoje" element={<TodaysPage />} />
            <Route path="/historico" element={<HistoricPage />} />
          </Routes>
        </ProfileDataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;