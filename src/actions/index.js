export const changeTMList = (value) => {
    return {
        type: "CHANGETMLIST",
        value: value
    }
};

export const changeTeamMember = (value) => {
    return {
        type: "CHANGETM",
        value: value
    }
};

export const calculateWinner = (value) => {
    return {
        type: "CALCULATE",
        value: value
    }
};


export const saveStandup = (value) => {
    return {
        type: "SAVE",
        value: value
    }
};

export const resetStandup = (value) => {
    return {
        type: "RESET",
        value: value
    }
};


export const changeTimeDelta = (value) => {
    return {
        type: "CHANGETIMEDELTA",
        value: value
    }
};


export const changeCircle = (value) => {
    return {
        type: "CHANGECIRCLE",
        value: value
    }
};

export const initializeLocationArray = (value) => {
    return {
        type: "INITIALIZE",
        value: value
    }
};


export const updateLocationArray = (value) => {
    return {
        type: "UPDATE",
        value: value
    }
};