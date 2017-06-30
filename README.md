# playground04
MongoDB CRUD implementation with Node.js Todo App API hosted on heroku[https://hidden-cove-86335.herokuapp.com]

The API requires an auth token to use. To get it, create a new user or sign up. It has following endpoints:
  1. https://hidden-cove-86335.herokuapp.com/todos - GET your todos or POST a new todo with a text property.
  2. https://hidden-cove-86335.herokuapp.com/todos:id - GET a todo by it's unique _id property, PATCH or even DELETE it.
  3. https://hidden-cove-86335.herokuapp.com/users - POST JSON with an email and password property to create a new authenticated user. This action does not require authentication.
  4. https://hidden-cove-86335.herokuapp.com/users/me - GET details (email and _id) of the currently logged in user -you.
  5. https://hidden-cove-86335.herokuapp.com/users/login - login by POSTing with existing email and correct password. As with creating a new user, this action requires no  gives you an auth token.
  6. https://hidden-cove-86335.herokuapp.com/users/me/token - logout with DEL.
  
No client has been developed for it. To consume, use the above endpoints. To test it, use Postman.
