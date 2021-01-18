import React from 'react';
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
    render() {
        return (
    <section className="flex flex-row flex-wrap mx-auto max-w-screen-2xl px-4">
        <h1 className="w-full text-xl py-2">
            Page not found
        </h1>
        <Link className="text-base font-medium py-1" to="/">
            Return to Home
        </Link>
    </section>
        )
    }
};

export default NotFound;
