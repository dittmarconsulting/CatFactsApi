import { NativeModules } from 'react-native';
import { ResponseProps } from './CatFactsApi.interface';

export default {
  async fetchCatFacts(url: string): Promise<ResponseProps> {
    return await NativeModules.CatFactsApi.getValue(url);
  },
};
