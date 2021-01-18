import React from 'react'
    
class Footer extends React.Component {
    render() {
      return (
    <nav className="w-full flex relative mt-auto bottom-0 bg-white py-2">
        <section className="max-w-screen-2xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center items-center py-2">
                <div className="flex flex-wrap">
                    <span className="text-base">Copyright 2021 Blog App by <a className="font-semibold text-green-700" href="https://metalsyntax.now.sh/" rel="noreferrer" target="_blank">
                        MetalSyntax
                    </a></span>
                </div>
            </div>
        </section>
    </nav>
       );
    }
}

export default Footer;
