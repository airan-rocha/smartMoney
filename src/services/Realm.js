import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {getDefaultCategories} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2,
  });

  initDB(realm);

  return realm;
};

export const initDB = realm => {
    // consultar a quantidade de categorias existentes no bd
    // se = 0
    //   preencho as categorias
    // senão
    //   não faço nada

    const categoriesLength = realm.objects('Category').length;
    console.log(`initDB :: categories length: ${categoriesLength}`);
  
    if (categoriesLength === 0) {
      const categories = getDefaultCategories();
  
      console.log('initDB :: initing db...');
  
      try {
        realm.write(() => {
          categories.forEach(category => {
            console.log(
              `initDB :: creating category: ${JSON.stringify(category)}`,
            );
  
            realm.create('Category', category, true);
          });
        });
      } catch (error) {}
    } else {
      console.log('initDB :: categories already existing... Skypping.');
    }
  };