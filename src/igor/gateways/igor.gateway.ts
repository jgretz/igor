import {Injectable, Logger} from '@nestjs/common';
import io, {Socket} from 'socket.io-client';

import {IgorSocketEvents} from '../Types';
import {SocketEvents} from '../../Types';

import {DataService} from '../../data';

@Injectable()
export class IgorGateway {
  socket: Socket;

  constructor(dataService: DataService) {
    this.socket = io(process.env.HERMES_SOCKET_URL, {
      reconnectionDelayMax: 10000,
    });

    this.socket.on(IgorSocketEvents.Connect, () => {
      Logger.log('Igor Connected');
    });

    this.socket.on(IgorSocketEvents.Error, (data) => {
      Logger.error('Igor had an exception', data);
    });

    this.socket.on(IgorSocketEvents.Disconnect, () => {
      Logger.log('Igor disconnected');
    });

    this.socket.on(SocketEvents.Data, (args, callback) => {
      dataService.handle(args, callback);
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
