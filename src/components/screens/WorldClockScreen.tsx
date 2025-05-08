import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {YStack} from 'tamagui';

import WorldClockCard from '../WorldClockCard';
import {City} from '../../repository/CitySchema';
import * as worldClockService from '../../services/WorldClockService';

const WorldClockScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cities, setCities] = useState<City[]>([]);

  useFocusEffect(
    useCallback(() => {
      getCities();
    }, []),
  );

  const getCities = async () => {
    const allCities = await worldClockService.getCities();

    setCities(allCities);
    setIsLoading(false);
  };

  const renderItem = (item: City) => (
    <WorldClockCard name={item.name} timeDifference={item.timeDifference} />
  );

  return (
    <>
      {!isLoading && (
        <YStack>
          {cities.map(x => {
            renderItem(x);
          })}
        </YStack>
      )}
    </>
  );
};

export default WorldClockScreen;
