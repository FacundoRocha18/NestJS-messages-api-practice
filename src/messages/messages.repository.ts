import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findById(uuid: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[uuid];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const uuid = randomUUID();

    messages[uuid] = { uuid, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
