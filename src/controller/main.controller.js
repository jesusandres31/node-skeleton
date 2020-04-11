export function processHealthCheck(req, res) {
    return res.status(200).send({ status: 'ok' });
} 
