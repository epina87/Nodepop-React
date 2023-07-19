import md5 from 'md5';
//import { Result } from '../../Consulta.js';

window.config = JSON.stringify(process.env);

export const getCall = async (detail) => {
  const timestamp = +new Date();
  const md5Key = md5(
    `${timestamp}${process.env.REACT_APP_API_KEY_PRIVATE}${process.env.REACT_APP_API_KEY_PUBLIC}`,
  );

  const Url = `${process.env.REACT_APP_API_BASE_URL}/v1/public/${detail}?ts=${timestamp}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${md5Key}`;

  try {
    //return(Result);
        
     const response = await fetch(Url);
     const result = await response.json()
     return result.data;
  } catch (error) {
    throw new Error(error);
  }
};




export const getComic = async (detail="comics",Api_URL) => {
    const timestamp = +new Date();
    const md5Key = md5(
        `${timestamp}${process.env.REACT_APP_API_KEY_PRIVATE}${process.env.REACT_APP_API_KEY_PUBLIC}`,
      );
   
    

    const Url = `${Api_URL}?ts=${timestamp}&apikey=${process.env.REACT_APP_API_KEY_PUBLIC}&hash=${md5Key}`;

    

   
    try {
      //return(Result);
          
       const response = await fetch(Url);
       const result = await response.json()
       return result.data;
    } catch (error) {
      throw new Error(error);
    }
  };

const Result = {
    offset: 0,
    limit: 20,
    total: 1562,
    count: 20,
    results: [
      {
        
          id: 1011334,
  
          modified: '2014-04-29T14:18:17-0400',
  
          name: '3-D Man',
  
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg',
          },
       
      },
      {
        
          id: 1017100,
  
          modified: '2013-09-18T15:54:04-0400',
  
          name: 'A-Bomb (HAS)',
  
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
            extension: 'jpg',
          },
       
      },
      {
        
          id: 1009144,
  
          modified: '2013-10-17T14:41:30-0400',
  
          name: 'A.I.M.',
  
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
            extension: 'jpg',
          },
        
      },
  
      {
        
          id: 1010699,
  
          modified: '1969-12-31T19:00:00-0500',
  
          name: 'Aaron Stack',
  
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
            extension: 'jpg',
          },
       
      },
  
      {
        
          id: 1009146,
  
          modified: '2012-03-20T12:32:12-0400',
  
          name: 'Abomination (Emil Blonsky)',
  
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
            extension: 'jpg',
          },
        
      },
    ],
  };
