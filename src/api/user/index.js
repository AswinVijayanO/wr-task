export const loadUser = async () => {
  let savedUser = await localStorage.getItem("allUsers");
  console.log(savedUser);
  if (!savedUser) {
    let resp = await fetch("https://randomuser.me/api/0.8/?results=20");
    let loadedUsers = await resp.json();
    localStorage.setItem("allUsers", JSON.stringify(loadedUsers.results));
    return loadedUsers.results;
  } else {
    return JSON.parse(savedUser);
  }
};
export const addUser = async (newUser) => {
  let savedUser = await localStorage.getItem("allUsers");
  savedUser = JSON.parse(savedUser)
  savedUser = [{user:newUser},...savedUser]
  localStorage.setItem("allUsers", JSON.stringify(savedUser));
  return savedUser;
};
