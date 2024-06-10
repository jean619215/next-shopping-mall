"use client";

import React from "react";

const HelloPage: React.FC = () => {
  const handleClick = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME}/api/hello`
      );
      const data = await response.json();
      console.log("_____前端:", data); // Do something with the API response data
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Hello</button>
    </div>
  );
};

export default HelloPage;
