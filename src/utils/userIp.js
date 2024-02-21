export default async function getUserIP() {
    const apiUrl = 'https://api.ipify.org?format=json';
    const ipResponse = await fetch(apiUrl);
    const ipData = await ipResponse.json();
    const userIp = ipData.ip;
    const url = `https://api.iplocation.net/?ip=${userIp}`;
    const response = await fetch(url);
    const country = await response.json();

    if (country.country_code2 == 'IR') {
        return true;
    } else {
        return false
    }
}