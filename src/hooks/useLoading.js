import React from "react";

const useLoading = (isLoading, error) => {
  let msg = "";

  isLoading && error === null ? (msg = error) : (msg = "로딩 중...");
  console.log(msg);

  return <div> msg </div>;
};

export default useLoading;
