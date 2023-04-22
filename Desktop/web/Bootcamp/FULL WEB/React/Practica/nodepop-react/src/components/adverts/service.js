import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

export const getAdvertsList = () => {
  return client.get(advertsUrl);
};

const Object = {
  valor: 'hola',
  valor2: 'adios',
};
