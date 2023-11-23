import React from "react";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchSingleData } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

const SingleUser = async ({ params }) => {
  const showPassword = false;
  const { data } = await fetchSingleData("User", params?.id);
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={data?.image ?? "/noavatar.png"} alt="" fill />
        </div>
        Rahul R
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser}  onChange={updateUser} className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" value={data?.username} />
          <label>Email</label>
          <input type="email" name="email" value={data?.email} />
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={data?.password}
          />
          <label>Phone</label>
          <input type="number" name="phone" value={data?.phone} />
          <label>Address</label>
          <textarea type="text" name="address" value={data?.address} />
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={data?.isAdmin} selected>
              {data?.isAdmin ? "Yes" : "No"}
            </option>
            <option value={!data?.isAdmin}>
              {!data?.isAdmin ? "Yes" : "No"}
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={data?.isActive}>
              {data?.isActive ? "Yes" : "No"}
            </option>
            <option value={!data?.isActive}>
              {!data?.isActive ? "Yes" : "No"}
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
