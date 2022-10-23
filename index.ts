import glob from 'glob';
import { flatten, keyBy } from 'lodash';
import { Command } from './commands/types/command';
import { argv } from 'yargs';
import {logger} from "./commands/utils/logger";

const gCommandFiles: string[] = glob.sync('**/*.cmd.{ts,js}', {
  cwd: __dirname,
  realpath: true,
});

// Require each of the command files
const commandImports: any[] = gCommandFiles.map((file: string): any => Object.values(require(file)));
const commands: Command[] = flatten(commandImports);
const commandSignatures: any = keyBy(commands, 'signature');

////////////////////////////////////////////////
// Logic to run the command
////////////////////////////////////////////////

// Signature given by user
const [, , givenSignature]: string[] = process.argv;


// Given command is not found
if (!commandSignatures[givenSignature]) {
  console.error(`✖ Invalid command ${givenSignature}`);
  process.exit(1)
}

const foundCommand: Command = commandSignatures[givenSignature];

logger.info('✔ Command found');
logger.info('::::::::::::::::::::::::::::::::::::::::::');
logger.info(`:: ${foundCommand.title}`);
logger.info(`:: ${foundCommand.description}`);
logger.info('::::::::::::::::::::::::::::::::::::::::::');

(async (): Promise<void> => {
  logger.info('Running the command');
  foundCommand
      .run(argv)
      .then(async () => {
        logger.info('Command ran successfully');
        process.exit(0);
      })
      .catch(async (e: Error) => {
        logger.info('!!! Error occurred while running the command');
        logger.error(`!!! ${e.message}`);
        logger.error(e.stack);
      });
})();
