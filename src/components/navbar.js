import React from 'react'
import {Link} from 'react-router-dom'
    
class Navbar extends React.Component {
    render() {
      return (
    <nav className="relative bg-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
                <div className="flex">
                    <Link className="text-lg font-semibold text-green-700 uppercase" to="/">
                        Blog App
                    </Link>
                </div>
                <div className="flex">
                    <Link className="text-base font-medium text-green-500 hover:text-gray-900" to="/create">
                        Create a new post
                    </Link>
                </div>
            </div>
        </section>
    </nav>
       );
    }
}

export default Navbar;

