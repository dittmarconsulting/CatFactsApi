import React, { useEffect, useState } from 'react';
import {
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import { API_URL_STRING } from '../../constants/globals';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Section from '../../components/Section/Section';
import styles from './Home.styles';
import fetchCatFacts from '../../native/CatFactsApi/CatFactsApi';

function Home(): React.JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [catFact, setCatFact] = useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    onButtonPress();
  }, []);

  async function onButtonPress(): Promise<void> {
    try {
      setLoading(true);

      const apiResponse = await fetchCatFacts(API_URL_STRING);

      apiResponse && setCatFact(apiResponse);

      setLoading(false);
    } catch (error) {
      console.log('There was an error getting data from API', error);
      setLoading(false);
    }
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {loading ? (
            <ActivityIndicator
              style={[styles.activityIndicator, backgroundStyle]}
              size="large"
              color={styles.activityIndicator.color}
            />
          ) : (
            <Section title="Cat facts fetched from Native">{catFact}</Section>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onButtonPress}>
            <Text style={styles.text}>Fetch Cat Facts</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
