const React = require('react')

function Layout(props){
 return(
    <html>
        
        <head>
        <link rel="stylesheet" href="/style.css" />
        <title>Engineer App</title>
        </head>

        <body>
            <div className="container">
                {props.children}
            </div>
        </body>
    </html>
 )
}

module.exports = Layout