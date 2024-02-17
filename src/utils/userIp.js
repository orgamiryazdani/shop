import toast from "react-hot-toast";

export default async function getUserIP() {
    const apiUrl = 'https://api.ipify.org?format=json';
    const ipResponse = await fetch(apiUrl);
    const ipData = await ipResponse.json();
    const userIp = ipData.ip;
    const url = `https://api.iplocation.net/?ip=${userIp}`;
    const response = await fetch(url);
    const country = await response.json();

    if (country.country_code2 == 'IR') {
        toast(
            <div>
                <span className="font-bold text-lg">vpn خود را روشن کنید !</span>
                <br />
                <span>شما به اینترنت داخل ایران وصل هستید و به احتمال زیاد vpn شما خاموش است لطفا آن را روشن کنید</span>
            </div>
            ,
            {
                duration: 20000,
            }
        )
    }
}