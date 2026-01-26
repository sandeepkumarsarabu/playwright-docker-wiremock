# Playwright Test Automation – UI, API & E2E (Dockerized)

This project demonstrates a **professional Test Automation setup** using **Playwright**, **Docker**, and **service virtualization (WireMock)**.

It covers:

* API testing
* UI testing (positive & negative scenarios)
* Full end-to-end (E2E) testing
* Isolated, Docker-based test environments

---

## 🧱 Architecture Overview

```
Playwright Tests
        |
        v
UI (Nginx, Docker)  →  API (.NET, Docker)  →  WireMock (Stubbed SAP)
```

* **UI** runs in its own container
* **API** runs in a .NET container
* **WireMock** simulates an external SAP system
* All services are orchestrated with **Docker Compose**

---

## 🛠 Tech Stack

* **Playwright** (TypeScript) – UI, API & E2E testing
* **Docker & Docker Compose** – isolated environments
* **.NET (C#)** – backend API (System Under Test)
* **WireMock** – service virtualization (stubbed external system)
* **Node.js & npm** – test runner
* **VS Code** – development environment

---

## 🧪 Test Structure

```
tests/
├─ api/        → API tests
├─ ui/         → UI tests (positive & negative)
└─ e2e/        → Full end-to-end tests
```

### Test Tags Used

* `@api` – API tests
* `@ui` – UI tests
* `@e2e` – End-to-end tests
* `@smoke` – critical tests
* `@negative` – failure scenarios

---

## ▶️ How to Run the Project

### 1️⃣ Start all services

```bash
docker compose up -d --build
```

### 2️⃣ Run all tests

```bash
npx playwright test
```

### 3️⃣ Run tests by tag

```bash
npx playwright test --grep "@smoke"
npx playwright test --grep "@ui"
npx playwright test --grep "@e2e"
```

### 4️⃣ Stop services

```bash
docker compose down
```

---

## ❌ Negative Testing Example

The project includes a **negative UI test** where:

* The API container is stopped
* The UI displays an error message
* The API container is automatically restarted

This simulates **real production failure scenarios**.

---

## 🎯 What This Project Demonstrates

* Real-world **test automation architecture**
* API, UI, and E2E testing with Playwright
* Dockerized test environments
* Service virtualization using WireMock
* Positive and negative test scenarios
* Test organization with tags
* Stable, non-flaky tests

---

## 💼 Suitable For

* Test Automation Engineer roles
* QA Engineer (Automation)
* SDET / QA Automation positions

---

## 📌 Notes

* This project is designed for **learning and portfolio purposes**
* CI/CD integration can be added as a next step
