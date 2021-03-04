const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getPostsAPI = () => {
  return fetch(`${BASE_URL}/posts`).then((res) => res.json());
}

export const getPostAPI = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
}

export const getPaginationPostAPI = (page, limit) => {
  return fetch(
    `${BASE_URL}/posts?_page=${page}&_limit=${limit}&_start=0&_end=1`
  ).then((res) => res);
};
