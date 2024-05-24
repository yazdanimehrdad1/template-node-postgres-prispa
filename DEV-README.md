# Node-Express
* npm init --save
* npm install express --save
* npm i typescript ts-node @types/node --save-dev
    1.typescript: This is the TypeScript compiler. It's responsible for compiling TypeScript code into regular JavaScript that can be run in a Node.js environment or in a browser.
    2.ts-node: This is a TypeScript execution environment and REPL for Node.js. It allows you to run TypeScript files directly without explicitly compiling them first. (It basically being able to run node in a typescript environment)
    3.@types/node: This package provides TypeScript type definitions for Node.js. It allows you to write TypeScript code that interacts with Node.js APIs, ensuring that you're using them correctly according to their expected types.


* npm install nodemon --save-dev

To transfer using typescript, after the installation, create the tsconfig.js
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}

* change the package.json to
  "scripts": {
    "test": "jest",
    "dev": "ts-node src/index.ts"
  },

# DB
One option is to setup a db in render.com


# Prisma
* npm i prisma --save-dev

* npx prisma init
* npx prisma studio
npx is a tool that comes with npm and it basically allows you to use CLI on your computer without having to download them first.
without npx you either have to install prisma globally or every time you want to use prisma you should type the entire path to local installation(node/.bin/prisma)
npx allows you to run prisma globally without having to install it globally. 
initialize prisma
Create a prisma folder
Create a schema.prisma file in that folder

* npm i @prisma/client --save

prisma client which is the SDK we'll use in our code to interact with the DB. This client is type-safe and based on of our schema. It's actually an NPM package that gets generated on demand to adjust to your schema!

* npx prisma migrate dev --name init
Make sure you added your DB connection string to the .env file as DATABASE_URL.
This will migrate the DB over to use our schema and then generate the new client for us. This client will be used in our code and is now type-checked against our schema.



* npx prisma format
when setting the 1 to many relationships, you can use this command for autocomplete on the (one) side

* npx prisma migrate reset
If in the middle of development you need to update the schema, then you would need to drop reset the db
and run migration again so the db picks up the new schema



# Authentication 
* npm i jsonwebtoken bcrypt dotenv
## Token management
1. Create a function to create JWT
2. Create a middleware functions checks for a JWT on the Authorization header of a request.
    * jwt.verify(token, process.env.JWT_SECRET)  
## Sign up - sign in management
1. Create a hash password function bcrypt.hash(password, 5)
2. Create a function to compare user entered password and saved hashed password stored in DB. bcrypt.compare(password, hash)
3. create signin and signup handler using the above helper functions
