import {UserRepository} from "../repositories/user-repository";
import {Parser} from "csv-parse";

export class SearchService {
    constructor(private readonly userRepository: UserRepository) {
    }

    async search(csvFilePath: string, searchIndex: number, searchTerm: string): Promise<string[]> {
        const users: Parser = this.userRepository.getUsers(csvFilePath);

        for await (const user of users) {
            if(this.matchUser(user,searchIndex, searchTerm))
                return user;
        }
        return [];
    }

    matchUser(user: string[],searchIndex: number, searchTerm: string): boolean {
        return user[searchIndex] == searchTerm;
    }
}

export function initService(): SearchService {
    const userRepository: UserRepository = new UserRepository();
    return new SearchService(userRepository);
}
