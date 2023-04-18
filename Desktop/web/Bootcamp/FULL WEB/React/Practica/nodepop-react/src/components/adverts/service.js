import client from "../../api/client";

const advetsUrl = '/api/v1/adverts'

function getAdvertsList (){
    return client.get(getAdvertsList); // get devuelve una promesa para consumirlo en el componente.
};

export default getAdvertsList;