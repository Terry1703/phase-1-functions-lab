// Define the distanceFromHqInBlocks function
function distanceFromHqInBlocks(location) {
  const headquarters = 42;
  
  const distance = Math.abs(location - headquarters);
  return distance;
}

// Export the function to be accessible from other modules
module.exports = {
  distanceFromHqInBlocks
};
// Define the distanceFromHqInFeet function
function distanceFromHqInFeet(location) {
  // Headquarters is at street number 42
  const headquarters = 42;
  
  // Conversion factor: 1 block = 264 feet
  const feetPerBlock = 264;
  
  // Calculate the distance in blocks
  const blocks = Math.abs(location - headquarters);
  
  // Calculate the distance in feet
  const distanceInFeet = blocks * feetPerBlock;
  
  // Return the calculated distance in feet
  return distanceInFeet;
}

// Export the function to be accessible from other modules
module.exports = {
  distanceFromHqInFeet
};

// Define the distanceTravelledInFeet function
function distanceTravelledInFeet(start, destination) {
  // Conversion factor: 1 block = 264 feet
  const feetPerBlock = 264;
  
  // Calculate the distance in blocks
  const blocks = Math.abs(destination - start);
  
  // Calculate the distance in feet
  const distanceInFeet = blocks * feetPerBlock;
  
  // Return the calculated distance in feet
  return distanceInFeet;
}

// Export the function to be accessible from other modules
module.exports = {
  distanceTravelledInFeet
};



function calculatesFarePrice(start, destination) {
  // Calculate the distance in feet
  const distanceInFeet = Math.abs(destination - start) * 264; // Assuming 1 mile = 5280 feet

  // Check if distance exceeds 2500 feet
  if (distanceInFeet > 2500) {
      return 'cannot travel that far'
  }

  // Calculate the fare based on the distance
  if (distanceInFeet <= 400) {
      return 0; // Free sample
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const distanceInFeetAfter400 = distanceInFeet - 400;
      return distanceInFeetAfter400 * 0.02; // $0.02 per foot after 400 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare of $25 for distance between 2001 and 2500 feet
  }
}

module.exports = calculatesFarePrice;
