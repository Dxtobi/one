
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  


 export function validateAfricanPhoneNumber(phoneNumber: string): boolean {
      // Remove any non-digit characters from the phone number
      const cleanedNumber = phoneNumber.replace(/\D/g, "");
    
      // Check if the cleaned number is 10 digits long (adjust for different formats if needed)
      if (cleanedNumber.length !== 10) {
        return false;
      }
    
      // Check if the first digit is valid for the country (adjust as per your requirements)
      const firstDigit = cleanedNumber.charAt(0);
      if (firstDigit !== "0" && firstDigit !== "1") {
        return false;
      }
    
      // Additional validation rules can be added here based on your specific requirements
      
      // If all checks pass, the phone number is considered valid
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
  

  