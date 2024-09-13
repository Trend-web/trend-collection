'use client';
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Button from "@/components/Button";

interface Product {
  imageUrl: string;
  name: string;
  price: number;
}

const products: Product[] = [
  { imageUrl: "/dress.jpg", name: "Dress 1", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 2", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 3", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 4", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 5", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 6", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 7", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 8", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 9", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 10", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 11", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 12", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 1", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 2", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 3", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 4", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 5", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 6", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 7", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 8", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 9", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 10", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 11", price: 123 },
  { imageUrl: "/dress.jpg", name: "Dress 12", price: 123 },
  // Add more products as needed
];

const ProductsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15; // 5 products per row, 3 rows
  
    // Calculate the index range for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="container mx-auto px-4 bg-lightBiege pt-20"> {/* Added pt-20 */}
        <div className="flex justify-between items-center">
        <h1 className="text-5xl font-semibold text-left my-8 text-fonnt">Products</h1>
        <Link href='/'><Button onClick={()=>{}} label="Home"></Button></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentProducts.map((product, index) => (
            <ProductCard
              id={Date.now().toString()}
              key={indexOfFirstProduct + index}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-1 mb-4 px-3 py-1 rounded ${
                currentPage === page
                  ? ' bg-darkBiege text-gray-700 hover:bg-categories'
                  : 'bg-lightBiege text-black'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsPage;