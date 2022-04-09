# Installation

## Update ENV app and env docker

```
cp .env.example .env
cd deploy
cp .env.example .env
```

## Run with docker:

Update docker file and run deploy file

```bash
cp docker-compose.yml.example docker-compose.yml
deploy.sh
```

## Update db

```
docker exec -it lucis_api sh
yarn db:push
# OR
yarn migrate deploy
# Or update by run sql query
```

## Running the app local

```bash
yarn install
yarn generate

# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
