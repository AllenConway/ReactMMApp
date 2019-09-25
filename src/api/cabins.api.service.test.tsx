//import mockAxios from '../__mocks__/axios';
import mockAxios from "axios";
import CabinsApiService from "./cabins.api.service";
import { CabinModel } from "../@core/models/Cabin.model";

const mockCabinData: CabinModel[] = [
  {
    id: 1,
    name: "Mountain View",
    location: "Smoky Mountain West",
    bedrooms: 2,
    bathrooms: 2,
    occupancy: 4,
    description: "A beautiful cabin"
  },
  {
    id: 2,
    name: "Hillside Escape",
    location: "Smoky Mountain North",
    bedrooms: 3,
    bathrooms: 2.5,
    occupancy: 6,
    description: "A beautiful cabin"
  }
];

it("calls axios and returns cabins", async () => {
  //Arrange
  //Need to either cast to jest.Mock or import the mock version directly; either solution works
  (mockAxios.get as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({
      data: mockCabinData
    })
  );

  // Act
  const cabins = await CabinsApiService.getCabins();

  //Assert
  expect(cabins).toEqual(mockCabinData);
});
