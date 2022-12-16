import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfileDataContext, ProfileTodayDataContext } from "./components/ProfileDataContext";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import HomeScreen from "./pages/HomeScreen/HomeScreenPage";
import RegistryPage from "./pages/Registry/RegistryPage";
import TodaysPage from "./pages/TodaysPage/TodaysPage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  const [loginData, setLoginData] = useState({});
  const [todayHabits, setTodayHabits] = useState([]);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ProfileDataContext.Provider value={loginData}>
          <ProfileTodayDataContext.Provider value={todayHabits}>
            <Routes>
              <Route path="/" element={<HomeScreen setLoginData={setLoginData} />} />
              <Route path="/cadastro" element={<RegistryPage />} />
              <Route path="/habitos" element={<HabitsPage />} />
              <Route path="/hoje" element={<TodaysPage setHabits={setTodayHabits}/>} />
              <Route path="/historico" element={<HistoricPage />} />
            </Routes>
          </ProfileTodayDataContext.Provider>
        </ProfileDataContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;