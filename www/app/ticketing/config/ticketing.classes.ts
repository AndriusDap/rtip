
module RailTech {
export module Ticketing {

export class SearchStation {
    public display: string;
    public value: string;
}

export class Journey {
    constructor(
        public departureDate: Date,
        public arrivalDate: Date,
        public lengthStr: string,
        public type: string,
        public price: number) {

    }
}

}
}