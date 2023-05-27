

export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
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