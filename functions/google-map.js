const axios = require('axios');

export async function getGoogleMapAddress(address, language) {
    const GOOGLE_MAP_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAP_KEY}&libraries=places&language=${language}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.status === 'OK') {
      // Première occurrence
      const result = data.results[0];
      const location = result.geometry.location;
      const formattedAddress = result.formatted_address;
      const components = result.address_components;

      const streetNumber = components.find(component => component.types.includes('street_number'));
      const route = components.find(component => component.types.includes('route'));
      const city = components.find(component => component.types.includes('locality'));
      const province = components.find(component => component.types.includes('administrative_area_level_1'));
      const country = components.find(component => component.types.includes('country'));
      const postalCode = components.find(component => component.types.includes('postal_code'));

      console.log(`Adresse complète: ${formattedAddress}`);
      console.log(`Latitude: ${location.lat}, Longitude: ${location.lng}`);
      if (streetNumber && route) console.log(`Rue: ${route.long_name}, N°: ${streetNumber.long_name}`);
      if (city) console.log(`Ville: ${city.long_name}`);
      if (province) {
        console.log(`Province: ${province.long_name}`);
        console.log(`Code de la Province: ${province.short_name}`);
      }
      if (country) {
        console.log(`Pays: ${country.long_name}`);
        console.log(`Code du Pays: ${country.short_name}`);
      }
      if (postalCode) console.log(`Code Postal: ${postalCode.long_name}`);
      return {
        "street": `${route.long_name && streetNumber.long_name ? route.long_name + " " + streetNumber.long_name : formattedAddress}`,
        "fullAddress": formattedAddress,
        "position": {
          latitude: location.lat, // Exemple pour Paris
          longitude: location.lng
        },
        "state": province.short_name, // -> city code si c'est en suisse
        "zipCode": postalCode.long_name,
        "city_name": province.long_name,
        "city_code": province.short_name,
        "country_code": country.short_name,
      }
    } else {
      console.log('Geocoding failed:', data.status);
      throw "This address don't exist !";
    }
  } catch (error) {
    console.error('Erreur lors de la requête à l\'API Geocoding:', error);
  }
}