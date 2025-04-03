import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWatchList, clearWatchList } from "../store/watchList";
import Button from "../button/Button"; // Correct path to the new Button component
const WatchListPage = () => {
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.watchList.watchList);
  console.log("Current Watch List:", watchList); // Debugging line to check the watch list state
  return (
    <div className="p-6 min-h-screen max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Watchlist</h2>
      {watchList.length === 0 ? (
        <p className="text-gray-500">Your watchlist is empty.</p>
      ) : (
        <div>
          {watchList.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-28 object-cover rounded-md"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-700">
                  <strong>Author:</strong> {item.authorName}
                </p>
                <Button
                  onClick={() => dispatch(removeFromWatchList(item.id))}
                  variant="destructive"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <Button
            onClick={() => dispatch(clearWatchList())}
            variant="outline"
            className="mt-4 w-full"
          >
            Clear Watchlist
          </Button>
        </div>
      )}
    </div>
  );
};

export default WatchListPage;
