/* eslint-disable @typescript-eslint/no-extraneous-class */
export class util {
  static assertIsString (value: unknown): void {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not a string.')
    }
  }

  static assertIsPositiveNumber (value: unknown): void {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
      throw new TypeError('Value is not a positive number.')
    }
  }
}