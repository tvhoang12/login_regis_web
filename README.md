# NodeJS_Study
hoang studying nodejs by creating an login and register for a dashboard

# Technology

using nodejs(framework express, express-session) for backend
using template engine(pug) for frontend(generate by claude)


# Login App - NodeJS Study Project

A full-stack web application built with Node.js, Express, and Pug for learning purposes.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Pug (Jade template engine), Bootstrap 5
- **Session Management**: express-session
- **Styling**: CSS3 with Bootstrap
- **Version Control**: Git & GitHub

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/tvhoang12/NodeJS_Study.git
cd NodeJS_Study/login
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🔐 Demo Credentials

- **Email**: admin@gmail.com
- **Password**: password

## 📁 Project Structure

```
login/
├── bin/
│   └── www                 # Server entry point
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css       # Custom styles
├── routes/
│   ├── index.js            # Home, login, dashboard routes
│   ├── register.js         # Registration routes
│   ├── users.js
│   ├── dashboard.js
│   └── math.js
├── views/
│   ├── layout.pug          # Main layout
│   ├── index.pug           # Home/login form
│   ├── login.pug           # Login page
│   ├── register.pug        # Registration page
│   ├── dashboard.pug       # Dashboard page
│   └── error.pug           # Error page
├── app.js                  # Express app configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🌐 Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page |
| `/login` | GET | Show login form |
| `/login` | POST | Process login |
| `/auth` | GET | Show register form |
| `/auth` | POST | Process registration |
| `/dashboard` | GET | User dashboard |

## 🔧 Middleware

- **morgan**: HTTP request logging
- **express.json()**: JSON parser
- **express.urlencoded()**: URL-encoded data parser
- **cookie-parser**: Cookie parser
- **express-session**: Session management
- **express.static**: Static file serving

## 📝 Notes

- This project is for educational purposes
- Credentials are hardcoded for demo
- Session timeout: 1 hour
- All dependencies are up-to-date and security vulnerabilities are fixed

## 👨‍💻 Author

**Hoang TV** - [GitHub Profile](https://github.com/tvhoang12)

## 📄 License

This project is open source and available under the MIT License.

---

**Last Updated**: January 22, 2026
