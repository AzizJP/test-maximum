export interface CardsProps {
  cars: Array<Car>;
}

export interface Car {
  _id: string;
  photobank: { imgs: Array<{ _id: string; url: string }> };
  feedData: {
    brandName: string;
    modelName: string;
    equipmentName: string;
    equipmentVariantTransmission: string;
    equipmentVariantTransmissionType: string;
    equipmentVariantFuelType: string;
    modelYear: number;
    vin: string;
    price: number;
    engine: {
      engineCapacity: number;
      engineTransmission: string;
      enginePower: number;
    };
  };
}
