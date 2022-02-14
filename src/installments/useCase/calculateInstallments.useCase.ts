import { Injectable } from '@nestjs/common';
import { IInstallmentProps, Installment } from '../domain/Installment';

@Injectable()
export class CalculateInstallmentsUseCase {
  execute(request: {
    totalValue: number;
    numberInstallments: number;
  }): Array<IInstallmentProps> {
    console.log(request)
    if (!request || !request.totalValue || !request.numberInstallments) {
      throw new Error('Invalid value');
    }
    const result = Installment.createListFromTotalValue(
      request.totalValue,
      request.numberInstallments
    );
    if (!result.length) return result
    return result.map(i => i.asProps)
  }
}
