import React from "react";
import styles from "../../../ui/dashboard/proudcts/addProduct/addProduct.module.css";
import { createProduct } from "@/app/lib/actions";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action={createProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a category</option>
          <option value="pen">Pen</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
        </select>
        <input type="number" placeholder="price" name="price" required/>
        <input type="number" placeholder="stock" name="stock" required/>
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
