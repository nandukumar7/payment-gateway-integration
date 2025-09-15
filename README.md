# Cashfree Payment Gateway Integration (React JS + Node.js)

This repository demonstrates how to integrate **Cashfree Payment Gateway** in a **React JS** frontend with a **Node.js + Express** backend. It allows creating payment sessions, processing payments, and verifying transactions securely using Cashfree APIs.

---

<img width="874" height="903" alt="Screenshot 2025-09-15 214325" src="https://github.com/user-attachments/assets/49f60634-b4e7-4943-95d7-e7e582cf3dc4" />

<img width="741" height="675" alt="image" src="https://github.com/user-attachments/assets/1b6bf275-5eae-4749-b44b-145d24eb6920" />


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Security](#security)
- [Author](#author)

---

## Overview
This project provides a complete example of handling online payments using **Cashfree**. The React frontend communicates with a Node.js backend that interacts with the Cashfree SDK to:

- Create payment orders
- Initialize payments on the client
- Verify payments after completion

It’s a sandbox-ready example that can be adapted for production.

---

## Features
- Cashfree SDK integration in React
- Order creation and verification in Node.js backend
- Handles payment success and failure callbacks
- Sandbox mode support for testing
- Secure API key management using environment variables

---

## Tech Stack
- **Frontend:** React JS, Axios, Cashfree JS SDK
- **Backend:** Node.js, Express, Cashfree PG SDK, dotenv, crypto, CORS
- **Tools:** Vite, npm

---

## Installation

### Clone the repository
```bash
git clone https://github.com/nandukumar7/payment-gateway-integration.git
cd payment-gateway-integration
