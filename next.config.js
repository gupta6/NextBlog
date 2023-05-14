const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "user",
                mongodb_password: "vInhn9cRPTCajfxa",
                mongodb_cluster: "cluster0",
                mongodb_database: "posts-dev"
            }
        }
    }

    return {
        env: {
            mongodb_username: "user",
            mongodb_password: "vInhn9cRPTCajfxa",
            mongodb_cluster: "cluster0",
            mongodb_database: "posts"
        }
    }
}

// If you want to change the default configuration of the next js