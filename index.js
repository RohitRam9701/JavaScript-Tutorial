/* Method 1: Load and run the js file using its filepath */

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // // Prompt the user for the filename
// // readline.question('Enter the JavaScript filepath: ', (filename) => {
// //   try {
// //     const fileCode = require(`./${filename}`);
// //     // Now you can use the fileCode in your index.js
// //     console.log('JavaScript code from', filename, 'loaded successfully.');
// //     // Add any other logic you need here
// //   } catch (error) {
// //     console.error('Error loading JavaScript file:', error.message);
// //   }
// //   readline.close();
// // });

// // Prompt the user for the JavaScript filepath
// readline.question('Enter the JavaScript filepath: ', (jsPath) => {
//   try {
//     // Load the external JavaScript code
//     const externalCode = require(`./${jsPath}`);
//     console.log('JavaScript code from', jsPath, 'loaded successfully.');

//     // Execute any logic using the loaded code (if needed)
//     // ...

//   } catch (error) {
//     console.error('Error loading JavaScript file:', error.message);
//   }

//   readline.close();
// });

/* Method 2: Run html file using filePath of html file */

// const express = require('express');
// const app = express();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const port = process.env.PORT || 8080;

// // Serve static files from the root directory
// app.use(express.static(__dirname));

// // Prompt the user for the HTML filepath
// readline.question('Enter the HTML filepath (e.g., folder_1/file_1.html): ', (htmlPath) => {
//   // Serve the HTML file on the webview
//   app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/${htmlPath}`);
//   });

//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

//   readline.close();
// });

/* Method 3: Run html and js files having same names contained in a folder using html filePath.Here js file is loaded to index.js to try on console */

// // Import necessary modules
// const express = require('express');
// const app = express();
// const { exec } = require('child_process');
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const port = process.env.PORT || 8080;

// // Serve static files from the root directory
// app.use(express.static(__dirname));

// // Prompt the user for the HTML filepath
// readline.question('Enter the HTML filepath (e.g., folder_1/file_1.html): ', (htmlPath) => {
//   // Serve the specified HTML file on the webview
//   app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/${htmlPath}`);
//   });
//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

//   // Extract the JavaScript filename from the HTML filepath
//   const jsFilename = htmlPath.replace('.html', '.js');

//   try {
//     // Load the external JavaScript code
//     const externalCode = require(`./${jsFilename}`);
//     console.log('JavaScript code from', jsFilename, 'loaded successfully.');

//     // Execute any logic using the loaded code (if needed)
//     // ...

//   } catch (error) {
//     console.error('Error loading JavaScript file:', error.message);
//   }
//   // Close the readline interface
//   readline.close();
// });

/* Methd 4: Run html and js files contained in a folder using its folder name. They all must have same name. Here js file is loaded to index.js to try on console */

// // Import necessary modules
// const express = require('express');
// const app = express();
// const { exec } = require('child_process');
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const port = process.env.PORT || 8080;

// // Serve static files from the root directory
// app.use(express.static(__dirname));

// // Prompt the user for the folder name
// readline.question('Enter the folder name: ', (folderName) => {
//   // Serve the HTML file on the webview
//   app.get('/', (req, res) => {
//     const htmlPath = `${folderName}/${folderName}.html`;
//     res.sendFile(`${__dirname}/${htmlPath}`);
//   });
//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

//   // Extract the JavaScript filename from the folder name
//   const jsFilename = `${folderName}/${folderName}.js`;

//   try {
//     // Load the external JavaScript code
//     const externalCode = require(`./${jsFilename}`);
//     console.log('JavaScript code from', jsFilename, 'loaded successfully.');

//     // Execute any logic using the loaded code (if needed)
//     // ...

//   } catch (error) {
//     console.error('Error loading JavaScript file:', error.message);
//   }
//   // Close the readline interface
//   readline.close();
// });

/* Methd 5: Run html and js files contained in a folder using its folder name (here names can be different). Here js file is loaded to index.js to try on console and after completing it will run html file */

// // Import necessary modules
// const express = require('express');
// const app = express();
// const { exec } = require('child_process');
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const port = process.env.PORT || 8080; // Choose a port (default to 8080)

// // Serve static files from different directories
// app.use(express.static('public')); // Serve files from the 'public' directory
// app.use(express.static('files')); // Serve files from the 'files' directory

// // Prompt the user for the folder name
// readline.question(
//   'Enter the folder name to run its JavaScript and HTML files: ',
//   (folderPath) => {
//     const fs = require('fs');
//     fs.readdir(folderPath, (err, files) => {
//       if (err) {
//         console.error(`Error reading ${folderPath}: ${err}`);
//         return;
//       }
//       files.forEach((file) => {
//         if (file.endsWith('.js')) {
//           // It's a JavaScript file, execute it with Node.js
//           runJavaScriptFile(`${folderPath}/${file}`);
//         } else if (file.endsWith('.html')) {
//           // It's an HTML file, serve it on the webview
//           app.get('/', (req, res) => {
//             res.sendFile(`${__dirname}/${folderPath}/${file}`);
//           });
//         }
//       });
//       app.listen(port, () => {
//         console.log(`Server running at http://localhost:${port}`);
//       });
//     });
//     readline.close();
//   }
// );
// // Function to run JavaScript files
// const runJavaScriptFile = (filePath) => {
//   try {
//     const fileCode = require(`./${filePath}`);
//     // Now you can use the fileCode in your index.js
//     console.log('JavaScript code from', filePath, 'loaded successfully.');
//     // Add any other logic you need here
//   } catch (error) {
//     console.error('Error loading JavaScript file:', error.message);
//   }
// };

/* Method 6: Run html and js files contained in a folder using its folder name (here names can be different). Here html file is opened on webview and js file is loaded to index.js to try on console simultaneously */

// const express = require('express');
// const app = express();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const fs = require('fs');

// const port = process.env.PORT || 8080;

// app.use(express.static('public'));
// app.use(express.static('files'));

// // Function to run JavaScript files
// const runJavaScriptFile = (filePath) => {
//   try {
//     const fileCode = require(`./${filePath}`);
//     console.log('JavaScript code from', filePath, 'loaded successfully.');
//   } catch (error) {
//     console.error('Error loading JavaScript file:', error.message);
//   }
// };

// // Prompt the user for the folder name
// readline.question(
//   'Enter the folder name to run its JavaScript and HTML files: ',
//   (folderPath) => {
//     fs.readdir(folderPath, (err, files) => {
//       if (err) {
//         console.error(`Error reading ${folderPath}: ${err}`);
//         return;
//       }
//       // First, find and serve the HTML file
//       const htmlFile = files.find((file) => file.endsWith('.html'));
//       if (htmlFile) {
//         app.get('/', (req, res) => {
//           res.sendFile(`${__dirname}/${folderPath}/${htmlFile}`);
//         });
//       }
//       // Start the server
//       app.listen(port, () => {
//         console.log(`Server running at http://localhost:${port}`);
//       });

//       // Then, find and run the JavaScript file
//       const jsFile = files.find((file) => file.endsWith('.js'));
//       if (jsFile) {
//         runJavaScriptFile(`${folderPath}/${jsFile}`);
//       }

//     });
//     readline.close();
//   }
// );

/* Method 7: Server setup and injection of associated JavaScript code into the HTML where both the files are kept in same folder (same name) */

// // server.js

// const express = require('express');
// const app = express();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const path = require('path');
// const fs = require('fs');

// const port = process.env.PORT || 8080;

// // Prompt the user for the HTML filepath
// readline.question('Enter the HTML filepath (e.g., folder_1/file_1.html): ', (htmlFilePath) => {
//   // Extract the JavaScript filename from the HTML filepath
//   const jsFilePath = htmlFilePath.replace('.html', '.js');

//   // Serve the specified HTML file on the webview
//   app.get('/', (req, res) => {
//     fs.readFile(path.join(__dirname, htmlFilePath), 'utf8', (err, htmlContent) => {
//       if (err) {
//         console.error(`Error reading ${htmlFilePath}: ${err}`);
//         res.status(500).send('Error loading the HTML file.');
//         return;
//       }

//       // Check if the associated JS file exists
//       if (fs.existsSync(path.join(__dirname, jsFilePath))) {
//         // Read the JS file and inject it into the HTML content
//         const jsContent = fs.readFileSync(path.join(__dirname, jsFilePath), 'utf8');
//         const injectedHtmlContent = htmlContent.replace('</body>', `<script>${jsContent}</script></body>`);
//         res.send(injectedHtmlContent);
//       } else {
//         // If no JS file, just send the original HTML content
//         res.send(htmlContent);
//       }
//     });
//   });

//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

// // Try to load and execute the associated JavaScript file
//   try {
//     const externalCode = require(`./${jsFilePath}`);
//     console.log(`JavaScript code from ${jsFilePath} loaded successfully.`);
//     // Execute any logic using the loaded code (if needed)
//     // ...
//   } catch (error) {
//     console.error(`Error loading JavaScript file: ${error.message}`);
//   }

//   // Close the readline interface
//   readline.close();
// });

/* Method 8: Server setup and injection of associated JavaScript code into the HTML using filePath of html file. Paste " node server.js folder_1/file_1.html " in shell or in command-line to run. Remember to replace folder_1/file_1.html with the actual path to your HTML file. (same name) */

// // server.js

// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');

// const port = process.env.PORT || 8080;
// const htmlFilePath = process.argv[2]; // Get the HTML filepath from the command-line argument

// // Check if the HTML filepath was provided
// if (!htmlFilePath) {
//   console.error('Please provide the HTML filepath as a command-line argument.');
//   process.exit(1);
// }

// // Extract the JavaScript filename from the HTML filepath
// const jsFilePath = htmlFilePath.replace('.html', '.js');

// // Serve the specified HTML file on the webview
// app.get('/', (req, res) => {
//   fs.readFile(path.join(__dirname, htmlFilePath), 'utf8', (err, htmlContent) => {
//     if (err) {
//       console.error(`Error reading ${htmlFilePath}: ${err}`);
//       res.status(500).send('Error loading the HTML file.');
//       return;
//     }

//     // Check if the associated JS file exists
//     if (fs.existsSync(path.join(__dirname, jsFilePath))) {
//       // Read the JS file and inject it into the HTML content
//       const jsContent = fs.readFileSync(path.join(__dirname, jsFilePath), 'utf8');
//       const injectedHtmlContent = htmlContent.replace('</body>', `<script>${jsContent}</script></body>`);
//       res.send(injectedHtmlContent);
//     } else {
//       // If no JS file, just send the original HTML content
//       res.send(htmlContent);
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

/* Method 9: It runs both the js file associated with html file (not same name) and html itself which are kept in folder (not on console) */

/* index.js */

// const express = require('express');
// const app = express();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const path = require('path');
// const fs = require('fs');
// const port = process.env.PORT || 8080;

// // Function to read and inject JS code into HTML content
// function injectJavaScript(htmlContent, htmlFilePath) {
//   const scriptTagRegex = /<script\s+src="([^"]+)"><\/script>/i;
//   const match = htmlContent.match(scriptTagRegex);

//   if (match) {
//     const jsFilePath = path.join(path.dirname(htmlFilePath), match[1]);
//     if (fs.existsSync(jsFilePath)) {
//       const jsContent = fs.readFileSync(jsFilePath, 'utf8');
//       const injectedHtmlContent = htmlContent.replace(match[0], `<script>${jsContent}</script>`);
//       return injectedHtmlContent;
//     } else {
//       console.error(`JavaScript file ${jsFilePath} does not exist.`);
//       return htmlContent;
//     }
//   } else {
//     console.log('No <script src=""> tag found in the HTML file.');
//     return htmlContent;
//   }
// }

// // Prompt the user for the HTML filepath
// readline.question('Enter the HTML filepath (e.g., folder_1/file_1.html): ', (htmlFilePath) => {
//   // Serve the specified HTML file on the webview
//   app.get('/', (req, res) => {
//     fs.readFile(path.join(__dirname, htmlFilePath), 'utf8', (err, htmlContent) => {
//       if (err) {
//         console.error(`Error reading ${htmlFilePath}: ${err}`);
//         res.status(500).send('Error loading the HTML file.');
//         return;
//       }

//       const injectedHtmlContent = injectJavaScript(htmlContent, htmlFilePath);
//       res.send(injectedHtmlContent);
//     });
//   });

//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

//   // Close the readline interface
//   readline.close();
// });

/* Method 10: It runs both the js file associated with html file (not same name) and html itself which are kept in same folder (on console too)*/

// const express = require('express');
// const app = express();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const path = require('path');
// const fs = require('fs');
// const port = process.env.PORT || 8080;

// // Function to read and inject JS code into HTML content
// function injectJavaScript(htmlContent, htmlFilePath) {
//   const scriptTagRegex = /<script\s+src="([^"]+)"><\/script>/i;
//   const match = htmlContent.match(scriptTagRegex);

//   if (match) {
//     const jsFilePath = path.join(path.dirname(htmlFilePath), match[1]);
//     if (fs.existsSync(jsFilePath)) {
//       const jsContent = fs.readFileSync(jsFilePath, 'utf8');
//       const injectedHtmlContent = htmlContent.replace(match[0], `<script>${jsContent}</script>`);

//       // Try to execute the JavaScript code
//       try {
//         eval(jsContent);
//         console.log(`JavaScript code from ${jsFilePath} executed successfully.`);
//       } catch (error) {
//         console.error(`Error executing JavaScript code: ${error.message}`);
//       }

//       return injectedHtmlContent;
//     } else {
//       console.error(`JavaScript file ${jsFilePath} does not exist.`);
//       return htmlContent;
//     }
//   } else {
//     console.log('No <script src=""> tag found in the HTML file.');
//     return htmlContent;
//   }
// }

// // Prompt the user for the HTML filepath
// readline.question('Enter the HTML filepath (e.g., folder_1/file_1.html): ', (htmlFilePath) => {
//   // Serve the specified HTML file on the webview
//   app.get('/', (req, res) => {
//     fs.readFile(path.join(__dirname, htmlFilePath), 'utf8', (err, htmlContent) => {
//       if (err) {
//         console.error(`Error reading ${htmlFilePath}: ${err}`);
//         res.status(500).send('Error loading the HTML file.');
//         return;
//       }

//       const injectedHtmlContent = injectJavaScript(htmlContent, htmlFilePath);
//       res.send(injectedHtmlContent);
//     });
//   });

//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

//   // Close the readline interface
//   readline.close();
// });

/* Method 11: It runs both the js file associated with html file (not same name) and html itself which may be kept together or not (on console too)*/

// const express = require('express');
// const app = express();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const path = require('path');
// const fs = require('fs');
// const port = process.env.PORT || 8080;

// // Function to recursively search for a JavaScript file in a directory
// function findJavaScriptFileRecursive(baseDir, jsRelativePath) {
//   const searchPath = path.join(baseDir, jsRelativePath);
//   if (fs.existsSync(searchPath)) {
//     return searchPath;
//   }

//   const subdirs = fs.readdirSync(baseDir).filter(file => fs.lstatSync(path.join(baseDir, file)).isDirectory());
//   for (const subdir of subdirs) {
//     const result = findJavaScriptFileRecursive(path.join(baseDir, subdir), jsRelativePath);
//     if (result) {
//       return result;
//     }
//   }

//   return null;
// }

// // Function to read and inject JS code into HTML content
// function injectJavaScript(htmlContent, htmlFilePath) {
//   const scriptTagRegex = /<script\s+src="([^"]+)"><\/script>/i;
//   const match = htmlContent.match(scriptTagRegex);

//   if (match) {
//     const jsRelativePath = match[1];
//     let jsFilePath = findJavaScriptFileRecursive(path.dirname(htmlFilePath), jsRelativePath) ||
//                      findJavaScriptFileRecursive(__dirname, jsRelativePath);

//     if (!jsFilePath) {
//       console.error(`JavaScript file ${jsRelativePath} does not exist.`);
//       return htmlContent;
//     }

//     const jsContent = fs.readFileSync(jsFilePath, 'utf8');
//     const injectedHtmlContent = htmlContent.replace(match[0], `<script>${jsContent}</script>`);

//     // Try to execute the JavaScript code
//     try {
//       eval(jsContent);
//       console.log(`JavaScript code from ${jsFilePath} executed successfully.`);
//     } catch (error) {
//       console.error(`Error executing JavaScript code: ${error.message}`);
//     }

//     return injectedHtmlContent;
//   } else {
//     console.log('No <script src=""> tag found in the HTML file.');
//     return htmlContent;
//   }
// }

// // Prompt the user for the HTML filepath
// readline.question('Enter the HTML filepath (e.g., folder_1/file_1.html): ', (htmlFilePath) => {
//   // Resolve the HTML file path relative to the current directory
//   const resolvedHtmlFilePath = path.resolve(__dirname, htmlFilePath);

//   // Serve the specified HTML file on the webview
//   app.get('/', (req, res) => {
//     fs.readFile(resolvedHtmlFilePath, 'utf8', (err, htmlContent) => {
//       if (err) {
//         console.error(`Error reading ${resolvedHtmlFilePath}: ${err}`);
//         res.status(500).send('Error loading the HTML file.');
//         return;
//       }

//       const injectedHtmlContent = injectJavaScript(htmlContent, resolvedHtmlFilePath);
//       res.send(injectedHtmlContent);
//     });
//   });

//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

//   // Close the readline interface
//   readline.close();
// });

/* Method 12: To run js file or html file (with associated js file, here js file runs before html) dynamically */

// const express = require('express');
// const app = express();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const path = require('path');
// const fs = require('fs');
// const port = process.env.PORT || 8080;

// // Function to recursively search for a JavaScript file in a directory
// function findJavaScriptFileRecursive(baseDir, jsRelativePath) {
//   const searchPath = path.join(baseDir, jsRelativePath);
//   if (fs.existsSync(searchPath)) {
//     return searchPath;
//   }

//   const subdirs = fs.readdirSync(baseDir).filter(file => fs.lstatSync(path.join(baseDir, file)).isDirectory());
//   for (const subdir of subdirs) {
//     const result = findJavaScriptFileRecursive(path.join(baseDir, subdir), jsRelativePath);
//     if (result) {
//       return result;
//     }
//   }

//   return null;
// }

// // Function to read and inject JS code into HTML content
// function injectJavaScript(htmlContent, htmlFilePath) {
//   const scriptTagRegex = /<script\s+src="([^"]+)"><\/script>/i;
//   const match = htmlContent.match(scriptTagRegex);

//   if (match) {
//     const jsRelativePath = match[1];
//     let jsFilePath = findJavaScriptFileRecursive(path.dirname(htmlFilePath), jsRelativePath) ||
//                      findJavaScriptFileRecursive(__dirname, jsRelativePath);

//     if (!jsFilePath) {
//       console.error(`JavaScript file ${jsRelativePath} does not exist.`);
//       return htmlContent;
//     }

//     const jsContent = fs.readFileSync(jsFilePath, 'utf8');
//     const injectedHtmlContent = htmlContent.replace(match[0], `<script>${jsContent}</script>`);

//     // Try to execute the JavaScript code
//     try {
//       eval(jsContent);
//       console.log(`JavaScript code from ${jsFilePath} executed successfully.`);
//     } catch (error) {
//       console.error(`Error executing JavaScript code: ${error.message}`);
//     }

//     return injectedHtmlContent;
//   } else {
//     console.log('No <script src=""> tag found in the HTML file.');
//     return htmlContent;
//   }
// }

// // Function to execute JavaScript files
// function executeJavaScriptFile(jsFilePath) {
//   const jsContent = fs.readFileSync(jsFilePath, 'utf8');
//   try {
//     eval(jsContent);
//     console.log(`JavaScript code from ${jsFilePath} executed successfully.`);
//   } catch (error) {
//     console.error(`Error executing JavaScript code from ${jsFilePath}: ${error.message}`);
//   }
// }

// // Prompt the user for the filepath
// readline.question('Enter the filepath for html file or js file): ', (filePath) => {
//   // Resolve the file path relative to the current directory
//   const resolvedFilePath = path.resolve(__dirname, filePath);

//   if (path.extname(resolvedFilePath) === '.js') {
//     // Execute JavaScript file
//     executeJavaScriptFile(resolvedFilePath);
//   } else if (path.extname(resolvedFilePath) === '.html') {
//     // Serve the specified HTML file on the webview
//     app.get('/', (req, res) => {
//       fs.readFile(resolvedFilePath, 'utf8', (err, htmlContent) => {
//         if (err) {
//           console.error(`Error reading ${resolvedFilePath}: ${err}`);
//           res.status(500).send('Error loading the HTML file.');
//           return;
//         }

//         const injectedHtmlContent = injectJavaScript(htmlContent, resolvedFilePath);
//         res.send(injectedHtmlContent);
//       });
//     });

//     // Start the server
//     app.listen(port, () => {
//       console.log(`Server running at http://localhost:${port}`);
//     });
//   } else {
//     console.error('Unsupported file type. Please provide a .js or .html file.');
//   }

//   // Close the readline interface
//   readline.close();
// });

/* Method 13: To run js file or html file (with associated js file, here js file runs after html) dynamically */

const express = require("express");
const app = express();
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 8080;

// Function to recursively search for a JavaScript file in a directory
function findJavaScriptFileRecursive(baseDir, jsRelativePath) {
  const searchPath = path.join(baseDir, jsRelativePath);
  if (fs.existsSync(searchPath)) {
    return searchPath;
  }

  const subdirs = fs
    .readdirSync(baseDir)
    .filter((file) => fs.lstatSync(path.join(baseDir, file)).isDirectory());
  for (const subdir of subdirs) {
    const result = findJavaScriptFileRecursive(
      path.join(baseDir, subdir),
      jsRelativePath
    );
    if (result) {
      return result;
    }
  }

  return null;
}

// Function to read and inject JS code into HTML content
function injectJavaScript(htmlContent, htmlFilePath) {
  const scriptTagRegex = /<script\s+src="([^"]+)"><\/script>/i;
  const match = htmlContent.match(scriptTagRegex);

  if (match) {
    const jsRelativePath = match[1];
    let jsFilePath =
      findJavaScriptFileRecursive(path.dirname(htmlFilePath), jsRelativePath) ||
      findJavaScriptFileRecursive(__dirname, jsRelativePath);

    if (!jsFilePath) {
      console.error(`JavaScript file ${jsRelativePath} does not exist.`);
      return htmlContent;
    }

    const jsContent = fs.readFileSync(jsFilePath, "utf8");
    const injectedHtmlContent = htmlContent.replace(
      match[0],
      `<script>${jsContent}</script>`
    );

    return { injectedHtmlContent, jsContent, jsFilePath };
  } else {
    console.log('No <script src=""> tag found in the HTML file.');
    return {
      injectedHtmlContent: htmlContent,
      jsContent: null,
      jsFilePath: null,
    };
  }
}

// Function to execute JavaScript files
function executeJavaScriptFile(jsFilePath) {
  const jsContent = fs.readFileSync(jsFilePath, "utf8");
  try {
    eval(jsContent);
    console.log(`JavaScript code from ${jsFilePath} executed successfully.`);
  } catch (error) {
    console.error(
      `Error executing JavaScript code from ${jsFilePath}: ${error.message}`
    );
  }
}

// Prompt the user for the filepath
readline.question(
  "Enter the file path of the JS file or HTML file: ",
  (filePath) => {
    // Resolve the file path relative to the current directory
    const resolvedFilePath = path.resolve(__dirname, filePath);

    if (path.extname(resolvedFilePath) === ".js") {
      // Execute JavaScript file
      executeJavaScriptFile(resolvedFilePath);
    } else if (path.extname(resolvedFilePath) === ".html") {
      // Serve the specified HTML file on the webview
      app.get("/", (req, res) => {
        fs.readFile(resolvedFilePath, "utf8", (err, htmlContent) => {
          if (err) {
            console.error(`Error reading ${resolvedFilePath}: ${err}`);
            res.status(500).send("Error loading the HTML file.");
            return;
          }

          const { injectedHtmlContent, jsContent, jsFilePath } =
            injectJavaScript(htmlContent, resolvedFilePath);
          res.send(injectedHtmlContent);

          if (jsContent && jsFilePath) {
            // Try to execute the JavaScript code after sending the HTML content
            try {
              eval(jsContent);
              console.log(
                `JavaScript code from ${jsFilePath} executed successfully.`
              );
            } catch (error) {
              console.error(
                `Error executing JavaScript code: ${error.message}`
              );
            }
          }
        });
      });

      // Start the server
      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
    } else {
      console.error(
        "Unsupported file type. Please provide a .js or .html file."
      );
    }

    // Close the readline interface
    readline.close();
  }
);