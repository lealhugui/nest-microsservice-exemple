export interface IInstallmentProps {
  value: number;
  installmentNumber: number;
}

export class Installment implements IInstallmentProps {
  private constructor(private _props: IInstallmentProps) {}

  get asProps(): IInstallmentProps {
    return this._props;
  }

  get value(): number {
    return this._props.value;
  }

  get installmentNumber(): number {
    return this._props.installmentNumber;
  }

  public static create(props: IInstallmentProps): Installment {
    const result = new this(props);
    return result;
  }

  public static createListFromTotalValue(
    totalValue: number,
    numberOfInstallments: number
  ): Array<Installment> {
    const result = [];

    for (let i = 1; i <= numberOfInstallments; i++) {
      result.push(
        this.create({
          value: Number((totalValue / numberOfInstallments).toFixed(2)),
          installmentNumber: i
        })
      );
    }

    if (!result.length) return result;

    const totalEvaluated = result
      .map((i) => i.value)
      .reduce((prev, curr) => prev + curr, 0);

    if (totalEvaluated > numberOfInstallments) {
      const diff = totalEvaluated - totalValue;
      result[numberOfInstallments - 1]._props.value =
        result[numberOfInstallments - 1].value - diff;
    } else if (totalEvaluated < numberOfInstallments) {
      const diff = totalValue - totalEvaluated;
      result[numberOfInstallments - 1]._props.value =
        result[numberOfInstallments - 1].value + diff;
    }

    return result;
  }
}
