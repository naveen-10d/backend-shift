var rets = require('../../RETS/RetsProperty');
var asyncLoop = require('node-async-loop');


//find properties by city 
module.exports.findPropertiesByCity = function (city, postalcode, property, status) {
    var Properties = [];
    rets.getRetsServerDetails(city, postalcode, property, status, function (RetsData) {
        asyncLoop(RetsData.results, (Data, next) => {
            var propertyDetails = {};
            if (Data.UnparsedAddress !== '' && Data.UnparsedAddress !== undefined) {
                var LeaseAmountFrequency = Data.LeaseAmountFrequency;
                if (LeaseAmountFrequency !== '') {
                    next();
                }
                else {
                    propertyDetails.TaxLegalDescription = Data.TaxLegalDescription;
                    propertyDetails.ParcelNumber = Data.ParcelNumber;
                    propertyDetails.CountyOrParish = Data.CountyOrParish;
                    propertyDetails.City = Data.City;
                    propertyDetails.SubdivisionNum = Data.SubdivisionNum;
                    propertyDetails.SubdivisionName = Data.SubdivisionName;
                    propertyDetails.UnparsedAddress = Data.UnparsedAddress;
                    propertyDetails.YearBuilt = Data.YearBuilt;
                    propertyDetails.WaterfrontFeatures = Data.WaterfrontFeatures;
                    propertyDetails.PostalCode = Data.PostalCode;
                    propertyDetails.MlsStatus = Data.MlsStatus;

                    if (Data.ListPrice !== null && Data.ListPrice !== '') {
                        propertyDetails.ListPrice = Data.ListPrice;

                    }
                    if (Data.LivingArea !== null && Data.LivingArea !== '') {
                        propertyDetails.LivingArea = Data.LivingArea;
                    }
                    Properties.push(propertyDetails);
                    next();
                }
            }
        }, function (err) {
            if (err) {
                console.log("something went wrong");
            }
            else {
                console.log("first propertyDetail is ", Properties[0]);

            }
        })
    });
}