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

        if (typeof apiReturnValue === 'string') {
          const convertStringToJson = JSON.parse(apiReturnValue);

          resolve(convertStringToJson.fact);
        } else {
          resolve(apiReturnValue.fact);
        }
      } catch (error) {
        reject(error);
      }
    })();
  });
}
