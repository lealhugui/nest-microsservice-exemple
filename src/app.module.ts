import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstallmentModule } from './installments/installment.module';

@Module({
  imports: [InstallmentModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
