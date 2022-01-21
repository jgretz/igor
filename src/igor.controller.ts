import {Controller} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {SocketService} from '@jgretz/igor-socket';
import {CRUD, COMMAND, CrudEventArgs, CommandEventArgs} from '@jgretz/igor-data-microservice';

@Controller()
export class IgorController {
  constructor(private socket: SocketService, private rabbit: RabbitMqService) {
    socket.subscribe(CRUD, async (args: CrudEventArgs, callback: any) => {
      rabbit.send(CRUD, args.source, args, (message) => {
        callback(message.payload);
      });
    });

    socket.subscribe(COMMAND, async (args: CommandEventArgs, callback: any) => {
      rabbit.send(COMMAND, args.target, args, (message) => {
        callback(message.payload);
      });
    });
  }
}
