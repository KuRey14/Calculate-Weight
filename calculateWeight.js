// Calculate object's mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. It's all because of different gravity. 

function calculateWeight(earthWeight, planet) {
  let weight = 0;
  switch (planet) {
    case 'Mercury':
      weight = earthWeight * 0.378;
      return weight;
      break;
    case 'Venus':
      weight = earthWeight * 0.907;
      return weight;
      break;
    case 'Mars':
      weight = earthWeight * 0.377;
      return weight;
      break;
    case 'Jupiter':
      weight = earthWeight * 2.36;
      return weight;
      break;
    case 'Saturn':
      weight = earthWeight * 0.916;
      return weight;
      break;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}

console.log(calculateWeight(100, 'Mars')) 
// Enter value and planet right here!
