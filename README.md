
# Search in CSV file

The main idea for this task is to provide a script to search in csv file using the file path , search index and search term , if the record is exist will return the result
## Technologies
- Typescript/ NodeJs 

## Requirements
Install npm , node and yarn

## Installation 
Clone project 

```bash
git clone git@github.com:yassminediab/search-csv.git
``` 

```bash
yarn install
``` 

 ## Run Search script 
  ```
 yarn command search-in-csv --csvFilePath=[path/to/file] --searchIndex=[index] --searchTerm=[term]
  ``` 

 ## Run Unit tests 
  ```
  yarn test:unit       
  ``` 
 
 ## Task Explanation
 
 Implement a script to search in csv file
 -  I used a command executor it will search in the project for a command by signature and will execute it using params  
 -  You can add any command in the future and add its signature and run function and it will be executed
 -  I used createReadStream to stream the file and read it as chunks to handle reading large files and it will read it line by line
 -  You can search by index and search term to return the result
 -  I created some simple unit tests for matching function
