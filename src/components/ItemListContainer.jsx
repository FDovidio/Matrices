import { useParams, Link } from "react-router-dom";
import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      const db = getFirestore();
      const itemsCollection = collection(db, "ARTICULOS ");
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        const filteredCategory = docs.filter(
          (item) => item.categoria === category
        );
        setArticulos(filteredCategory);
      });
    } else {
      const db = getFirestore();
      const itemsCollection = collection(db, "ARTICULOS ");
      getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setArticulos(docs);
      });
    }
    setTimeout(() => {
      articulos;
      setLoading(false);
    }, 3000);
  }, [category]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="header">
        <Link to={'/home'}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/5346/5346913.png"
          alt="Dan Abramov"
          boxSize="80px"
        />
        </Link>
        <Heading>{greeting}</Heading>
      </div>
      <div className="grillaProductos">
        <ItemList articulos={articulos} />
      </div>
    </>
  );
};

export default ItemListContainer;
