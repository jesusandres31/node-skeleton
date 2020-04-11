import dotenv from 'dotenv';
dotenv.config();

module.exports = {
    log: process.env.NODE_LOG || true,
    port: process.env.PORT || 8000  
};

