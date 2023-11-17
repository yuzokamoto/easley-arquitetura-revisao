import { UserDatabase } from "../database/UserDatabase";
import { GetUsersInputDTO, GetUsersOutputDTO } from "../dtos/users/getUsers.dto";
import { User } from "../models/User";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase
  ) {}

  public getUsers = async (
    input: GetUsersInputDTO
  ): Promise<GetUsersOutputDTO> => {
    const { nameToSearch } = input

    const usersDB = await this.userDatabase.findUsers(nameToSearch)

    const users: User[] = []

    for (let userDB of usersDB) {

      const addressesDB = await this.userDatabase.findAddresses(userDB.id)

      const addresses = addressesDB.map(addressDB => addressDB.address)

      const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.created_at,
        addresses
      )

      users.push(user)
    }

    const output: GetUsersOutputDTO = {
      users: users.map(user => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        createdAt: user.getCreatedAt(),
        addresses: user.getAddresses()
      }))
    }

    return output
  }
}