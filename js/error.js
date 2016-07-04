var comments = {
    nice: [
          { string: "%c🙉 %c Want to know what my mum always said about giving up? 'Not Today!' ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c If the current bug has you in hell, keep coding.", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c I don't think you can build programs without suffering a little - you are both the problem and the solution.", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c You've gotten this far. What's another few bugs?", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c I love the way you hit the keys on the keyboard! Amazing! ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
        , { string: "%c🙉 %c Is today a kick-ass day to code or what!  ", styles: ["font-size: 20px", "font-size: 14px; font-family: Arial"]}
    ],
    funny: [
          "%c🙉 %cPlumbers get payed a lot. Maybe you should give that a go?."
        , "%c  "
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
    console.log.apply(console, args);
}

var getRandomComment = function (comments, feel) {
    var randCommentIndex = Math.floor( Math.random() * comments[feel].length );
    return comments[feel][randCommentIndex];
}

window.onerror = function(message, source, lineno, colno, error) {
    var randomComment = getRandomComment(comments, 'nice');
    log(randomComment.string, randomComment.styles);
}
