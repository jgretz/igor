import {Injectable, Logger} from '@nestjs/common';
import io, {Socket} from 'socket.io-client';
import {DataTask} from '../tasks';
import {IgorEvents, FindAllArgs} from '../Types';

@Injectable()
export class IgorGateway {
  socket: Socket;

  constructor(dataTask: DataTask) {
    this.socket = io(process.env.HERMES_SOCKET_URL, {
      reconnectionDelayMax: 10000,
    });

    this.socket.on(IgorEvents.Connect, () => {
      Logger.log('Igor Connected');
    });

    this.socket.on(IgorEvents.Error, (data) => {
      Logger.error('Igor had an exception', data);
    });

    this.socket.on(IgorEvents.Disconnect, () => {
      Logger.log('Igor disconnected');
    });

    this.socket.on(IgorEvents.FindAll, async ({source, entity}: FindAllArgs, callback) => {
      const data = await dataTask.findAll(source, entity);
      callback(data);
    });
  }

  send<T>(event: string, ...args: any[]): Promise<T> {
    return new Promise((resolve) => {
      this.socket.emit(event, ...args, (response: T | PromiseLike<T>) => {
        resolve(response);
      });
    });
  }
}
