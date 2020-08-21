export const lookup = async (endpoint, method) => {
    const url = `http://127.0.0.1:8000/api/${endpoint}`;
    const config = {
        'method' : method,
        'headers' : {
            'Content-Type' : 'application/json',
        },
    }

    const res = await fetch(url, config);
    const data = await res.json();
    return data

}

export const queryLookup = async (key, endpoint) => {
    const url = `http://127.0.0.1:8000/api/${endpoint}`;

    const res = await fetch(url);
    const data = await res.json();
    return data

}