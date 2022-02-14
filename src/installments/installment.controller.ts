import { Body, Controller, Post } from '@nestjs/common';
import { IInstallmentProps } from './domain/Installment';
import { CalculateInstallmentsUseCase } from './useCase/calculateInstallments.useCase';

type calculateInstallmentDTO = {
  totalValue: number;
  numberInstallments: number;
};

@Controller('installment')
export class InstallmentController {
  constructor(
    private readonly calculateInstallmentsUseCase: CalculateInstallmentsUseCase
  ) {}

  @Post()
  calculateFromTotalValue(
    @Body() values: calculateInstallmentDTO
  ): Array<IInstallmentProps> {
    return this.calculateInstallmentsUseCase.execute(values);
  }
}
