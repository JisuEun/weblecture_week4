import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<MainPage/>}/>
        <Route path="post-write" element={<PostWritePage/>}/>
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="post-write/:postId" element={<PostWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
