import { Outlet } from "react-router-dom";
import TopBar from "components/TopBar";

export default function Dashboard() {
  return (
    <div
      className={
        "w-screen h-screen " +
        "bg-slate-50 overflow-x-hidden " +
        "flex flex-col " +
        "items-center " +
        "dark:bg-zinc-700"
      }
    >
      <TopBar />

      <Outlet />
    </div>
  );
}
