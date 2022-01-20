import {Module} from '@nestjs/common';
import {IgorController} from './igor.controller';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {SocketService} from '@jgretz/igor-socket';

@Module({
  providers: [SocketService, RabbitMqService],
  controllers: [IgorController],
})
export class AppModule {}
