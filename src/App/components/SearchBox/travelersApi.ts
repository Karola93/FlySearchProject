import axios from 'axios';

export const getFlights = async (): Promise<any> => {
  const response = await axios({
    method: 'GET',
    url: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=ALC&departureDate=2022-10-23&returnDate=2022-10-26&adults=1&nonStop=false',
    headers: {
      Authorization: 'Bearer 2GSmcVWezAvLGAkXQ6HBFGt8NI5G'
    }
  });
  return response;
};

export const postTravelData = async (travelData: any): Promise<any> => {
  const response = await axios({
    method: 'POST',
    url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=MAD&destinationLocationCode=ALC&departureDate=2022-10-23&returnDate=2022-10-26&adults=1&nonStop=false`,
    data: travelData,
    headers: {
      Authorization: 'Bearer 2GSmcVWezAvLGAkXQ6HBFGt8NI5G'
    },

  });
  return response.data;
};
