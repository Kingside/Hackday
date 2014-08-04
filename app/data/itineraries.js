define([], function() {
	var itineraries = [
    {
        "OriginLocation": "DFW",
        "DestinationLocation": "BNA",
        "OpposingTeam": "Duke",
        "City": "Durham",
        "State": "NC",
        "FareInfo": [
            {
            	"Airlines": "Delta",
                "CurrencyCode": "USD",
                "LowestNonStopFare": 280.7,
                "LowestFare": 278.7,
                "DepartureDateTime": "2014-09-13T00:00:00",
                "ReturnDateTime": "2014-09-18T00:00:00",
                "DepartureTravelTime": "4h 14m",
                "DepartureStops": "1 stop",
                "ReturnTravelTime": "7h 11m",
                "ReturnStops": "1 stop",
                "TravelocityLink": "http://www.travelocity.com/Flights-Search?trip=roundtrip&leg1=from:Dallas,TX,UnitedStates(DFW-AllAirports),to:Raleigh,NC,UnitedStates(RDU-Raleigh-DurhamIntl.),departure:09/12/2014TANYT&leg2=from:Raleigh,NC,UnitedStates(RDU-Raleigh-DurhamIntl.),to:Dallas,TX,UnitedStates(DFW-AllAirports),departure:09/13/2014TANYT&passengers=children:0,adults:1,seniors:0,infantinlap:Y&mode=search",
                "Links": [
                	{
                		"rel": "travelocity",
                		"href": "http://www.travelocity.com/Flights-Search?trip=roundtrip&leg1=from:Dallas,TX,UnitedStates(DFW-AllAirports),to:Raleigh,NC,UnitedStates(RDU-Raleigh-DurhamIntl.),departure:09/12/2014TANYT&leg2=from:Raleigh,NC,UnitedStates(RDU-Raleigh-DurhamIntl.),to:Dallas,TX,UnitedStates(DFW-AllAirports),departure:09/13/2014TANYT&passengers=children:0,adults:1,seniors:0,infantinlap:Y&mode=search"
                	},
                    {
                        "rel": "shop",
                        "href": "https://api.test.sabre.com/v1/shop/flights?origin=DFW&destination=BNA&departuredate=2014-09-13&returndate=2014-09-18"
                    }
                ]
            }
        ],
        "Links": [
            {
                "rel": "self",
                "href": "https://api.test.sabre.com/v1/shop/flights/fares?origin=DFW&destination=BNA&lengthofstay=5&departuredate=2014-09-13&pointofsalecountry=US"
            },
            {
                "rel": "linkTemplate",
                "href": "https://api.test.sabre.com/v1/shop/flights/fares?origin=<origin>&destination=<destination>&lengthofstay=<lengthofstay>&departuredate=<departuredate>&minfare=<minfare>&maxfare=<maxfare>&pointofsalecountry=<pointofsalecountry>"
            }
        ]
    }
];

	return itineraries;

});