import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <div className="category-preview-container">
      {Object.keys(categoryMap).map((title, idx) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview
            key={idx}
            title={title}
            products={products}
          ></CategoryPreview> 
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
