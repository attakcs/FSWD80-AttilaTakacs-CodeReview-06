var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Loc = /** @class */ (function () {
    function Loc(title, city, zip, address, img) {
        this.title = title;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
    }
    Loc.prototype.display = function () {
        return document.getElementById('sightsee').innerHTML += "\n\t\t<div class=\"card col-md-6 col-lg-3\" >\n                <img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.title + "</h5>\n                 </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\">" + this.city + "</li>\n                    <li class=\"list-group-item\">" + this.zip + "</li>\n                    <li class=\"list-group-item\">" + this.address + "</li>\n                </ul>\n                <div class=\"card-body\">\n                    <p></p>\n                </div>\n            </div> ";
    };
    return Loc;
}());
var Rest = /** @class */ (function (_super) {
    __extends(Rest, _super);
    function Rest(title, city, zip, address, img, type, web, phone) {
        var _this = _super.call(this, title, city, zip, address, img) || this;
        _this.type = type;
        _this.web = web;
        _this.phone = phone;
        return _this;
    }
    Rest.prototype.display = function () {
        return document.getElementById('restaurant').innerHTML += "\n        <div class=\"card col-md-6 col-lg-3\" >\n                <img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.title + "</h5>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\">" + this.city + "</li>\n                    <li class=\"list-group-item\">" + this.zip + "</li>\n                    <li class=\"list-group-item\">" + this.address + "</li>\n                    <li class=\"list-group-item\">" + this.type + "</li>\n                    <li class=\"list-group-item\">&#x40; " + this.web + "</li>\n                    <li class=\"list-group-item\">&#x260F; " + this.phone + "</li>\n                </ul>\n                <div class=\"card-body\">\n                    <p></p>\n                </div>\n            </div> ";
    };
    return Rest;
}(Loc));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(title, city, zip, address, img, eventDate, web, eventPrice) {
        var _this = _super.call(this, title, city, zip, address, img) || this;
        _this.eventDate = eventDate;
        _this.web = web;
        _this.eventPrice = eventPrice;
        return _this;
    }
    Events.prototype.display = function () {
        return document.getElementById('event').innerHTML += "\n        <div class=\"card col-md-6 col-lg-3\" >\n                <img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.title + "</h5>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\">" + this.city + "</li>\n                    <li class=\"list-group-item\">" + this.zip + "</li>\n                    <li class=\"list-group-item\">" + this.address + "</li>\n                    <li class=\"list-group-item\">" + this.eventDate + "</li>\n                    <li class=\"list-group-item\">&#x40; " + this.web + "</li>\n                    <li class=\"list-group-item\">" + this.eventPrice + " &#x20AC;</li>\n                </ul>\n                <div class=\"card-body\">\n                    <p></p>\n                </div>\n            </div> ";
    };
    return Events;
}(Loc));
var church = new Loc('St\. Charles Church', 'Vienna', 1010, 'Karlsplatz 1', 'img/karl.jpg');
var zoo = new Loc('Zoo Schönbrunn', 'Vienna', 1130, 'Maxingstraße 13b', 'img/zoo.jpg');
var palace = new Loc('Schönbrunn Palace', 'Vienna', 1130, 'Schönbrunner Schloßstraße 47', 'img/palace.jpg');
var steph = new Loc('St. Stephen\'s Cathedral', 'Vienna', 1010, 'Stephansplatz 3', 'img/steph.jpg');
var thai = new Rest('Lemon Leaf Thai Restaurant', 'Vienna', 1050, 'Kettenbrückengasse 19', 'img/lemon.png', 'Thai food', 'http://www.lemonleaf.at', "+43 (1) 581 23 08");
var sixta = new Rest('SIXTA', 'Vienna', 1050, 'Schönbrunner Straße 21', 'img/sixta.png', 'Viennese', 'http://www.sixta-restaurant.at/', "+43 (1) 585 28 56");
var kris = new Events('Kris Kristofferson', 'Vienna', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'img/kristoff.jpg', 'Fr., 15.12.2019 - 20:20', 'http://kriskristofferson.com/', 28.99);
var lenny = new Events('Lenny Kravitz', 'Vienna', 1150, 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 'img/lenny.jpg', 'Sat, 08.11.2019 - 20:30', 'www.lennykravitz.com/', 32.79);
var places = [church, zoo, thai, sixta, kris, lenny, palace, steph];
for (var i in places) {
    places[i].display();
}
