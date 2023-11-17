import { UserAddressDB, UserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "users"
  public static TABLE_USERS_ADDRESSES = "users_addresses"

  public findUsers = async (nameToSearch?: string): Promise<UserDB[]> => {
    if (nameToSearch) {
      const result: UserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .where("name", "LIKE", `%${nameToSearch}%`)

      return result

    } else {
      const result: UserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)

      return result
    }
  }

  public findAddresses = async (userId: string): Promise<UserAddressDB[]> => {
    const result: UserAddressDB[] = await BaseDatabase
      .connection(UserDatabase.TABLE_USERS_ADDRESSES)
      .where({ user_id: userId })

    return result
  }
}