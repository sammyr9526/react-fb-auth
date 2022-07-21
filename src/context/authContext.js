import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth"; // funcion de firebase para el reg con correo
import { auth } from "../firebase"; //usado por createUserW...

// createContext nos devuelve un context
//context nos permite crear un proveedor y devolver objetos
//lo usaremos para tener la autenticacion en todos los compenentes
export const authContext = createContext();

//useAuth nos permite usar  context en los componentes sin la necesidad de exportar useContent ni a context
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) =>
    await createUserWithEmailAndPassword(auth, email, password);
  //usamos el auth para validar el email con password

  const login = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  //onAuthStateChanged keep users information like number,img,etc until the user logout
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // todo lo que contenga authContext.Provider sus hijos lo tendran un ejemplo user
  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
    //aqui se le pasa un value en forma de objeto con {user}
  );
}
