import Client from "./api"

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("/auth/login", data)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get("/auth/session")
    return res.data
  } catch (error) {
    throw error
  }
}
