import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {City} from '../repository/CitySchema';
import * as dbService from '../repository/db-service';

const getDatabase = async (): Promise<SQLiteDatabase> => {
  return await dbService.getDBConnection();
};

export const getCities = async (): Promise<City[]> => {
  const database = await getDatabase();

  return await dbService.getAllCities(database);
};
