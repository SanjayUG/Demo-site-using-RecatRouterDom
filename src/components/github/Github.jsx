// import React, { useState, useEffect } from 'react'
import { useLoaderData, NavLink, Outlet } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/SanjayUG')
  //   .then(responce => responce.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])

  return (
    <div className="text-center m-4 p-4 bg-gray-600 text-white text-3xl">
      (These data are from github api)<br/>
      Me: {data.login}
      <h3>Url: {data.url}</h3>
      <h3>Repos Url: {data.repos_url}</h3>
      <img src={data.avatar_url} alt="my Pic" width={300} />
      <h3>Bio: {data.bio}</h3>
      <h3>Following: {data.following}</h3>
      <h3>Followers: {data.followers}</h3>

      <NavLink to="/user/:id">
        <Outlet />
      </NavLink>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/SanjayUG");
  return responce.json();
};
