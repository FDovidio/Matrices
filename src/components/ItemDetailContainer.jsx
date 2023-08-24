import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const ItemDetailContainer = () => {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "ARTICULOS ");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setArticulos(docs);
    });
  }, []);

  return (
    <div className="contenedorItemDetail">
      {<ItemDetail articulos={articulos} />}
    </div>
  );
};

export default ItemDetailContainer;
