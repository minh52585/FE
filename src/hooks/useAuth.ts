// hooks/useAuth.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
    const navigate = useNavigate();

    const login = (newToken: string) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
        navigate("/dashboard"); // hoặc route khác
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/login");
    };

    return {
        token,
        isAuthenticated: !!token,
        login,
        logout,
    };
};

export default useAuth;
