
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  


 export function validateAfricanPhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^(\+|00)([1-9]\d{0,2})(\d{6,14})$/;
    const africanCountryCodes = new Set([
      "213", "216", "218", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230",
      "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244",
      "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258",
      "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "27", "290", "291", "297",
      "298", "299"
    ]);
    const match = phoneRegex.exec(phoneNumber);
    if (!match) {
      return false;
    }
    const [, prefix, countryCode, nationalNumber] = match;
   
    return true;
  }
  

export function validateUserName(userName: string): boolean {
    const userNameRegex = /^[a-zA-Z0-9_-]{3,10}$/;
    return userNameRegex.test(userName);
  }

export  function validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#_.$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  }
  