import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsController } from './commits/commits.controller';
import { CommitsService } from './commits/commits.service';

@Module({
  imports: [],
  controllers: [AppController, CommitsController],
  providers: [AppService, CommitsService],
})
export class AppModule {}
