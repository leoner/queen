module.exports = {
    capture:"10.15.52.87:9000",
    populator: {
        type: "selenium",
        config: {
            host: '10.15.52.87', 
            port: 4444
        },
        clients: [
            { browserName: "iexplorer", version: "6" },
            { browserName: "iexplorer", version: "7" },
            { browserName: "iexplorer", version: "8" },
            { browserName: "iexplorer", version: "9" },
            { browserName: "chrome"},
            { browserName: "firefox"},
            { browserName: "opera"},
            { browserName: "safari"}
        ]
    }
};
