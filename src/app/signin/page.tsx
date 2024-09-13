

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign in logic here
        console.log('Sign in attempt with:', email, password);
    };

    return (
        <div className="min-h-screen bg-lightBiege flex items-center justify-center">
            <div className="bg-categories p-8 shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-fonnt">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-fonnt mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-darkBiege bg-lightBiege"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-fonnt mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-darkBiege bg-lightBiege"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-darkBiege text-white py-2 px-4"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-fonnt">
                    Don't have an account? <Link href="/signup" className=" hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
