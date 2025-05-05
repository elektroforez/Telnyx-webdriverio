# Telnyx-webdriverio

## Overview

This repository contains an automated end-to-end testing setup for the [Telnyx](https://telnyx.com) website using **WebdriverIO**, **TypeScript**, **Mocha**, and **Allure** for reporting.

Tests are executed within a **Docker container** to ensure a consistent and reproducible environment across machines. After each push or PR to the `main` branch, an **Allure Report** is generated and automatically deployed to **GitHub Pages**.

[Manual test cases for this project](https://docs.google.com/spreadsheets/d/1venGXXRiH8hqpofipXAUKcbP7TGGW8pEXxUGfw1td0g/edit?gid=0#gid=0)

---

## Prerequisites

To get started, make sure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/)
- [Allure Commandline](https://docs.qameta.io/allure/) (installable via `npm`)

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/elektroforez/Telnyx-webdriverio.git
cd Telnyx-webdriverio
```

---
## Run

### Run all tests
```bash
npm run tests
```
### Run with specific browser
```bash
npm run test:chrome:headless 
npm run test:firefox:headless
```
### Generate report
```bash
npm run allure:generate
npm run allure:open
```

## Docker

### Build docker image

```bash
 npm run docker:build
```
## Run tests with docker
```bash
npm docker:run
```
