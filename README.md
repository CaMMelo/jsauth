`docker-compose up -d`

enter the server folder and:

`yarn sequelize db:migrate:all`

`yarn sequelize db:seed:all`

run with

`yarn start:dev`

.env file example:

```
PORT=5000
DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=postgres


JWT_SECRET=my-scret
JWT_EXPRIRES=300
```