"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { Product, User } from "./models";
import bcrypt from "bcrypt";

export const createUser = async (payload) => {
  try {
    connectToDB();
    payload = Object.fromEntries(payload);
    payload.password = await bcrypt.hash(payload?.password, 10);
    await User.create(payload);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create data!");
  } finally {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};

export const updateUser = async (payload) => {
  try {
    connectToDB();
    payload = Object.fromEntries(payload);
    console.log(payload)
    Object.keys(payload).forEach(payload[key] === "" || undefined) && delete payload[key]
    console.log(payload)
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update data!");
  } finally {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};

export const deleteUser = async (payload) => {
  try {
    connectToDB();
    const { id } = Object.fromEntries(payload);
    await User.findByIdAndDelete(id);
    return "Deleted Successfully";
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete data!");
  } finally {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};

export const createProduct = async (payload) => {
  try {
    connectToDB();
    payload = Object.fromEntries(payload);
    await Product.create(payload);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create data!");
  } finally {
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
};

export const deleteProduct = async (payload) => {
  try {
    connectToDB();
    const { id } = Object.fromEntries(payload);
    await Product.findByIdAndDelete(id);
    return "Deleted Successfully";
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete data!");
  } finally {
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
};
