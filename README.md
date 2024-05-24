
This template uses Prisma as the ORM. 
- It is helpful to have Prisma vs-code extension installed
npx prisma init

#### the commands to be added to the to the make file 
npx prisma init
npx prisma migrate dev --name init
npx prisma format
npx prisma migrate reset