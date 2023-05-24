export interface CardsProps {
  cars: Array<Car>;
}

export interface Car {
  _id: string;
  photobank: { imgs: Array<{ url: string }> };
  feedData: {
    brandName: string;
    modelName: string;
    equipmentName: string;
    equipmentVariantTransmission: string;
    engine: {
      engineCapacity: number;
      engineTransmission: string;
      enginePower: number;
    };
  };
}
