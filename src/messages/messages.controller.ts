import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Get('/:id')
  getMessage(@Param('uuid') uuid: string) {
    return this.messagesService.findById(uuid);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return {
      ok: true,
      message: 'Succesfully created message',
      content: this.messagesService.create(body.content),
    };
  }
}
