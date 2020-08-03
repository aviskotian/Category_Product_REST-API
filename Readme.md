# Project Title

Heady Backend Developer Test Task

## Requirement

The Task is Building a RESTful APIs from scratch using Express - Node.js.
The Entities are a “Categories” and “Products”.
Category can have multiple child categories.
Child category can have further child categories.
Category can have multiple products and product can have a multiple
categories.
The Entities must get saved in MongoDb and be retrieved via POST and GET
Methods respectively.
Also, the candidate must be aware of HTTP Verbs and their significance in
RESTful APIs.

You need to design a proper Mongodb data model and create APIs to
1. Add a category
2. Add Product mapped to a category or categories.
3. Get all categories with all its child categories mapped to it. Note : Each
category object should look something like this {Id : 1 , child_categories:
[], ...}
4. Get all products by a category.
5. Update product details (name,price,etc)

## Stack
Express Node.js, Mongodb

### Prerequisites
What things you need to install the software and how to install them
* Nodejs 
* MongoDB

### Installing
Running the application is very simple, it requires basically two steps

Firstly, after cloning the app navigate into the application folder and run the following to install npm packages

```
npm install
```

The installation will take a minute or two and once it is completed you will be ready to run the application, use the following command to run the node server

```
npm start
```

This will start the server and you can visit the API endpoint locally on localhost:8080 to start using the API.

```
http://localhost:8080

```

## Deployment

Deployed in Heroku.
Below is the Base URL of API endpoint.
```


```

## Built With

* [NodeJS](https://nodejs.org/en/docs/)
* [ExpressJS](https://expressjs.com/en/starter/installing.html) 
* [MongoDB](https://docs.mongodb.com/?_ga=2.205048208.1801837126.1537257524-1356763734.1535538312)
* [Mongoose](https://mongoosejs.com/docs/api.html)



## Authors

* **Avinash Kotian** 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


