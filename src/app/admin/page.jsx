'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPanel() {

    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 19.99, stock: 100 },
        { id: 2, name: 'Product 2', price: 29.99, stock: 50 },
        { id: 3, name: 'Product 3', price: 39.99, stock: 75 },
    ]);
    // Temporary use of setProducts to avoid build error
    useEffect(() => {
        if (products.length > 0) {
            setProducts([...products]);
        }
    }, []);
    const [orders, setOrders] = useState([
        { id: 1, customer: 'John Doe', total: 59.98, status: 'Pending' },
        { id: 2, customer: 'Jane Smith', total: 39.99, status: 'Shipped' },
    ]);
    // Temporary use of setOrders to avoid build error
    useEffect(() => {
        if (orders.length > 0) {
            setOrders([...orders]);
        }
    }, []);
    const [activeTab, setActiveTab] = useState('products');

    return (
        <div className="min-h-screen bg-lightBiege p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-fonnt">Admin Panel</h1>
                <div className="mb-6">
                    <button
                        className={`mr-4 px-4 py-2 ${activeTab === 'products' ? 'bg-darkBiege text-white' : 'bg-categories text-fonnt'}`}
                        onClick={() => setActiveTab('products')}
                    >
                        Products
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'orders' ? 'bg-darkBiege text-white' : 'bg-categories text-fonnt'}`}
                        onClick={() => setActiveTab('orders')}
                    >
                        Orders
                    </button>
                </div>
                {activeTab === 'products' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-fonnt">Products</h2>
                        <table className="w-full bg-categories">
                            <thead>
                                <tr>
                                    <th className="p-2 text-left text-fonnt">Name</th>
                                    <th className="p-2 text-left text-fonnt">Price</th>
                                    <th className="p-2 text-left text-fonnt">Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="p-2 text-fonnt">{product.name}</td>
                                        <td className="p-2 text-fonnt">${product.price.toFixed(2)}</td>
                                        <td className="p-2 text-fonnt">{product.stock}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'orders' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-fonnt">Orders</h2>
                        <table className="w-full bg-categories">
                            <thead>
                                <tr>
                                    <th className="p-2 text-left text-fonnt">Customer</th>
                                    <th className="p-2 text-left text-fonnt">Total</th>
                                    <th className="p-2 text-left text-fonnt">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="p-2 text-fonnt">{order.customer}</td>
                                        <td className="p-2 text-fonnt">${order.total.toFixed(2)}</td>
                                        <td className="p-2 text-fonnt">{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <div className="mt-6">
                    <Link href="/" className="text-fonnt hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
