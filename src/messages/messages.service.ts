import { MessagesRepository } from './messages.repository'

export class MessagesService {
		messagesRepository: MessagesRepository;

	constructor() {
		this.messagesRepository = new MessagesRepository()
	}

	findById(uuid: string) {
    return this.messagesRepository.findById(uuid);
  }

  findAll() {
		return this.messagesRepository.findAll();
	}

  create(content: string) {
		return this.messagesRepository.create(content)
	}
}