import { createContext, useContext, useEffect, useState } from "react";
import { setDefaultHeader } from "../api/apiHandler";

const AuthContext = createContext({
  session: null,
  loading: true,
  signIn: (v) => {},
  signOut: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");

      if (token && username) {
        setSession({
          token,
          username,
        });
        setDefaultHeader(token);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const signIn = async (values) => {
    setSession(values);
    setDefaultHeader(values.token);
    localStorage.setItem("token", values.token);
    localStorage.setItem("username", values.username);
  };

  const signOut = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setSession(null);
    setDefaultHeader("");
  };

  const value = { session, loading, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
