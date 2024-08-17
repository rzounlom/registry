import { FC } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
