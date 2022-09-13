import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <>
      <Link href="/dashboard/admin/products">Product</Link>
      <Link href="/dashboard/admin/products/add">New product</Link>
      <div>Admin</div>
    </>
  );
};

export default Admin;
