// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import {NestFactory} from '@nestjs/core';
import {bootstrap as centralBootstrap} from '@jgretz/igor-central';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.startAllMicroservices();

  centralBootstrap();
}
bootstrap();
