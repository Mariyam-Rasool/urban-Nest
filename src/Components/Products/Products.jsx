import styles from './Css/Products.module.css';
import ProductItems from './ProductItems';
import SearchSort from './SearchSort';
import { newArrivals } from '../../Data/HomePage/NewArrivalsData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Filter products based on category
  useEffect(() => {
    if (category === 'all') {
      setProducts(newArrivals);
    } else {
      const filteredProducts = newArrivals.filter(product => product.category === category);
      setProducts(filteredProducts);
    }
  }, [category]);

  // Combine search and sort
  useEffect(() => {
    let filteredProducts = products.filter(product =>
      product.pName.toLowerCase().includes(searchValue.toLowerCase())
    );
     
    
      switch (sortOption) {

        case 'asc':
          filteredProducts.sort((a, b) => a.pName.localeCompare(b.pName));
          break;
        case 'desc':
          filteredProducts.sort((a, b) => b.pName.localeCompare(a.pName));
          break;
          case 'low':
            filteredProducts.sort((a, b) => {
              const priceA =a.pSalePrice > 0 ? Math.min(a.pPrice,a.pSalePrice) : a.pPrice;
              const priceB =b.pSalePrice > 0 ? Math.min(b.pPrice,b.pSalePrice) : b.pPrice;
              console.log(priceA)
              console.log(priceB)

              return priceA - priceB;
            });
            break;
          case 'high':
            filteredProducts.sort((a, b) => {
              const priceA =a.pSalePrice > 0 ? Math.min(a.pPrice,a.pSalePrice) : a.pPrice;
              const priceB =b.pSalePrice > 0 ? Math.min(b.pPrice,b.pSalePrice) : b.pPrice;
              return priceB - priceA;
            });
          break;
        default:
          break;
      }
    setSortedProducts(filteredProducts);
  }, [products, searchValue, sortOption]);

  const handleSorting = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleSearch = (searchQuery) => {
    setSearchValue(searchQuery);
  };

  return (
    <div className={styles.productDiv}>
      <SearchSort handleSorting={handleSorting} handleSearch={handleSearch} />
      <ProductItems products={sortedProducts} />
    </div>
  );
}

export default Products;
