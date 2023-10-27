import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route  path="/"  element={<Feed/>}/>
            <Route path="/searchResult/:searchQuery" element={<SearchResults/>} />
            <Route  path="/video/:id"  element={<VideoDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
