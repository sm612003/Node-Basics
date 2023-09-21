
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
const datatask = ['sayhello','hello(x)'];
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
  else if (text === 'list') {
    list();

  } else if (text.startsWith('add ')) {
    const eachtask = text.slice(4);
    addTask(eachtask);
  }
  
    else if (text === 'add') {
      console.log("error");
  }
  else if ( text === "help"){
    help();
  }
  else if ( text === "remove"){
    removetask();
  }
  else if (text==="remove 1"){
    removefirst();
  }
  else if (text==="remove 2"){
    removesecond();
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
  5-help:lists all the possible commands 
  6-remove(without anything): should remove the last task
  7-remove 1:remove the FIRST element of the list
  8-remove 2:remove the SECOND element of the list`
  )
}

function list() {
  if (datatask.length === 0) {
    console.log('No tasks available.');
  } else {
    console.log('Tasks:');
    datatask.forEach((eachtask, index) => {
      console.log(`${index + 1}. ${eachtask}`);
    });
  }
}

function addTask(eachtask) {
  datatask.push(eachtask);
  console.log(`Added task: "${eachtask}"`);
}
 //remove (without anything) should remove the last task
function removetask() {
       datatask.pop();
      }
      function removefirst() {
        datatask.splice(0, 1);
       
      }
      function removesecond() {
        datatask.splice(1, 1);
       
      }

//   datatask.push(eachtask);
//   console.log(`Added task: "${eachtask}"`);
// }


// The following line starts the application
startApp("Souhad Moussa")
