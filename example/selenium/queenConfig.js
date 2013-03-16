module.exports = {
    capture:"10.15.52.87:9000",
    populator: {
        type: "selenium",
        config: {
            host: '10.15.52.87', 
            port: 4444
        },
        clients: [
            { browserName: "firefox"}
        ]
    }
};
