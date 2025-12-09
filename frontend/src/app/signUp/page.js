import Footer from '@/ui/Home/Footer'
import Navbar from '@/ui/Home/Navbar'
import React from 'react'

const Signup = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
                <div className='flex justify-center items-center w-[80%] h-[90%] bg-indigo-400 rounded-3xl py-6 px-3'>
                    <div className='w-[50%] h-full text-center'>
                        This is the div
                    </div>
                    <div className="w-full max-w-md bg-white backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
                        <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">Create an Account</h2>

                        <form className="space-y-5">
                            <div>
                                <label className="text-white text-sm">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-400 text-black placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="text-white text-sm">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-400 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="text-white text-sm">Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-400 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    placeholder="Create a password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-purple-700 font-semibold py-3 rounded-xl shadow-lg hover:bg-purple-100 transition"
                            >
                                Sign Up
                            </button>
                        </form>

                        <p className="text-center text-indigo-400 mt-6 text-sm">
                            Already have an account? <span className="text-indigo-400 font-semibold hover:underline cursor-pointer">Login</span>
                        </p>
                    </div>
                </div>

            </div>

            <Footer />

        </>

    )
}

export default Signup