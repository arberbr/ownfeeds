export const formatDate = date => {

    let  monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    let formattedDate = new Date(date);

    let day = formattedDate.getDate();
    let monthIndex = formattedDate.getMonth();
    let year = formattedDate.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;

};