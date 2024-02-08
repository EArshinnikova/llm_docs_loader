This repository contains a series of example of scripts showcasing the usage of Langchain (in JS).

llm.js: demonstrates how to instantiate the model with several parameteres for its futher usage.

indexes.js: demonstrates how to instantiate TextLoader to load the txt file and then split it by the definite chunks, apply embeddings and save them into vector store.

actionstore.js: demonstrates how to utilize the vector store and retrevial QA chain, plus for retrieving information on specific question from the query.

Later on there will be added additional scripts (for loading pdf, xls and other format of docs) and convert them into vector store. Also I will add the functionality to store the data into vector DB.

To run these examples, clone the git repository and run npm install to install the dependencies. You also need to create a .env file and add your secret API Key for OpenAI like this: OPENAI_API_KEY="sk-..."

The important suggestions for installing packages for this project:

Importing from "langchain/embeddings/openai" is deprecated. Instead, please add the
"@langchain/openai" package.

npm install @langchain/openai

and import from "@langchain/openai".

Importing from "langchain/vectorstores/faiss" is deprecated. Instead, please add the "@langchain/community" package.

npm install @langchain/community

and import from "@langchain/community/vectorstores/faiss"

Also please install faiss-node as a dependency,

npm install -S faiss-node`

Importing from "langchain/llms/openai" is deprecated. Instead, please add the "@langchain/openai" package.

npm install @langchain/openai and import from "@langchain/openai".

This will be mandatory after the next "langchain" minor version bump to 0.2.
