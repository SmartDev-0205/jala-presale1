import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { AdminPage } from "./pages/AdminPage"
import { NoPage } from "./pages/NoPage"
import Header from "./components/Header"
const AppRouter = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<LandingPage />}
                    />
                    <Route
                        path="/admin"
                        element={<AdminPage />}
                    />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;