const mongodb = require("mongodb");

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName", "email"],
      properties: {
        firstName: {
          bsonType: "string",
          description: "Deve ser uma string obrigatória",
        },
        lastName: {
          bsonType: "string",
          description: "Deve ser uma string obrigatória",
        },
        email: {
          bsonType: "string",
          description: "Deve ser uma string obrigatória",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          // Este é um padrão de email mais robusto para validar emails.
        },
      },
    },
  },
});
