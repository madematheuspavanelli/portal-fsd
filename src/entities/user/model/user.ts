export type User = {
  uuid: string;
  name: string;
  login?: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  type: string;
  active: boolean;
  language: string;
  createdAt: string;
  companies: Company[];
};

type Company = {
  id: number;
  name: string;
};
