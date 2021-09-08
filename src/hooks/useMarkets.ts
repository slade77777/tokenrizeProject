import {useQuery} from 'react-query';
import {getMarkets, getSummary} from '../apis/market';

export const useMarkets = () => {
  return useQuery('markets', getMarkets);
};

export const useMarketSummary = () => {
  return useQuery('marketSummary', getSummary);
};
