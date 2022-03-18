export const Contract = {
  FREE: "free",
  TENDOLLAR: "tenDollar",
} as const;
// export const Contract = ["free", "tenDollar"] as const;
type contractTypes = typeof Contract;
type contractKeys = keyof contractTypes;
export type contractEnum = contractTypes[contractKeys];
// same as;
// type Contract = typeof Contract[keyof typeof Contract];

export type User = {
  __typename: string;
  name: string;
  uuid: number;
  id: string;
  contractType: "free" | "tenDollar";
  age: number;
  description?: string;
  link?: string;
  birthday?: Date;
  nationality?: string;
  createdAt: string;
  updatedAt: string;
};
export type UsersArgs = Partial<User>;

export interface Person {
  firstName?: string;
  lastName?: string;
}
export type PartialPerson = Required<Person>;

export type UserForHeader = Pick<User, "id" | "name">;

// c*i*n
// b g h j k m p q y
// cini strip
//

/** interface & types */
const tmpUser: UserForHeader = {
  id: "_Jabelic",
  name: "Jabelic",
};
const contract1: contractEnum = Contract.FREE;
const contract: contractEnum = Contract.FREE;
console.debug(contract, contract1, Contract);
