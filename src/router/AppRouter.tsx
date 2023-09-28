import {Route, Routes, Navigate} from "react-router-dom";
import { GeneralSummaryPage } from "../tracker/pages/GeneralSummaryPage";
import { UserRegisterPage } from "../tracker/pages/userRegisterPage";

export const AppRouter = () => {
    return (
        <>

        <Routes>
            <Route path="summary" element={<GeneralSummaryPage />} />
            <Route path="userRegister" element={<UserRegisterPage />} />
            <Route path="/" element={<Navigate to="/summary" />} />
        </Routes>
        
        </>
    )
}