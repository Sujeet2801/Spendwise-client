import React, { useState, useContext } from "react";
import { DataContext } from ".././context/DataProvider";
import LoginDialog from ".././pages/LoginDialog";
// import Profile from "../../pages/Login/Profile";

function Appbar() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  return (
    <div className="flex justify-between px-28 py-3 bg-white shadow-md">
      {/* Brand Name */}
      <p className="text-3xl font-bold">Spendwise</p>

      {/* Login/Profile Button */}
      {account ? (
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          <Profile account={account} setAccount={setAccount} />
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
          onClick={() => setOpen(true)}
        >
          LOGIN
        </button>
      )}

      {/* Login Dialog */}
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Appbar;
