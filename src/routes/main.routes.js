import {
    processHealthCheck
} from '../controller/main.controller';

app.get('/api/health/check',
    processHealthCheck
);