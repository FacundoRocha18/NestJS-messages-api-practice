import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  const input = {
    content: 'Hi there',
  };

  const expectedOutput = {
    id: '1',
    content: 'Hi there',
  };

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the expected output', () => {
    expect(controller.createMessage(input)).toEqual(expectedOutput);
  });
});
