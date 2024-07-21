import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading data from file:', error);
    return [];
  }
};

console.log(await getAllContacts());
