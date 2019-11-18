
export const ConnectEnum = {
    CONNECTING: 0,
    FAILED: 1,
    SUCCEED: 2,
    RECONNECTING: 3,
    properties: {
        0: { value: 0, status: "connecting", desc: "Connecting" },
        1: { value: 1, status: "disconnect", desc: "Connected Failed" },
        2: { value: 2, status: "connected", desc: "Connected Succeed" },
        3: { value: 3, status: "reconnecting", desc: "Connected Reconnecting" }
    }
};

