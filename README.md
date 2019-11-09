# Chatbot - Dialogflow under the hood

# App
The app is divided into three parts:
- `./model`: lA jupyter notebook to experiment with the model
- `./lambda`: A serverless AWS lambda to deploy the model
- `./preact`: The react Front-End deployed on AWS S3

## Model
Contains a jupyter notebook, which is not necessary, but useful to play with the model.

## Lambda
The backend is hosted on AWS via Serverless and contains a Lambda function embedded in an API Gateway REST API. It takes `body = { "msg": "hello" }` as `application/json` input and returns a `{"intent": "greeting"}`JSON object.

Some useful commands:
``` shell
# deploy
sls deploy -v

# test locally
sls invoke local -f infer --path event.json

# test
curl -X POST https://2kicnr8868.execute-api.eu-west-1.amazonaws.com/dev/infer -d '{"msg": "loan"}'

# logs
sls logs -f infer
```

## Preact

