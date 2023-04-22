import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [MessagesService, MessagesRepository],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  const getMessageExpectedOutput = {
    uuid: '732e3070-63e1-40aa-8357-8c8b576918a9',
    content: 'Hi there',
  };

  const listMessagesExpectedOutput = {
    '732e3070-63e1-40aa-8357-8c8b576918a9': {
      uuid: '732e3070-63e1-40aa-8357-8c8b576918a9',
      content: 'Hi there',
    },
  };

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the message with uuid: 732e3070-63e1-40aa-8357-8c8b576918a9', async () => {
    expect(
      await controller.getMessage('732e3070-63e1-40aa-8357-8c8b576918a9'),
    ).toEqual(getMessageExpectedOutput);
  });

  it('should return the a list of all messages', async () => {
    expect(await controller.listMessages()).toEqual(listMessagesExpectedOutput);
  });
});
