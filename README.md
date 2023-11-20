# CS 361 MicroService project
This microservice fetches nutrition facts from fruits when provided with the name of a fruit

## Requirements 
In order for this to you work you must have Node.js installed and have the package node-fetch installed

## How it works
### Request
In the `fruits.txt` file you will need to write the name of a fruit. It should look like this 'Please enter a fruit name: apple'. This will then be read by `microservice.js` using 'fs' 
### Receive 
In turn you will receive data from the public API that is written to your `fruits.txt` file. It is also written in the console log and the console log will let you know that the information has been written to `fruits.txt`

If there is an error then on the console it should notify you of the error with either 'Error fetching API' or 'Failed to write to fruits.txt'

## UML Sequence Diagram
<img width="987" alt="CS361-UML" src="https://github.com/anisar17/CS361-MicroService/assets/111161857/f3837d11-358e-499e-a52e-3364e2f3a01c">

