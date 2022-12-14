import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import HomeScreen from "./pages/HomeScreen/HomeScreenPage";
import RegistryPage from "./pages/Registry/RegistryPage";
import TodaysPage from "./pages/TodaysPage/TodaysPage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/cadastro" element={<RegistryPage/>}/>
        <Route path="/habitos" element={<HabitsPage/>}/>
        <Route path="/hoje" element={<TodaysPage/>}/>
        <Route path="/historico" element={<HistoricPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
