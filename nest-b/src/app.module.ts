import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './modules/v1/home/home.module';

@Module({
  imports: [HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
