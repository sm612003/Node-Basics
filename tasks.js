
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
  let datatask = [
    { eacht: 'sayhello', done: false },
    { eacht: 'hello(x)', done: false }
  ];
  function onDataReceived(text) {
  text = text.trim();
  text.split(' ');
 
  if (text === 'quit' ||text==='exit') {
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
  else if ( text.startsWith("remove")){
    removetask(text.slice(6));
  }
  else if (text==="remove 1"){
    removefirst();
  }
  else if (text==="remove 2"){
    removesecond();
  }
  else if ( text.startsWith("edit")){
    edit(text.slice(4));
  }
  else if(text==="check"){
    check(text);

  }
  else if(text==="uncheck"){
    check(text);

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
    datatask.forEach((task, index) => {
      task.done? console.log(`[✓] ${index+1} ${task.eacht}`) : console.log(`[ ] ${index+1} ${task.eacht}`)
      // let checkBox="[ ]"

      // if(datatask.done===true){
      //   checkBox="[✓]"
      //   console.log(`${index + 1}. ${task.eacht} (done: ${task.done})`);
      // }
      
      
    });
  }
}



   







function addTask(eachtask) {
  datatask.push({ eacht: eachtask, done: false });
  console.log(`Added task: "${eachtask}"`);
}
 //remove (without anything) should remove the last task
 function removetask(numb) {
  const nb = numb.trim();
  if (nb) {
    const index = parseInt(nb) - 1;
    if (index >= 0 && index < datatask.length) {
      datatask.splice(index, 1);
    } else {
      console.log("Invalid task number");
    }
  } else {
    datatask.pop();
  }
}
      function removefirst() {
        datatask.splice(0, 1);
       
      }
      function removesecond() {
        if (datatask.length >= 2) {
          datatask.splice(1, 1);
       
      }}
      function edit(te) {
        const tet = te.trim();
        if (tet) {
          if (tet === "new text") {
            datatask[datatask.length - 1].eacht = "new text";
          } else if (tet.startsWith("1")) {
            datatask[0].eacht = "new text";
          } else {
            console.log("Invalid edit command");
          }
        } else {
          console.log("Error");
        }
      }

      function check(checkk) {
        let checked = checkk.trim();
        if (checked) {
          tasks[checked - 1].done = true;
          console.log("	✓");
        } else console.log("error");
      }
      
      function uncheck(uncheckk) {
        let uncheckedd = uncheckk.trim();
        if (uncheckedd) {
          tasks[uncheckedd - 1].done = false;
          console.log("	");
                } else console.log("error");
      }
      
     
      


// The following line starts the application
startApp("Souhad Moussa")
