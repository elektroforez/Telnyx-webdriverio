# Telnyx-webdriverio

## Overview

This repository contains an automated end-to-end testing setup for the [Telnyx](https://telnyx.com) website using **WebdriverIO**, **TypeScript**, **Mocha**, and **Allure** for reporting.

Tests are executed within a **Docker container** to ensure a consistent and reproducible environment across machines. After each push or PR to the `main` branch, an **Allure Report** is generated and automatically deployed to **GitHub Pages**.

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
