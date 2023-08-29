const http = require("http");
const url = require("url");

const products = [
    "Milk",
    "Eggs",
    "Cheese",
    "Pork",
    "Shrimp",
    "Chicken"
]

//create a server object:
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    if(request.url === "/profile")
        response.write("This is the /profile page!");
    else if (request.url === "/products") 
        response.write("This is the /product page!");
    else if(request.url === "/cart")
            response.write("This is the /cart page!");
    else if (request.url === "/register") 
            response.write("This is the /register page!");
    else if (request.url === "/login") 
            response.write("This is the /login page!");
    
    else {
       // response.write(request.url);
    }



    let urlString = url.parse(request.url, true);
    response.write(JSON.stringify(urlString.query));

 

    console.log(urlString);
    console.log(request.url);

    if (urlString.pathname === "/products") {
        console.log(urlString.query.search.toLowerCase());
        for (let product of products){
            console.log(product.toLowerCase())
            if (product.toLowerCase() === urlString.query.search.toLowerCase()) {
                response.write(`Product ${urlString.query.search} found`)
                response.end();
                return 
            }
        }
        response.write(`Product ${urlString.query.search} not found`)
    }
    

    //.toLowerCase();
    response.end(); //end the response
}).listen(8080); //the server object listens on port 8080