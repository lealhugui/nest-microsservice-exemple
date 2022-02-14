import { Installment } from './Installment';

describe('Installment domain logic', () => {
  it('should create a 3 installment list"', () => {
    const result = Installment.createListFromTotalValue(100, 3);
    expect(result.length).toBe(3);
    expect(result[0].value).toBe(33.33);
    expect(result[2].value).toBe(33.34);
  });
});
