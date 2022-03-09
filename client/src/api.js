export const API = "http://localhost:6001/icebreakers";

//function all icebreakers
export const fetchAllIcebreakers = () => {
  return fetch(API).then((response) => response.json());
};
