"use client";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await query.json();
      setUserInfo(response)
    };
    getData();
  }, []);
  return (
    <>
      {userInfo && userInfo.length && userInfo.map((user:any) => {
        return (
          <>
          <h3> {user.name} </h3>
          
          </>
        )
      })}
    </>
  );
};

export default HomePage;
