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
      expect(result.length).toBe(3);
      expect(result[0].value).toBe(33.33);
      expect(result[2].value).toBe(33.34);
    });
  });
});
