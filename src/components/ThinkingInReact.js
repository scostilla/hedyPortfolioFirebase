import React, { useState } from "react";

const products = [
  { category: "FRUTAS", price: "$50", stocked: true, name: "Manzana" },
  { category: "FRUTAS", price: "$65", stocked: true, name: "Banana" },
  { category: "FRUTAS", price: "$70", stocked: false, name: "Pera" },
  { category: "VERDURAS", price: "$320", stocked: true, name: "Lechuga" },
  { category: "VERDURAS", price: "$150", stocked: false, name: "Zapallo" },
  { category: "VERDURAS", price: "$250", stocked: true, name: "Cebolla" },
];

function ProductTable({ products, filter, inStock }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Precio</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ textDecoration: "line-through", color: "red" }}>
      {product.name}
    </span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function SearchBar({ filter, inStock, onFilterChange, onInStockChage }) {
  return (
    <form>
      <input
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
        type="text"
        name="filter"
        placeholder="Filtrar por..."
      />
      <label>
        <input
          value={inStock}
          onChange={(event) => onInStockChage(event.target.checked)}
          type="checkbox"
          name="stock"
        />{" "}
        Mostrar Solo productos con Stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filter, setFilter] = useState("");
  const [inStock, setInStock] = useState(false);

  return (
    <div>
      <SearchBar
        filter={filter}
        inStock={inStock}
        onFilterChange={setFilter}
        onInStockChage={setInStock}
      />

      <ProductTable products={products} filter={filter} inStock={inStock} />
    </div>
  );
}

export default function ThinkingInReact() {
  return (
    <div>
      {/*  <SearchBar />
      <ProductTable products={products} /> */}
      <FilterableProductTable products={products} />
    </div>
  );
}
