import React, { useEffect } from "react";

// Hooks
import useAppData from "../../hooks/useAppData";

const Header = () => {
  const { appData, handleFetchInitData } = useAppData();

  useEffect(() => {
    handleFetchInitData({ userId: "1" });
  }, [handleFetchInitData]);

  return (
    <div>
      <h1>App header</h1>
      <h2>User ID: {appData.data.userId} </h2>
    </div>
  );
};

export default Header;
