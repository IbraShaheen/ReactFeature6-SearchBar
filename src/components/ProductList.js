// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

// Data
import products from "../products";

const ProductList = () => {
  const [query, setQuery] = useState("a");
  const SearchArray = products.filter(product => product.name.toUpperCase().includes(query.toUpperCase()))
    // console.log({SearchArray});

  const productList = SearchArray.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));



  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
