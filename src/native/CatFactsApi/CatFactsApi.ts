import { NativeModules } from 'react-native';
import { ResponseProps } from './CatFactsApi.interface';

export async function fetchCatFacts(url: string): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response: ResponseProps =
          await NativeModules.CatFactsApi.getValue(url);

        if (typeof response === 'string') {
          const convertStringToJson: ResponseProps = JSON.parse(response);

          resolve(convertStringToJson.fact);
        } else {
          resolve(response.fact);
        }
      } catch (error) {
        reject(error);
      }
    })();
  });
}

export default fetchCatFacts;
