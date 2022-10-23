import { Command } from './types/command';
import { existsSync } from 'fs';
import {logger} from "./utils/logger";
import {initService, SearchService} from "../usecase/search-service";
import {UserRepository} from "../repositories/user-repository";

type CommandParamsType = {
  csvFilePath: string;
  searchIndex: number;
  searchTerm: string;
};

export const searchInCsvCommand: Command = {
  signature: 'search-in-csv',
  title: 'Search In csv file',
  description: 'This command takes a csv file with search term and try to find this key inside the file',

  async run(params: CommandParamsType): Promise<void> {
    const { csvFilePath, searchIndex, searchTerm } = params;
    if(!csvFilePath || !searchTerm || !searchIndex) {
       logger.error("You should fill csvFilePath , searchTerm and searchIndex")
    }

    if (!existsSync(csvFilePath)) {
      logger.error('File not found');
      process.exit(1);
    }

    const searchService: SearchService = initService();
    const result: string[] = await searchService.search(csvFilePath, searchIndex, searchTerm);
    if(!result.length) {
      logger.error('User not found');
      process.exit(1);
    }
    logger.info('##########USER FOUND##########');
    logger.info(result.join(','));
    logger.info('##############################');
  },
};
