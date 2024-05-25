"use client";
import React, { useRef, useEffect } from "react";

interface ListItem {
  id: number;
  name: string;
}

const Item: React.FC<{ item: ListItem }> = ({ item }) => {
  return (
    <div className="extend-test" style={{ backgroundColor: item.color }}>
      Id: {item.id} , name: {item.name}
    </div>
  );
};

const Page: React.FC = () => {
  const [list, setList] = React.useState<ListItem[]>([]);

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleAdd = () => {
    const id = list.length + 1;
    const name = "name" + id;
    const color = randomColor();
    setList([{ id, name, color }, ...list]);
  };

  const handleMinus = () => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>List Page</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <div className="">
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
