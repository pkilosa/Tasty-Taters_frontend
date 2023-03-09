import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import Header from "../components/header";
import Footer from "../components/footer";
import Item from "../components/item";
import Review from "../components/review";
import Writereview from "../components/writereview";

const Home = () => {
  const [showReview, setShowReview] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItem());
  }, []);
  const items = useSelector(getItems);
  console.log(items.items);
  return (
    <>
      <Header />
      {showReview && (
        <Review
          setShowReview={setShowReview}
          showReview={showReview}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      )}

      {showWriteReview && (
        <Writereview
          showWriteReview={showWriteReview}
          setShowWriteReview={setShowWriteReview}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      )}
      <div class="container">
        {items.items &&
          items.items.length > 0 &&
          items.items.map((item) => (
            <Item
              setShowReview={setShowReview}
              setShowWriteReview={setShowWriteReview}
              setSelectedId={setSelectedId}
              item={item}
              key={item.id}
            />
          ))}
      </div>
      <Footer />
    </>
  );
};
export default Home;
