export default function RelatedProducts({ products }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
              
              {/* Out of stock overlay */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
                  <p className="text-gray-900 font-medium">Out of Stock</p>
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="mt-4">
              <h3 className="text-sm text-gray-700 font-medium">{product.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
              </div>
              <div className="flex items-center mt-1">
                <p className="text-sm font-medium text-gray-900">₹{product.currentPrice}</p>
                <p className="ml-2 text-xs text-gray-500 line-through">₹{product.actualPrice}</p>
                <p className="ml-2 text-xs text-green-600">{product.discountPercentage}% OFF</p>
              </div>
            </div>
            
            {/* Add to Cart Quick Button */}
            <div className="mt-2">
              <button 
                className="w-full py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors"
                disabled={!product.inStock}
              >
                {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }