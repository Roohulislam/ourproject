import { useState, useEffect } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiEye
} from 'react-icons/fi';
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [sortOption, setSortOption] = useState('featured');
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/oildata.json');
        const data = await response.json();

        const productsWithDetails = data.map(product => ({
          ...product,
          rating: (Math.random() * 5).toFixed(1),
          reviewCount: Math.floor(Math.random() * 100),
          isNew: Math.random() > 0.7
        }));

        setProducts(productsWithDetails);
        setLoading(false);
      } catch (error) {
        console.error(t('products.errorLoading'), error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [t]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(3);
      } else if (window.innerWidth < 768) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
      setCurrentPage(1);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default:
        return 0;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const goToPage = (page) => setCurrentPage(Math.max(1, Math.min(page, totalPages)));

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 text-sm" />);
      }
    }

    return stars;
  };

  const handleWhatsAppOrder = (product) => {
    const message = `Hello, I want to order the following product:\n\n*${product.title}*\n\n${product.description}`;
    const phoneNumber = '923488560875'; // international format
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="products" className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t('products.title')}</h2>
          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm text-gray-600">{t('products.sortBy')}</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="featured">{t('products.sortOptions.featured')}</option>
              <option value="rating">{t('products.sortOptions.rating')}</option>
              <option value="newest">{t('products.sortOptions.newest')}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 sm:h-56 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute top-2 left-2 flex gap-1">
                  {product.isNew && (
                    <span className="bg-blue-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                      {t('products.newBadge')}
                    </span>
                  )}
                </div>
                <div className="absolute top-2 right-2 flex flex-col gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-1.5 sm:p-2 rounded-full bg-white shadow-sm hover:bg-gray-100 ${wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-700'}`}
                    aria-label={wishlist.includes(product.id) ? t('products.removeFromWishlist') : t('products.addToWishlist')}
                  >
                    <FiHeart className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button className="p-1.5 sm:p-2 rounded-full bg-white shadow-sm hover:bg-gray-100 text-gray-700">
                    <FiShare2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button className="p-1.5 sm:p-2 rounded-full bg-white shadow-sm hover:bg-gray-100 text-gray-700">
                    <FiEye className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium sm:font-semibold text-gray-900 text-sm sm:text-base line-clamp-1">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-0.5">
                    {renderStars(product.rating)}
                    <span className="text-[10px] sm:text-xs text-gray-500 ml-0.5">
                      ({product.reviewCount})
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">
                  {product.description}
                </p>
                <div className="flex justify-end mt-2 sm:mt-3">
                  <button
                    className="flex items-center gap-1 bg-blue-700 hover:bg-green-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm transition-colors"
                    onClick={() => handleWhatsAppOrder(product)}
                  >
                    <FiShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{t('products.add')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 sm:mt-10">
            <nav className="flex items-center gap-1">
              <button onClick={prevPage} disabled={currentPage === 1} className="p-1.5 sm:p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button key={pageNum} onClick={() => goToPage(pageNum)} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-xs sm:text-sm ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-100'}`}>
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="px-1 sm:px-2 text-xs sm:text-sm">...</span>
                  <button onClick={() => goToPage(totalPages)} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-xs sm:text-sm ${currentPage === totalPages ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-100'}`}>
                    {totalPages}
                  </button>
                </>
              )}
              <button onClick={nextPage} disabled={currentPage === totalPages} className="p-1.5 sm:p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </nav>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button
            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-blue-500 text-white border border-blue-600   rounded-md text-sm sm:text-base transition font-medium"
            onClick={() => navigate('/allproducts')}
          >
            {t('products.viewAllProducts')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
