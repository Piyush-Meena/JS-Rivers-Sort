let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

rivers.sort(function (a, b) {
    console.log(a, b);
    return a.length - b.length;
});
