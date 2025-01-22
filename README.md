# Portfolio Application  

A full-stack portfolio application showcasing personal and academic projects with a modern UI/UX design.  

## Table of Contents  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Setup](#setup)  

## Features  

### Backend  
- Built with **Spring Boot** and **MariaDB**.  
- Secure configuration using environment variables to protect sensitive data.  
- RESTful API endpoints to manage and retrieve project data.  

### Frontend  
- Developed using **React.js** with dynamic project rendering.  
- Responsive and user-friendly layout.  
- Clean and modern graphite gray theme.  

### UI/UX Highlights  
- Interactive project cards with hover animations.  
- Custom introduction section for context and navigation.  
- Footer section featuring contact details (name, email, GitHub, and phone).  

## Technologies Used  
### Backend  
- **Spring Boot**  
- **MariaDB**  
- **Hibernate**  

### Frontend  
- **React.js**  

## Setup  

### Prerequisites  
- **Java 17+**  
- **Node.js & npm**  
- **MariaDB**  
- **Git**  

### Steps  

1. **Clone the repository**  
```bash  
git clone https://github.com/joaomarrucho/Portfolio
cd portfolio
```

2. **Set up the backend**
  Navigate to the backend directory:
  ```bash 
  cd portfolio-api
  ```

Configure environment variables for database credentials:
```bash  
export DB_USERNAME=your_database_username  
export DB_PASSWORD=your_database_password
```
Start the backend application:
```bash  
./mvnw spring-boot:run
```
3. **Set up the frontend**

Navigate to the frontend directory:
 ```bash
cd portfolio-frontend
  ``` 
Install dependencies and start the frontend application:
```bash
npm install  
npm start
``` 
4. **Access the Application**

Open your browser and go to http://localhost:3000.
Project Structure
```bash
portfolio  
├── portfolio-api         # Backend service (Spring Boot)  
├── portfolio-frontend    # Frontend application (React.js)  
└── README.md             # Project documentation  
```
