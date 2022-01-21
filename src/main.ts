// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.startAllMicroservices();
}
bootstrap();
