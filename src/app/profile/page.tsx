'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Order {
    id: number;
    date: string;
    total: number;
    status: string;
}

interface UserProfile {
    name: string;
    email: string;
    address: string;
}

export default function ProfilePage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [profile, setProfile] = useState<UserProfile>({
        name: '',
        email: '',
        address: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch user's order history and profile data
        // This is a mock implementation. Replace with actual API calls.
        setOrders([
            { id: 1, date: '2023-05-15', total: 99.99, status: 'Delivered' },
            { id: 2, date: '2023-05-10', total: 149.99, status: 'Shipped' },
            { id: 3, date: '2023-05-05', total: 79.99, status: 'Processing' },
        ]);
        setProfile({
            name: 'John Doe',
            email: 'john.doe@example.com',
            address: '123 Main St, Anytown, USA',
        });
    }, []);

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Update profile logic here
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-lightBiege p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-fonnt">My Profile</h1>
                
                <div className="bg-categories p-6 mb-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-fonnt">Personal Information</h2>
                    {isEditing ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-fonnt mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-darkBiege"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-fonnt mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-darkBiege"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-fonnt mb-2">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={profile.address}
                                    onChange={handleProfileChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-darkBiege"
                                />
                            </div>
                            <button type="submit" className="bg-darkBiege text-white py-2 px-4 rounded-md hover:bg-categories transition duration-300">
                                Save Changes
                            </button>
                        </form>
                    ) : (
                        <div>
                            <p className="mb-2 text-fonnt"><strong>Name:</strong> {profile.name}</p>
                            <p className="mb-2 text-fonnt"><strong>Email:</strong> {profile.email}</p>
                            <p className="mb-4 text-fonnt"><strong>Address:</strong> {profile.address}</p>
                            <button onClick={() => setIsEditing(true)} className="bg-darkBiege text-white py-2 px-4 rounded-md hover:bg-categories transition duration-300">
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
                
                <div className="bg-categories p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-fonnt">Order History</h2>
                    {orders.length > 0 ? (
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left p-2 text-fonnt">Order ID</th>
                                    <th className="text-left p-2 text-fonnt">Date</th>
                                    <th className="text-left p-2 text-fonnt">Total</th>
                                    <th className="text-left p-2 text-fonnt">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="p-2 text-fonnt">{order.id}</td>
                                        <td className="p-2 text-fonnt">{order.date}</td>
                                        <td className="p-2 text-fonnt">${order.total.toFixed(2)}</td>
                                        <td className="p-2 text-fonnt">{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-fonnt">No orders found.</p>
                    )}
                </div>
                
                <div className="mt-6">
                    <Link href="/" className="text-fonnt hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
