import { CurrencyID } from "../currencies-api/dtos";

import {
  CreateAccountDTO,
  AccountsDTO,
  AccountDTO,
  AccountID,
  UpdateAccountDTO,
  UpdateAccountOrderDTO,
} from "./dtos";

export interface AccountsAPI {
  getAccounts(): Promise<AccountsDTO>;
  setAccounts(accounts: AccountsDTO): Promise<void>;
  createAccount(account: CreateAccountDTO): Promise<AccountDTO>;
  updateAccount(id: AccountID, currency: UpdateAccountDTO): Promise<AccountDTO>;
  updateAccountOrder(
    id: AccountID,
    position: UpdateAccountOrderDTO,
  ): Promise<AccountsDTO>;
  deleteAccount(id: AccountID): Promise<void>;
  deleteAccountsByCurrency(currencyId: CurrencyID): Promise<AccountID[]>;
}
