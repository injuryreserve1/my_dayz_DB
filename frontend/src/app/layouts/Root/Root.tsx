import type { FC } from "react";
import Navbar from "@/widget/Navbar";
import { Outlet } from 'react-router';
import { Footer } from "@/widget/Footer";
import cls from "./Root.module.css"

const Root: FC = () => {
  return (
    <div className={cls.Root}>
      <header className={cls.Header}>
        <Navbar/>
      </header>
      <main className={cls.Main}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};



export default Root;
