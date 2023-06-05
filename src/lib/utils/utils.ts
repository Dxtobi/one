import PocketBase from 'pocketbase';


export const pocketBaseInstance = new PocketBase('http://127.0.0.1:8090/');




export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
}


export function searchArray(array, searchString) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchString) {
      return true;
    }
  }
  return false;
}

export const generateUsername = (name: string): string => {
    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const randomNumber = Math.floor(Math.random() * 10000);
  
   
      return `${lastName.toLowerCase()}${randomNumber}`;
    
  }

  export const imgLink = (collection_name, id, imageUrl):string => {
    return `http://127.0.0.1:8090/api/files/${collection_name}/${id}/${imageUrl}`
}


export async function getCountryCode() {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const countryCode = data.country_calling_code;
  
      console.log("Country Code:", countryCode);
      return countryCode;
    } catch (error) {
      console.error("Error fetching country code:", error);
    }
  }
  
  // Call the function to get the country code

  