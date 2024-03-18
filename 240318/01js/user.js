const updateProfile = (userData) => {
  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const website = document.querySelector(".website");

  name.innerText = `${userData.name} (@${userData.username})`;
  email.innerText = userData.email;
  email.href = `mailto:${userData.email}`;
  website.innerText = userData.website;
  website.href = `https://${userData.website}`;
  website.target = "_blank";
};

const getUserById = (id) => {
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
};

const loadUserProfile = async () => {
  const userId = localStorage.getItem("userId");
  const userData = await getUserById(userId);
  updateProfile(userData);
};

loadUserProfile();
