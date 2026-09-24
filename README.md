# AI FAQ Assistant API

## Project Overview

The **AI FAQ Assistant API** is a RESTful backend application built using Node.js and Express.js.

This project allows users to create, manage, update, delete, and search Frequently Asked Questions (FAQs).

It also integrates Google Gemini AI to:

- Generate answers to user questions.
- Automatically generate FAQ question-and-answer pairs based on a topic.

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | REST API Framework |
| MongoDB | Database |
| Mongoose | MongoDB Object Modeling |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Google Gemini AI | AI Answer Generation |
| @google/genai | Gemini API Integration |
| Postman | API Testing |

---

# Features

## 1. User Authentication

The project uses JWT-based authentication.

Features include:

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- User Profile
- Protected API Routes
- Duplicate Email Validation

---

## 2. FAQ Management

Users can manage FAQs using the following operations:

- Create FAQ
- Get All FAQs
- Get FAQ by ID
- Update FAQ
- Delete FAQ
- Search FAQs

Supported FAQ categories:

```text
Technology
Education
Health
Banking
General