import { useState } from 'react';

export default function WishlistButton() {
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };
  
  return (
    <button
      onClick={toggleWishlist}
      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 transition-colors hover:bg-gray-50"
    >
      {isInWishlist ? (
        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      )}
    </button>
  );
}