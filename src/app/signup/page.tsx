'use client'

export default function Home(){
    return (
        <div className="min-h-screen bg-lightBiege flex items-center justify-center">
            <div className="bg-categories p-8 shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-fonnt">Sign Up</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-fonnt mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-darkBiege bg-lightBiege"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-fonnt mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-darkBiege bg-lightBiege"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-fonnt mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-darkBiege bg-lightBiege"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-darkBiege text-white py-2 px-4"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-fonnt">
                    Already have an account? <a href="/signin" className="hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
}
