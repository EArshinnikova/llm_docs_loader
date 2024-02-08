import { config } from "dotenv";
config();

import { OpenAIEmbeddings } from "@langchain/openai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OpenAI } from "@langchain/openai";
import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";

const embeddings = new OpenAIEmbeddings();
const vectorStore = await FaissStore.load("./", embeddings);

const model = new OpenAI({ temperature: 0.7 });

const chain = new RetrievalQAChain({
  combineDocumentsChain: loadQAStuffChain(model),
  retriever: vectorStore.asRetriever(),
  returnSourceDocuments: true,
});

// if you need to ask several questions in one query you should use batch instead of invoke
const res = await chain.invoke({
  query: "Which AWS networking service enables a company to create a virtual network within AWS?"
});
console.log(res.text);