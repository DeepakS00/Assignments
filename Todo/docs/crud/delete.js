module.exports = {
  // To delete a todo from the DB.
  
  delete: {
    tags: ["Todo CRUD operations"],
    description: "Deleting a todo",
    operationId: "deleteTodo",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "Successfully deleted the todo",
      },
    ],

    responses: {
      200: {
        description: "Todo deleted successfully",
      },
      404: {
        description: "Todo not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
