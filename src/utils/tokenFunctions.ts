export const getToken = () => localStorage.getItem("accessToken");

export const saveToken = (token: string) =>
  localStorage.setItem("accessToken", token);

export const deleteToken = () => localStorage.removeItem("accessToken");
