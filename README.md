# ttriple-j-backend

## Installation/Run Instructions
- Have Docker/Docker Compose installed on your machine
- From the root directory, run `docker compose up` (may be `docker-compose up` on some machines)
    - This should start the database and API on your machine
- Check out `http://localhost:3000/api-docs`
    - On build, all endpoints and schema are documented and put in this Swagger UI
    - You can test all existing endpoints through this UI (test it out). It's super helpful because you can see the expected parameters/request bodies for each endpoint.
    - *Don't worry about messing anything up by just toying around here, this is all just running locally on your machine*
    - Make sure to click the "Authorize" button and type in the API key to be able to make requests in Swagger


## Authentication
- All endpoints except `/health` are gated behind API key authentication
- By default (in development) when you run the API with Docker, the API expects the key `dev-api-key`
    - You can change the key (and you should for production!) by setting an `API_KEY` value in `.env` file before spinning up the containers
    - If you're making requests from the frontend or anywhere outside of the Swagger UI, put the key in the `x-api-key` request header field