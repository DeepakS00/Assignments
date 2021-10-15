module.exports = {
  get: {
    tags: ["Todo CRUD operations"], 
    description: "Get tasks in the schedule",
    parameters: [],
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
    }, 
  },
};