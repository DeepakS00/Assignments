module.exports = {
    get: {
      tags: ["Todo CRUD operations"], 
      description: "Get tasks in the schedule",
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            $ref: "#/components/schemas/Todo",
          },
          description: "Returning a task with this id."
        }
      ],
      operationId: "getTodos",
      responses: {
        200: {
          description: "Here are the tasks to do.",        
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Todo",
              },
            },
          },
        },
        404: {
          description: "Todo not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  };