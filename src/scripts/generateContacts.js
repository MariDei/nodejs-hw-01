import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (numContacts) => {
  try {
    let contacts = [];
    const data = await fs.readFile(PATH_DB, { encoding: 'UTF-8' });
    contacts = JSON.parse(data);

    const newContacts = [];
    for (let i = 0; i < numContacts; i += 1) {
      newContacts.push(createFakeContact());
    }

    const updContacts = contacts.concat(newContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(updContacts, null, 2));
    console.log(
      `Successfully generated and added ${numContacts} contacts to db.json`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
