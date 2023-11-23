import React from "react";
import styles from "@/app/ui/dashboard/proudcts/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { fetchSingleData } from "@/app/lib/data";

const SingleProduct = async ({ params }) => {
  const { data } = await fetchSingleData("Product", params?.id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={data?.image ?? "/noavatar.png"} alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={data?.title}
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={data?.price}
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={data?.stock}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={data?.color}
          />
          <label>Size</label>
          <input
            type="number"
            name="size"
            placeholder="Size"
            value={data?.size}
          />
          <label>Category</label>
          <select name="category" id="category">
            <option value={data?.category}>{data?.category}</option>
            <option value="laptop">Laptop</option>
            <option value="iphone">Iphone</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Description"
            cols={30}
            rows={10}
            value={data?.desc}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
