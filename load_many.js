(function (paths, cb) {
    var loaded = new Array(paths.length);
    var loadedCount = 0;
    paths.forEach(function (path, i) {
        load(path, function (result) {
            loaded[i] = result;
            loadedCount ++;
            if (loadedCount == paths.length) {
                cb.apply(null, loaded);
            }
        });
    });
});
