import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "yokohamablog",
  apiKey: process.env.API_KEY,
});
