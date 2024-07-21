import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = JSON.parse(
      await fs.readFile(PATH_DB, { encoding: 'UTF-8' }),
    );
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact removed successfully.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

removeLastContact();
