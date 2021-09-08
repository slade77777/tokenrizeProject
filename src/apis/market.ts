import axios from 'axios';

const headers = {
  'user-agent': 'Android;1.15.0',
  'TOK-DEVICE-ID': 'ea278b7741967a5e',
};
export async function getMarkets() {
  return axios.get(
    `https://api.tokenize-dev.com/mobile-api/market/getmarkets`,
    {headers},
  );
}

export async function getSummary() {
  return axios.get(
    `https://api.tokenize-dev.com/public/v1/market/get-summaries`,
    {headers},
  );
}
