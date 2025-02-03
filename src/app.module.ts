import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogoController } from './logo/logo.controller';
import { LogoService } from './logo/logo.service';

@Module({
  imports: [],
  controllers: [AppController, LogoController],
  providers: [AppService, LogoService],
})
export class AppModule {}
