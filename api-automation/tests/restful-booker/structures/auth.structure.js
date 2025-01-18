const ss = require('superstruct');

export const validDataAuthResponse = ss.object({
    token: ss.string()
});

export const invalidDataAuthResponse = ss.object({
    reason: ss.string()
});