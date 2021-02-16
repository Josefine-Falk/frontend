export async function doFetch(url, query) {

    try {
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jvyZIc3LAqCECaDNCf4mogf9DKCkkfNsihfWC-U--xE",
                },
            body: JSON.stringify({query}),
        }

        let response = await fetch(url, options);
        let data = await response.json();

        return data;
    }
    catch(error) {
        console.log(error)
    }
}