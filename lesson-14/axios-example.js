import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://demoqa.com",
  validateStatus: () => true,
  // headers: {
  //     Authorization: `Bearer ${process.env.API_TOKEN}`
  // }
});

export async function getBooks() {
  return axiosInstance.request({
    method: "GET",
    url: "/BookStore/v1/Books",
  });
}

// getBooks();

export async function loginUser(credentials) {
  return axiosInstance.post("/Account/v1/Login", credentials);
}

export async function getUserById(id, token) {
  return axiosInstance.request({
    method: "GET",
    url: `/Account/v1/User/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postBooks(userId, token, bookIsbn) {
  return axiosInstance.request({
    method: "POST",
    url: "/BookStore/v1/Books",
    data: {
      userId,
      collectionOfIsbns: [
        {
          isbn: bookIsbn,
        },
      ],
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    validateStatus: () => true,
  });
}

export async function deleteBooks(userId, token, bookIsbn) {
  return axiosInstance.request({
    method: "DELETE",
    url: "/BookStore/v1/Book",
    data: {
      userId,
      isbn: bookIsbn,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    validateStatus: () => true,
  });
}

// postBooks();
