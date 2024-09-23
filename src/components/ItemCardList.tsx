import React from "react";
import ItemCard from "./ItemCard";
import { Item } from "@/interfaces/Item";

interface ItemCardListProps {
  items: Item[];
}

const ItemCardList: React.FC<ItemCardListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          name={item.name}
          price={item.price}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default ItemCardList;
