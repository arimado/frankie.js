var comments = {
    nice: [
          { string: "%c🙉 %c nice1 ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c nice2 %c siiiick", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial", "color: red;"]}
        , { string: "%c🙉 %c nice3 ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c nice4 ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c nice5 ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c nice6 ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
    ],
    funny: [
        , "%c🙉 %cPlumbers get payed a lot. Maybe you should give that a go?."
    ]
}


var request = function(method, url, callback) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = callback(http);
    http.open(method, url);
    http.send();
}

var log = function (string, stylesArr) {
    var args = Array.prototype.slice.call(arguments);
    args = [string].concat(stylesArr);
    console.log('args: ', args)
    console.log.apply(console, args);
}

window.onerror = function(message, source, lineno, colno, error) {

    log(comments.nice[1].string, comments.nice[1].styles);
    console.log('')



    // return true;

    // request('GET', 'https://api.chucknorris.io/jokes/random', function(http) {
    //     return function () {
    //         if (http.readyState !== 3) return
    //         if (!http.responseText) return
    //         var obj = JSON.parse(http.responseText);
    //         console.log(obj.value);
    //
    //
    //     }
    // });
}
