
module RailTech {
export module ThingsToDo {

export class ThingsToDoService {

    public ticket;
    public journey;
    public events = [{
                      id: 23,
                      name: "[2 for 1] Manchester United Museum & Tour",
                      city: "Manchester",
                      travelTime: "2h 45m",
                      image: "https://www.daysoutguide.co.uk/media/2503/7865-attractionimage.jpg",
                      price: 18,
                      expires: "31 December 2016",
                      location: "Sir Matt Busby Way, Old Trafford, Manchester M16 0RA",
                      phone: "0161 868 8000",
                      description: "Re - live the clubs triumphs, tragedies & trophies in the Museum. Delve behind the scenes on the Stadium tour, visit the home changing room, sit in the dug-out & run down the tunnel to the roar of the crowd.",
                      website: "http://www.manutd.com/museum",
                      type: "Galleries & Museums,Sports & Recreation"
               },
              {
                     id: 44,
                     name: "Sightseeing Liverpool Hop-Off Opentop Tour",
                     city: "Liverpool",
                     travelTime: "2h 30m",
                     image: "https://www.daysoutguide.co.uk/media/2702/1225418-attractionimage.jpg",
                     price: 10,
                     expires: "31 December 2016",
                     location: "Canada Boulevard, Liverpool, L3 1DP",
                     phone: "0151 203 3920",
                     description: "The original Sightseeing Liverpool Tour Bus - we are the number one open top tour bus operator in Liverpool, which encompasses the sights of Liverpool and an educational tour in a clean, bright, fun, recognisable bus.\nOur open top bus tours of Liverpool depart every twenty minutes and each complete tour lasts one hour.The City Sightseeing Liverpool bus tour encompasses 14 stops starting at the famous Liver Buildings.Between stops you can experience sights like the war museum in Chapel Street or visit Mathew Street, the home of the world famous Cavern Club where the Beatles first played to excited local crowds. ",
                     website: "http://www.city-sightseeing.com/tours/united-kingdom/liverpool.htm",
                     type: "Tours & Guided Walks"
              },
              {
                     id: 12,
                     name: "Chester Zoo",
                     city: "Chester",
                     travelTime: "2h 3m",
                     image: "https://www.daysoutguide.co.uk/media/426478/chesterzoo.jpg",
                     price: 21.50,
                     expires: "",
                     location: "Upton-by - Chester, Chester CH2 1EU",
                     phone: "01244 380 280",
                     description: "With 12,000 animals from 400 different species in 125 acres of award-winning zoological gardens, Chester Zoo is one of the world's top zoos and the UK's number one wildlife attraction. \n\nChester Zoo is easy to reach by train and you can save on your travel and zoo admission with a Combination Ticket.Buy a combination ticket from your local National Rail station when you buy your train ticket (or separately if you already have a valid rail ticket) and it will include the return bus link from Chester station to the zoo AND your zoo admission in one discounted price.",
                     website: "http://www.chesterzoo.org/",
                     type: "Zoos, Farms & Wildlife"
              },
              {
                     id: 11,
                     name: "Liverpool Cathedral",
                     city: "Liverpool",
                     travelTime: "2h 35m",
                     image: "https://www.daysoutguide.co.uk/media/2776/1300967-attractionimage.jpg",
                     price: 5.50,
                     expires: "31 December 2016",
                     location: "Liverpool Cathedral, St James Mount, Liverpool L1 7AZ",
                     phone: "0151 709 6271",
                     description: "Spectacular views from the top of Britain's biggest Cathedral and great interactive 'Great Space' tour! Check website for opening times and for the few occasions when events restrict some of the elements of the tour.",
                     website: "http://www.liverpoolcathedral.org.uk/",
                     type: "Landmarks & Historical Sites"
              },
              {
                     id: 5,
                     name: "LEGOLAND Discovery Centre Manchester",
                     city: "Manchester",
                     travelTime: "2h 55m",
                     image: "https://www.daysoutguide.co.uk/media/3007/1609607-attractionimage.jpg",
                     price: 18.95,
                     expires: "31 December 2016",
                     location: "LEGOLAND® Discovery Centre Manchester, Barton Square, The Trafford Centre, Manchester, M17 8AS",
                     phone: "0844 844 8181",
                     description: "Explore the ultimate indoor LEGO® playground, the UK's only LEGOLAND® Discovery Centre, located at Manchester's intu Trafford Centre!\nDiscover how LEGO bricks are made in Professor Brick's Factory Tour, then zap the skeletons in the Kingdom Quest laser ride and explore all of the North West's famous buildings in MINILAND.Sing karaoke with the LEGO Friends, build and test a racing car in LEGO Racers and reach out and touch the stars as you join the LEGO Legends of Chima on a 4D movie adventure!\nPlus don't forget to earn your LEGO City Forest Pursuit Drivers Licence, become a fireman in our soft play area, meet the Master Model Builder and much more!\nOur indoor LEGOLAND Discovery Centre is ideal for children aged 3- 10 years and all attractions inside the centre are included in the admission price.\nLEGO, the LEGO logo and LEGOLAND are trademarks of the LEGO Group.©2015 The LEGO Group.",
                     website: "http://www.legolanddiscoverycentre.co.uk/",
                     type: "Theme & Adventure Parks"
              }];

    static $inject = [
        "$http",
        "$q",
        "$timeout"];

    constructor(
            private $http,
            private $q,
            private $timeout) {

    }

    public findThingsToDo() {

        var deferred = this.$q.defer();

        this.$timeout(() => {
            deferred.resolve(this.events);
        },1500);

        return deferred.promise;
    }

    public getThingToDo(id) {

        var deferred = this.$q.defer();

        this.$timeout(() => {

            for (var i = 0; i < this.events.length; i++) {
                if(this.events[i].id.toString() === id) {
                    deferred.resolve(this.events[i]);
                }
            }

            deferred.reject();

        }, 500);

        return deferred.promise;
    }
}

angular.module('thingsToDo')
    .service('thingsToDo.thingsToDoService', ThingsToDoService)


} // Ticketing
} // RailTech