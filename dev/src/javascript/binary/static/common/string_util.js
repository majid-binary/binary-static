
var StringUtil = (function(){
    function toTitleCase(str){
        return str.replace(/\w[^\s\/\\]*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    function dateToStringWithoutTime(date){
        return [date.getDate(), date.getMonth()+1, date.getFullYear()].join("/");
    }

    //Time should be in SECOND !!!
    function timeStampToDateString(time){
        var dateObj = new Date(time * 1000);
        var momentObj = moment.utc(dateObj);
        return momentObj.format("YYYY-MM-DD");
    }

    //Time should be in SECOND !!!
    function timeStampToTimeString(time){
        var dateObj = new Date(time * 1000);
        var momentObj = moment.utc(dateObj);
        return momentObj.format("HH:mm:ss");
    }

    //Time should be in SECOND !!!
    function timeStampToDateTimeString(time){
        var dateObj = new Date(time * 1000);
        var momentObj = moment.utc(dateObj);
        return momentObj.toString();
    }

    /**
     * Format currency
     * formatCurrency(20, "USD") -> "USD 20.00"
     * formatCurrency("10000", "GBP") -> "GBP 10,000.00"
     * formatCurrency(10.027, "EUR") -> "EUR 10.027"
    **/
    function formatCurrency(n, c) {
        var currency = ""; 
        if("number" !== typeof n) n = parseFloat(n);
        var snum = n + "", dec;
        if(-1 === snum.indexOf(".")) {
            dec = 2;
        } else {
            dec = snum.split(".")[1].length;
        }
        if("string" === typeof c) {
            currency = c + " ";
        }
        return currency + " " + n.toFixed(dec).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }

    return {
        toTitleCase: toTitleCase,
        dateToStringWithoutTime: dateToStringWithoutTime,
        unixTimeToDateString: timeStampToDateString,
        unixTimeToTimeString: timeStampToTimeString,
        unixTimeToDateTimeString: timeStampToDateTimeString,
        formatCurrency: formatCurrency
    };
}());

