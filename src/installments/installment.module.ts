import { Module } from '@nestjs/common';
import { CalculateInstallmentsUseCase } from './useCase/calculateInstallments.useCase';
import { InstallmentController } from './installment.controller';

@Module({
  imports: [],
  controllers: [InstallmentController],
  providers: [CalculateInstallmentsUseCase]
})
export class InstallmentModule {}
