import credentials from "./credentials.json";
export const auth = (username, password) => {
  if (username === credentials.username && password === credentials.password) {
      localStorage.setItem('signedUser',JSON.stringify({user:username}))
    return true;
  } else {
    return false;
  }
};
