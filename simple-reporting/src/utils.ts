export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((value: string): number => parseInt(value));
  // example: 28/10/2018 -> new Date(2018, 9, 28);
  // months are zero-indexed in Date constructor
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

// an example for Generics
// class HoldAnything<TypeOfData> {
//   constructor(public data: TypeOfData) {}
// }

// const holdNumber = new HoldAnything<number>(123);
// const holdString = new HoldAnything<string>("hello");

