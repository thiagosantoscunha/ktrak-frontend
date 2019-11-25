export abstract class Utils {
  static getFirstLastName(value: string): string {
    const array = value.split(' ');
    return array[0] + ' ' + array[array.length - 1];
  }
}
