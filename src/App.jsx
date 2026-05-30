import { Routes, Route } from "react-router-dom"
import SiteLayout from "./layouts/SiteLayout"
import Home from "./pages/Home"

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
