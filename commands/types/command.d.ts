export type UserIdentifier = {
  userId: string;
  supplierId: string;
  supplierCompanyId: string;
};

export type Command = {
  title: string;
  signature: string; // Signature for the seeder to run
  description: string;
  run: (argv?: Record<string, any>) => Promise<void>;
};
