/*--------------------------------------------While Loops-------------------------------------*/

// 1. Implementing a game loop that runs until the player loses
let playerHealth = 100;
while (playerHealth > 0) {
  console.log(`Player health: ${playerHealth}`);
  // Simulate taking damage
  playerHealth -= Math.floor(Math.random() * 20);
}
console.log('Game Over!');
// Output: Game loop runs until player health drops to 0 or below

// 2. Reading user input until a valid response is given
let userInput_;
const validResponses = ['yes', 'no'];
while (!validResponses.includes(userInput_)) {
  userInput_ = prompt('Please enter "yes" or "no":');
}
console.log(`Valid response received: ${userInput_}`);
// Output: Keeps prompting until a valid response is given

// 3. Downloading data in chunks until the entire file is retrieved
let totalData = 1000; // Total size of the data to download
let downloadedData = 0;
const chunkSize = 100;
while (downloadedData < totalData) {
  downloadedData += chunkSize;
  console.log(`Downloaded ${downloadedData}/${totalData} bytes`);
}
console.log('Download complete!');
// Output: Downloads data in chunks until the total data is retrieved

// 4. Implementing a retry mechanism with exponential backoff
let attempts = 0;
const maxAttempts = 5;
let success = false;
while (attempts < maxAttempts && !success) {
  attempts++;
  console.log(`Attempt ${attempts}`);
  // Simulate operation success with a 50% chance
  success = Math.random() > 0.5;
  if (!success) {
    const backoff = Math.pow(2, attempts) * 100; // Exponential backoff
    console.log(`Retrying in ${backoff}ms`);
  }
}
if (success) {
  console.log('Operation succeeded');
} else {
  console.log('Operation failed after maximum attempts');
}
// Output: Retries operation with exponential backoff

// 5. Simulating a dice roll until a specific number is achieved
const targetNumber = 6;
let diceRoll;
while (diceRoll !== targetNumber) {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled a ${diceRoll}`);
}
console.log(`Achieved target number: ${targetNumber}`);
// Output: Rolls dice until the target number is rolled

// 6. Processing a queue of tasks until it's empty
let taskQueue = ['task1', 'task2', 'task3', 'task4'];
while (taskQueue.length > 0) {
  const task = taskQueue.shift();
  console.log(`Processing ${task}`);
}
console.log('All tasks processed');
// Output: Processes each task until the queue is empty

// 7. Implementing a simple animation loop
let animationFrame = 0;
const totalFrames = 10;
while (animationFrame < totalFrames) {
  console.log(`Animating frame ${animationFrame}`);
  animationFrame++;
}
console.log('Animation complete');
// Output: Animates frames until the total number of frames is reached

// 8. Searching for an element in a linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
const targetValue = 3;
let currentNode = head;
while (currentNode && currentNode.value !== targetValue) {
  currentNode = currentNode.next;
}
if (currentNode) {
  console.log(`Found value: ${currentNode.value}`);
} else {
  console.log('Value not found in the list');
// Output: Searches linked list for the target value

}

// 9. Implementing a "guess the number" game
const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
while (guess !== secretNumber) {
  guess = parseInt(prompt('Guess the number between 1 and 100:'));
  if (guess < secretNumber) {
    console.log('Too low!');
  } else if (guess > secretNumber) {
    console.log('Too high!');
  } else {
    console.log('Correct!');
  }
}
// Output: Prompts user to guess the number until correct

// 10. Continuously polling an API for updates until a condition is met
let updateReceived = false;
while (!updateReceived) {
  // Simulate API call with a random update condition
  updateReceived = Math.random() > 0.8;
  console.log('Polling API for updates...');
  // Simulate waiting time between polls
}
console.log('Update received from API');
// Output: Polls API until update condition is met

/*--------------------------------------------Do While Loops-------------------------------------*/

// 1. Implementing a menu system that displays options at least once
let menuChoice;
do {
  console.log('1. Start Game\n2. Options\n3. Exit');
  menuChoice = parseInt(prompt('Enter your choice:'));
} while (menuChoice < 1 || menuChoice > 3);
console.log(`You selected option ${menuChoice}`);
// Output: Displays menu and prompts for input at least once

// 2. Validating user input with at least one attempt
let userInput;
do {
  userInput = prompt('Please enter a number between 1 and 10:');
} while (isNaN(userInput) || userInput < 1 || userInput > 10);
console.log(`Valid input received: ${userInput}`);
// Output: Prompts for user input at least once

// 3. Implementing a "play again" feature in a game
let playAgain;
do {
  console.log('Playing the game...');
  playAgain = prompt('Do you want to play again? (yes/no)').toLowerCase();
} while (playAgain === 'yes');
console.log('Game over!');
// Output: Prompts user to play again at least once

// 4. Running a system check at least once before entering a main loop
let systemCheck = false;
do {
  console.log('Running system check...');
  // Simulate system check success
  systemCheck = Math.random() > 0.5;
} while (!systemCheck);
console.log('System check passed, entering main loop');
// Output: Runs system check at least once

// 5. Implementing a dialog box that reappears until a valid option is selected
let validOptionSelected = false;
do {
  const option = prompt('Choose an option (a, b, c):');
  if (['a', 'b', 'c'].includes(option)) {
    validOptionSelected = true;
    console.log(`You selected option ${option}`);
  } else {
    console.log('Invalid option, please try again.');
  }
} while (!validOptionSelected);
// Output: Displays dialog box at least once until a valid option is selected

// 6. Processing a batch of items with at least one item guaranteed
const items = ['item1', 'item2', 'item3'];
let index = 0;
do {
  console.log(`Processing ${items[index]}`);
  index++;
} while (index < items.length);
// Output: Processes each item in the batch, ensuring at least one item is processed

// 7. Implementing a simple cache that's populated on the first access
let cache;
do {
  if (!cache) {
    cache = 'Cached data';
    console.log('Cache populated');
  }
  console.log(cache);
} while (!cache);
// Output: Populates cache on the first access

// 8. Creating a tutorial that shows at least once for new users
let tutorialShown = false;
do {
  console.log('Showing tutorial...');
  // Simulate user finishing the tutorial
  tutorialShown = true;
} while (!tutorialShown);
console.log('Tutorial completed');
// Output: Shows tutorial at least once

// 9. Implementing a retry mechanism that attempts at least once
let success_ = false;
let attempt = 0;
do {
  attempt++;
  console.log(`Attempt ${attempt}`);
  // Simulate operation success with a 50% chance
  success_ = Math.random() > 0.5;
  if (!success_) {
    console.log('Retrying...');
  }
} while (!success_);
console.log('Operation succeeded');
// Output: Retries operation at least once until success

// 10. Running a cleanup routine that executes at least once, even if conditions change
let cleanupRequired = true;
do {
  console.log('Running cleanup routine...');
  // Simulate condition change
  cleanupRequired = false;
} while (cleanupRequired);
console.log('Cleanup completed');
// Output: Executes cleanup routine at least once
