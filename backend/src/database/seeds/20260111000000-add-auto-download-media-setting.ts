import { QueryInterface } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert(
            "Settings",
            [
                {
                    key: "autoDownloadMedia",
                    value: "enabled",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete("Settings", {
            key: "autoDownloadMedia"
        });
    }
};
