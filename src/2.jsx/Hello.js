import React from "react";

const Hello = () => {
    // return (
    //     <div id="header" className="container">
    //         <h1 id="header-one" className="main">Hello Rakesh</h1>
    //     </div>
    // )
    return React.createElement('div', {id: "header", className: "container"}, 
                            React.createElement('h1', {id: "header-one", className: "main"}, 'Hello Rakesh'))
}

export default Hello