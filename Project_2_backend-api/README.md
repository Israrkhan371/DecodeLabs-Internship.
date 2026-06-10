# 🚀 DecodeLabs – Project 2: Backend API Development

## 📁 Project Structure

```
backend-api/
│
├── server.js                  ← Entry point (start here)
├── package.json               ← Dependencies
│
├── data/
│   └── store.js               ← In-memory database (fake DB)
│
├── middleware/
│   └── validate.js            ← Input validation (Gatekeeper)
│
├── controllers/
│   ├── userController.js      ← User logic (GET, POST, DELETE)
│   └── productController.js   ← Product logic
│
└── routes/
    ├── users.js               ← /api/users routes
    └── products.js            ← /api/products routes
```

---

## ⚙️ Setup & Installation

### Step 1 – Make sure Node.js is installed
Open your terminal and check:
```bash
node -v
npm -v
```
If not installed → download from https://nodejs.org

---

### Step 2 – Go into the project folder
```bash
cd backend-api
```

---

### Step 3 – Install dependencies
```bash
npm install
```

---

### Step 4 – Run the server

**Normal mode:**
```bash
npm start
```

**Dev mode (auto-restart on file change):**
```bash
npm run dev
```

You should see:
```
✅ Server running at http://localhost:3000
```

---

## 🧪 Testing the API (Using Postman)

Open **Postman** and test each endpoint below.

---

### 🔵 ROOT
| Method | URL                        | What it does        |
|--------|----------------------------|---------------------|
| GET    | `http://localhost:3000/`   | Check server status |

---

### 👤 USERS — `/api/users`

| Method | URL                              | What it does       |
|--------|----------------------------------|--------------------|
| GET    | `http://localhost:3000/api/users`      | Get all users      |
| GET    | `http://localhost:3000/api/users/1`    | Get user by ID     |
| POST   | `http://localhost:3000/api/users`      | Create a new user  |
| DELETE | `http://localhost:3000/api/users/1`    | Delete a user      |

#### POST /api/users — Body (JSON):
```json
{
  "name": "Hamza Ali",
  "email": "hamza@example.com",
  "role": "user"
}
```

#### ❌ Test Validation – Missing name:
```json
{
  "email": "test@example.com"
}
```
→ Returns `400 Bad Request` with error details

#### ❌ Test Validation – Bad email format:
```json
{
  "name": "Test",
  "email": "not-an-email"
}
```
→ Returns `400 Bad Request`

---

### 📦 PRODUCTS — `/api/products`

| Method | URL                                                        | What it does              |
|--------|------------------------------------------------------------|---------------------------|
| GET    | `http://localhost:3000/api/products`                       | Get all products           |
| GET    | `http://localhost:3000/api/products?category=electronics`  | Filter by category         |
| GET    | `http://localhost:3000/api/products/1`                     | Get product by ID          |
| POST   | `http://localhost:3000/api/products`                       | Create a new product       |
| DELETE | `http://localhost:3000/api/products/1`                     | Delete a product           |

#### POST /api/products — Body (JSON):
```json
{
  "name": "Mouse",
  "price": 1500,
  "category": "electronics",
  "stock": 50
}
```

---

## 📊 HTTP Status Codes Used

| Code | Meaning               | When                              |
|------|-----------------------|-----------------------------------|
| 200  | OK                    | Successful GET                    |
| 201  | Created               | Successful POST                   |
| 204  | No Content            | Successful DELETE                 |
| 400  | Bad Request           | Validation failed / duplicate     |
| 404  | Not Found             | ID doesn't exist                  |
| 500  | Internal Server Error | Unexpected crash                  |

---

## 💡 Key Concepts Demonstrated

- ✅ RESTful API design (nouns not verbs)
- ✅ GET and POST endpoints
- ✅ Input validation (syntactic + semantic)
- ✅ Proper HTTP status codes
- ✅ JSON request/response format
- ✅ Error handling middleware
- ✅ Modular folder structure (routes / controllers / middleware)

---

## 🔙 Back to Main Repo
[← DecodeLabs-Internship](https://github.com/Israrkhan371/DecodeLabs-Internship/blob/main/README.md)

