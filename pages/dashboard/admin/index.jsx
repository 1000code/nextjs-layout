import Link from "next/link";
import React from "react";
import AdminLayout from "../../../components/layouts/adminLayout";

const Admin = () => {
  return (
    <AdminLayout>
      <Link href="/dashboard/admin/products">Product</Link>
      <Link href="/dashboard/admin/products/add">New product</Link>
      <div>Admin</div>
    </AdminLayout>
  );
};

export default Admin;
