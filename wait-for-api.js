const http = require("http");

const url = "http://127.0.0.1:8080/health";
const maxRetries = 30;
const delayMs = 2000;

let attempts = 0;

function check() {
  attempts++;

  http
    .get(url, (res) => {
      if (res.statusCode === 200) {
        console.log("✅ API is ready");
        process.exit(0);
      } else {
        retry(`Status ${res.statusCode}`);
      }
    })
    .on("error", (err) => {
      retry(err.message);
    });
}

function retry(reason) {
  if (attempts >= maxRetries) {
    console.error("❌ API not ready after retries:", reason);
    process.exit(1);
  }
  console.log(`⏳ Waiting for API... (${attempts}/${maxRetries})`);
  setTimeout(check, delayMs);
}

check();
