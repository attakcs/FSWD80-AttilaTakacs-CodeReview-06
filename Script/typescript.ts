class Loc {
    title: string;
    city: string;
    zip: number;
    address: string;
    img: string;
	constructor(title: string, city: string,  zip: number,  address: string, img: string) {
        this.title = title;
		this.city = city;
		this.zip = zip;
		this.address = address;
		this.img = img;
	}
	display() {
		return document.getElementById('sightsee').innerHTML += `
		<div class="card col-md-6 col-lg-3" >
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                 </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.city}</li>
                    <li class="list-group-item">${this.zip}</li>
                    <li class="list-group-item">${this.address}</li>
                </ul>
                <div class="card-body">
                    <p></p>
                </div>
            </div> `
	}
}

class Rest extends Loc {
    type: string;
    web: string;
    phone: string;
                            
    constructor(title: string, city: string,  zip: number,  address: string, img: string, type: string, web: string, phone: string){
    super(title, city, zip, address, img);
    this.type = type;
    this.web = web;
    this.phone = phone; }

    display() {
        return document.getElementById('restaurant').innerHTML += `
        <div class="card col-md-6 col-lg-3" >
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.city}</li>
                    <li class="list-group-item">${this.zip}</li>
                    <li class="list-group-item">${this.address}</li>
                    <li class="list-group-item">${this.type}</li>
                    <li class="list-group-item">&#x40; ${this.web}</li>
                    <li class="list-group-item">&#x260F; ${this.phone}</li>
                </ul>
                <div class="card-body">
                    <p></p>
                </div>
            </div> `
    }
}

class Events extends Loc {        
    eventDate: string;
    web: string;
    eventPrice: number;
 
    constructor(title: string, city: string,  zip: number,  address: string, img: string, eventDate: string, web: string, eventPrice: number){
        super(title, city, zip, address, img);
        this.eventDate = eventDate;
        this.web = web;
        this.eventPrice = eventPrice;
    }
    display() {
        return document.getElementById('event').innerHTML += `
        <div class="card col-md-6 col-lg-3" >
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.city}</li>
                    <li class="list-group-item">${this.zip}</li>
                    <li class="list-group-item">${this.address}</li>
                    <li class="list-group-item">${this.eventDate}</li>
                    <li class="list-group-item">&#x40; ${this.web}</li>
                    <li class="list-group-item">${this.eventPrice} &#x20AC;</li>
                </ul>
                <div class="card-body">
                    <p></p>
                </div>
            </div> `
    }
}

let church = new Loc('St\. Charles Church', 'Vienna', 1010, 'Karlsplatz 1', 'img/karl.jpg');
let zoo = new Loc('Zoo Schönbrunn', 'Vienna', 1130, 'Maxingstraße 13b', 'img/zoo.jpg');
let palace = new Loc('Schönbrunn Palace', 'Vienna', 1130, 'Schönbrunner Schloßstraße 47', 'img/palace.jpg');
let steph = new Loc('St. Stephen\'s Cathedral', 'Vienna', 1010, 'Stephansplatz 3', 'img/steph.jpg');

let thai = new Rest('Lemon Leaf Thai Restaurant', 'Vienna', 1050, 'Kettenbrückengasse 19', 'img/lemon.png', 'Thai food', 'http://www.lemonleaf.at', "+43 (1) 581 23 08");
let sixta = new Rest('SIXTA', 'Vienna', 1050, 'Schönbrunner Straße 21', 'img/sixta.png', 'Viennese', 'http://www.sixta-restaurant.at/', "+43 (1) 585 28 56");

let kris = new Events('Kris Kristofferson', 'Vienna', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'img/kristoff.jpg', 'Fr., 15.12.2019 - 20:20', 'http://kriskristofferson.com/', 28.99);
let lenny = new Events('Lenny Kravitz', 'Vienna', 1150, 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 'img/lenny.jpg', 'Sat, 08.11.2019 - 20:30','www.lennykravitz.com/', 32.79);

let places = [church,zoo,thai,sixta,kris,lenny,palace,steph];

for (let i in places) {
  places[i].display();
}
