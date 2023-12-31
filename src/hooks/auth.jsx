import { createContext, useContext, useEffect, useState  } from "react";
import { api } from "../services/api";

const AuthContext = createContext({})

function AuthProvider({children}) {
  const [data, setData] = useState({})
  const [title, setTitle] = useState("")

  async function signIn({email, password}) {
    try {
      const response = await api.post("/session", {email, password})
      const { user, token } = response.data
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({user, token})

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")
    setData({})
  }

  async function updateProfile({user, avatarFile}) {
    try {
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      const { password, oldpassword, ...userData } = user
      await api.put("/users", user)

      localStorage.setItem("@rocketmovies:user", JSON.stringify(userData))
      setData({user: userData, token: data.token})
      alert("Perfil atualizado")
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user")
    const token = localStorage.getItem("@rocketmovies:token")

    if(user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })

    }
  }, [])

  return(
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      setTitle,
      title,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export {AuthProvider, useAuth}