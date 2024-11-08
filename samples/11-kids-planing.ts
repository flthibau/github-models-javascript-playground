// This example demonstrates how to use the OpenAI API o1.

import process from "node:process";
import { OpenAI } from "openai";
import * as fs from 'fs';

const myprompt = fs.readFileSync('/workspaces/github-models-javascript-playground/samples/prompt_kids.txt', 'utf-8');

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});

const chatCompletion = await openai.chat.completions.create({
  model: "o1-preview",
  //model: "gpt-4o",
  messages: [{ role: "user", content:  myprompt}],
});

console.log(chatCompletion.choices[0].message.content);
