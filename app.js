const express = require( 'express' );
const app = express();
const port = 3000;

app.use( express.static( `${__dirname}/public` ));

app.get( '/', ( req, res ) => {
    res
        .status( 200 )
        .send( 'Hello from the server side' );
});

app.post( '/', ( req, res ) => {
    res.send( 'This is a post' );
})

app.listen( port, () => {
    console.log( 'Listening on port 3000' );
});

