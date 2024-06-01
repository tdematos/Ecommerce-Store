import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const ItemContainer: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="item-Container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => {
          return (
            <ItemCard
              key={product.id}
              itemImage={product.image}
              altText={product.title}
              itemTitle={product.title}
              itemDesc={truncateText(product.description, 50)} // Truncate description
              itemPrice={product.price}
            />
          );
        })
      )}
    </div>
  );
};

export default ItemContainer;
