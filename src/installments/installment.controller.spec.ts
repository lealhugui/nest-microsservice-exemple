import { Test, TestingModule } from '@nestjs/testing';
import { InstallmentController } from './installment.controller';
import { CalculateInstallmentsUseCase } from './useCase/calculateInstallments.useCase';

describe('InstallmentController', () => {
  let installmentController: InstallmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InstallmentController],
      providers: [CalculateInstallmentsUseCase]
    }).compile();

    installmentController = app.get<InstallmentController>(
      InstallmentController
    );
  });

  describe('root', () => {
    it('should calc 3 installments from a total value of 100.00', () => {
      const result = installmentController.calculateFromTotalValue({
        totalValue: 100,
        numberInstallments: 3
      });
      console.log(result);
      expect(result.length).toBe(3);
    });
  });
});
