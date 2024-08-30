import {NativeModules} from 'react-native';
import {API_URL_STRING} from '../../constants/globals';

export async function fetchCatFacts(): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        console.log('CatFactsApi module:', NativeModules.CatFactsApi);

        const apiReturnValue = await NativeModules.CatFactsApi.getValue(
          API_URL_STRING,
        );

        resolve(apiReturnValue.fact);
      } catch (error) {
        reject(error);
      }
    })();
  });
}
