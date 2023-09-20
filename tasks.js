
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  text = text.trim();
  text.split(' ');
 
  if (text === 'quit\n' ||text==='exit\n') {
    quit();
  }
  else if (text.startsWith('hello ')) {
    const word = text.slice(6); // extract the argument using slice
    hello(word); // pass the extracted argument to hello
  } else if (text === 'hello') {
    hello(); //  call hello without an argument
  }
  else if ( text === "help\n"){
    help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(x) {
  if (x) {
    console.log('hello ' + x + '!');
  } else {
    console.log('hello!');
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
 /**that lists all the possible commands*/

function help() {
  console.log(`possible commands are: 
  1-hello: print hello!
  2-hello (x): Print hello + x
  3-exit: quit the app
  4- quit: quit the app
  5-help:lists all the possible commands `
  )
}

// The following line starts the application
startApp("Souhad Moussa")
