import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import ReCaptcha from "./components/ReCaptcha";
import Pagination from "./components/Pagination";
import "./Styles/index.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
  
    const fetchPhotos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await response.json();
      setItems(data.slice(0, 100));
    };
    fetchPhotos();
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsPerPage = 10;
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="App">
      <ReCaptcha onVerify={() => setVerified(true)} />
      {verified && (
        <>
          <SearchBar setSearchQuery={setSearchQuery} />
          <ItemList
            items={paginatedItems}
            setItems={setItems}
            currentPage={currentPage}
          />
          <Pagination
            totalItems={filteredItems.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
