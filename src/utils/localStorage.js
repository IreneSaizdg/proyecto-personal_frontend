// UTIL: Guardar token y user en localStorage
export const saveUserToLocalStorage = ({ token, user }) => {
  if (!token || !user) return;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// UTIL: Obtener token y user de localStorage
export const getUserFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (!token || !user) return null;

  try {
    return {
      token,
      user: JSON.parse(user),
    };
  } catch (error) {
    console.error("Error parsing user from localStorage", error);
    return null;
  }
};

// UTIL: Borrar token y user de localStorage (logout)
export const clearUserFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

