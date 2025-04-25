import {openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';
import {City} from './CitySchema';

const cityTableName = 'City';

export const getDBConnection = async () => {
  return openDatabase({name: 'clock-app.db', location: 'default'});
};

export const createCityTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${cityTableName}(
          name TEXT NOT NULL PRIMARY KEY,
          timeDifference NUM
      );`;

  await db.executeSql(query);
};

export const getAllCities = async (db: SQLiteDatabase): Promise<City[]> => {
  try {
    const cities: City[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id, name, timeDifference
      FROM ${cityTableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        cities.push(result.rows.item(index));
      }
    });
    return cities;
  } catch (error) {
    console.error(error);
    throw Error('Failed to load cities');
  }
};

export const saveCities = async (db: SQLiteDatabase, cities: City[]) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${cityTableName}(rowid, name, timeDifference) values` +
    cities.map(i => `(${i.id}, '${i.name}', '${i.timeDifference}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteCity = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${cityTableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};
