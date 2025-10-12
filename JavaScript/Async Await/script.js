function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data received");
    //   resolve();
      reject("Failed to get data");
    }, 1000);
  });
}

function processData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data processed");
      resolve();
      reject("Error while processing data"); 
    }, 1000);
  });
}

function saveData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data saved");
      resolve();
      reject("Failed to save data"); 
    }, 1000);
  });
}

async function runTasks() {
  try {
    await getData();
    await processData();
    await saveData();
    console.log("✅ All tasks done successfully!");
  } catch (error) {
    console.log("❌ Error occurred:", error);
  }
}

runTasks();
