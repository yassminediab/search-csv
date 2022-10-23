import parse, {Parser} from "csv-parse";
import fs from "fs";

export class UserRepository {
    getUsers(csvFilePath: string): Parser {
        return fs.createReadStream(csvFilePath).pipe(parse({ delimiter: ',' }));
    }
}
