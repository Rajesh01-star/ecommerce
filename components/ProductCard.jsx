export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 max-w-md mx-auto hover:shadow-lg transition-shadow mb-10">
      <h3 className="text-lg font-semibold text-center mb-3 text-gray-700">{product.title}</h3>
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-40 w-full object-cover rounded mb-3"
      />
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">${product.price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
