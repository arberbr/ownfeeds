// Format Date
export const formatDate = date => {

    let  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let formattedDate = new Date(date);

    let day = formattedDate.getDate();
    let monthIndex = formattedDate.getMonth();
    let year = formattedDate.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;

};

// Check Validity of Input fields
export const checkValidity = (value, rules) => {

    let isValid = true;
    if (!rules) return true;

    if (rules.required) isValid = value.trim() !== '' && isValid;
    if (rules.minLength) isValid = value.length >= rules.minLength && isValid;
    if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;

};

// Update Object
export const updateObject = ( oldObject, updatedValues ) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};