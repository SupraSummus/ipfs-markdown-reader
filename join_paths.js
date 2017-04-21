(function (a, b) {
    var splitPath = function (path, keepFile) {
        var elements = [];
        var element = [];
        var escaped = false;
        for (var i = 0; i < path.length; i ++) {
            element.push(path[i]);
            if (path[i] == '/' && !escaped) {
                elements.push(element.join(''));
                element = [];
            }
            escaped = (path[i] == '\\') && !escaped;
        }
        if (keepFile) {
            elements.push(element.join(''));
        }
        return elements;
    };

    if (b.startsWith('/')) {
        return b;
    }

    var elements = splitPath(a, false);
    splitPath(b, true).forEach(function (part) {
        if (part == './') {
        } else if (part == '../') {
            if (elements.pop() == undefined) {
                elements.push(part);
            }
        } else {
            elements.push(part);
        }
    });

    return elements.join('');
});
