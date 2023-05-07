import React from "react";
import Dropdown from "./../../../components/dropdown";
import { BsThreeDots } from "react-icons/bs";
import AccountDrawer from "./Drawer";
function AccountMenu(props) {
  const { transparent } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          open={open}
          className={`flex mt-3 items-center text-xl hover:cursor-pointer ${
            transparent
              ? "bg-none text-white hover:bg-none active:bg-none"
              : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={"origin-top-right transition-all duration-300 ease-in-out"}
      classNames={`${transparent ? "top-8" : "top-11"} left-0 w-max`}
      children={
        <div className="z-50 w-max rounded-xl bg-white  py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <div className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
          <AccountDrawer />
          </div>
        </div>
      }
    />
  );
}

export default AccountMenu;
