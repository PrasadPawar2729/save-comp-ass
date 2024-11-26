import React from "react";

const ItemList = ({ items, setItems }) => {
  const handleDrag = (event, index) => {
    event.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (event, dropIndex) => {
    const dragIndex = event.dataTransfer.getData("dragIndex");
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={(e) => handleDrag(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
        >
          <img src={item.thumbnailUrl} alt={item.title} />
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
