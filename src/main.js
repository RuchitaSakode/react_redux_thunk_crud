import { createServer, Model } from "miragejs";
 
const createMockServer = function () {
 let server = createServer({
   models: {
     todos: Model,
   },
 
   seeds(server) {
     server.create("todo", {
       id: 1,
       firstName: "Ruchi",
       lastName: "Sakode",
       email: "ruchi@gmail.com"
     });
 
     server.create("todo", {
      id: 2,
      firstName: "Amol",
      lastName: "Singh",
      email: "amol@gmail.com"
     });
 
     server.create("todo", {
      id: 3,
       firstName: "Rekhs",
       lastName: "Siri",
       email: "rekha@gmail.com"
     });
     server.create("todo", {
      id: 4,
       firstName: "Manoj",
       lastName: "Siri",
       email: "manoj@gmail.com"
     });
   },
 
   routes() {
     this.namespace = "api/todos";
 
     this.get("/", (schema, request) => {
       return schema.todos.all().models;
     });
 
     this.post("/new", (schema, request) => {
       let attrs = JSON.parse(request.requestBody);
       attrs.completed = false;
 
       return schema.todos.create(attrs);
     });
 
     this.patch("/:id", (schema, request) => {
       let newAttrs = JSON.parse(request.requestBody);
       let id = request.params.id;
       let todo = schema.todos.find(id);
       return todo.update(newAttrs);
     });
 
     this.delete("/:id", (schema, request) => {
       let id = request.params.id;
       return schema.todos.find(id).destroy();
     });
   },
 });
 
 return server;
};
 
export default createMockServer;