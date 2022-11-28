
# Contact Application with CRUD

A contact manager application (SPA) written in React with all the CRUD (Create|Read|Update|Delete) functionality using Axios and JSON Server


## Authors

- [@meshalmali](https://github.com/meshalmali)


## Demo

Web app hosted on: https://contact-app-f6cb9.web.app/contacts/list


## Deployment

To deploy this project run

```bash
  npm run build
```


## Installation
 
For starting Server run the command: cd server npm start 

For starting Frontend run the command: cd contact-app npm start

## API Reference


| Actions | HTTP methods    | Endpoints                |
| :-------- | :------- | :------------------------- |
| `Read Contacts` | `GET` | /contacts |
| `Create Contact` | `POST` | /contacts|
| `Update Contact` | `PUT` |/contacts/:contactId |
| `Delete Contact` | `DELETE` | /contacts/:contactId |






# JSON server

Created a quick back-end for prototyping and mocking with JSON server. The contacts we manage with the app will be stored in db.json inside the server folder. Also the connection with frontend is done through axios ContactService.js, inside the file we are specifying the baseURL to the JSON Server.
 
## Tech Stack

**Client:** React, Bootstrap 5, Material UI, 

**Server:** Node, JSON Server

