
export function isPalindrome(word) {
    // Throw if input is not a string
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Empty string is not considered a palindrome for our purposes
    if (word.length === 0) {
      return false;
    }
  
    // Only alphabetic characters allowed
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    // Normalize case
    const normalized = word.toLowerCase();
    // Check palindrome by reversing
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
  }
  
  