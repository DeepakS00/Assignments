module.exports = {
    post: {
        tags: ["Todo CRUD operations"],
        description: "Create the tasks in the schedule.",
        parameters: [],
        operationId: "createTask",

        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/TodoPost"
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Task added successfully."
            },
            500: {
                description: "Server error",
            },
        },
    },
};