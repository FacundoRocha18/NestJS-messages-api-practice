import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(public readonly messagesService: MessagesService) {}

  @Get()
  listMessages() {
    const messages = this.messagesService.findAll();

    if (!messages) {
      throw new NotFoundException('There is no messages');
    }

    return messages;
  }

  @Get('/:uuid')
  async getMessage(@Param('uuid') uuid: string) {
    const message = await this.messagesService.findById(uuid);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    try {
      this.messagesService.create(body.content);

      return {
        ok: true,
        message: 'Succesfully created message',
      };
    } catch (error) {
      return {
        ok: false,
        message: `Error while creating message: ${error}`,
      };
    }
  }
}
