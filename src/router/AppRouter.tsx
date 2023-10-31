import {Route, Routes, Navigate} from "react-router-dom";
import { GeneralSummaryPage } from "../tracker/pages/GeneralSummaryPage";
import { UserRegisterPage } from "../tracker/pages/UserRegisterPage";
import { UsersPage } from "../tracker/pages/UsersPage";
import { CourseRegisterPage } from "../tracker/pages/CourseRegisterPage";

export const AppRouter = () => {
    return (
        <>

        <Routes>
            <Route path="summary" element={<GeneralSummaryPage />} />
            <Route path="userRegister" element={<UserRegisterPage />} />
            <Route path="courseRegister" element={<CourseRegisterPage />} />
            <Route path="usersPage" element={<UsersPage />} />
            <Route path="/" element={<Navigate to="/summary" />} />
        </Routes>
        
        </>
    )
}