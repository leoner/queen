module.exports = {
    capture:"localhost:9000",
    populator: {
        type: "selenium",
        config: {
            host: 'localhost', 
            port: 4444
        },
        clients: [
            { browserName: "firefox"}
        ]
    }
};
