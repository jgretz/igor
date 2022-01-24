import {Controller} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {SocketService} from '@jgretz/igor-socket';
import {CRUD, COMMAND, CrudEventArgs, CommandEventArgs} from '@jgretz/igor-data-microservice';

const TIMEOUT = 10000;

const connectCrud = (socket: SocketService, rabbit: RabbitMqService) => {
  socket.subscribe(CRUD, async (args: CrudEventArgs, callback: any) => {
    rabbit.send(CRUD, args.source, args, {
      timeout: TIMEOUT,
      handler: callback,
    });
  });
};

const connectCommand = (socket: SocketService, rabbit: RabbitMqService) => {
  socket.subscribe(COMMAND, async (args: CommandEventArgs, callback: any) => {
    rabbit.send(COMMAND, args.target, args, {
      timeout: TIMEOUT,
      handler: callback,
    });
  });
};

@Controller()
export class IgorController {
  constructor(private socket: SocketService, private rabbit: RabbitMqService) {
    connectCrud(socket, rabbit);
    connectCommand(socket, rabbit);
  }
}
