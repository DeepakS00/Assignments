module.exports = {
  components: {
    schemas: {
      id: {
        type: "number",
        description: "Id for the refereing the task.",
        example: "3",
      },
      // Schema for getting data from DB.
      Todo: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Identification for the tasks(primary key)",
            example: "112",
          },
          task: {
            type: "string",
            description: "The tasks from your todo list",
            example: "Complete the assignment",
          },
        },
      },
      // Schema for creating a row in DB.
      TodoPost: {
        type: "object",
        properties: {
          task: {
            type: "string",
            descriptions: "The tasks to be added in the todo list.",
            example: "Dinner at 8pm",
          },
        },
      },

      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Not found", 
          },
          internal_code: {
            type: "string",
            description: "Error internal code",
            example: "Invalid parameters",
          },
        },
      },
    },
  },
};
