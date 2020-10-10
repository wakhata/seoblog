import fetch from "isomorphic-fetch";
import { API } from "../config";
import queryString from "query-string";
import { isAuth, handleResponse } from "./auth";

export const createMember = (member, token) => {
  return fetch(`${API}/member`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: member,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listMembersWithCategoriesAndTags = (skip, limit) => {
  const data = {
    limit,
    skip,
  };
  return fetch(`${API}/members-categories-tags`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleMember = (slug) => {
  return fetch(`${API}/member/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const relatedMember = (member) => {
  return fetch(`${API}/members/related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const memberSearch = (params) => {
  let query = queryString.stringify(params);
  return fetch(`${API}/members/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const list = () => {
  return fetch(`${API}/members`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeMember = (slug, token) => {
  let deleteMemberEndpoint;
  if (isAuth() && isAuth().role === 1) {
    deleteMemberEndpoint = `${API}/member/${slug}`;
  } else if (isAuth() && isAuth().role === 0) {
    deleteMemberEndpoint = `${API}/user/member/${slug}`;
  }

  return fetch(`${deleteMemberEndpoint}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateMember = (member, token, slug) => {
  let updateMemberEndpoint;
  if (isAuth() && isAuth().role === 1) {
    updateMemberEndpoint = `${API}/member/${slug}`;
  } else if (isAuth() && isAuth().role === 0) {
    updateMemberEndpoint = `${API}/user/member/${slug}`;
  }
  return fetch(`${updateMemberEndpoint}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: member,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
