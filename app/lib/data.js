import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchData = async (model, query) => {
  try {
    connectToDB();
    const { search, page } = query;
    const regex = new RegExp(search, "i");
    const ITEMS_PER_PAGE = process.env.ITEMS_PER_PAGE ?? 10;
    let MODEL, condition;
    if (model === "User") {
      MODEL = User;
      condition = { username: { $regex: regex } };
    } else if (model === "Product") {
      MODEL = Product;
      condition = { title: { $regex: regex } };
    }
    const count = await MODEL.countDocuments(condition);
    const data = await MODEL.find(condition)
      .sort({ createdAt: "desc" })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { data, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data!");
  }
};

export const fetchSingleData = async (model, id) => {
  try {
    connectToDB();
    let MODEL;
    if (model === "User") MODEL = User;
    else if (model === "Product") MODEL = Product;
    const data = await MODEL.findById(id);
    return { data };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data!");
  }
};
