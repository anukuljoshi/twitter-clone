

export const apiGETQuery = async (key, endpoint) => {
    const url = `http://127.0.0.1:8000/api/${endpoint}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export const apiGETMutate = async ({ endpoint }) => {
    const url = `http://127.0.0.1:8000/api/${endpoint}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export const apiPOSTMutate = async ({ endpoint, payload }) => {
    const url = `http://127.0.0.1:8000/api/${endpoint}`;

    const config = {
        'method' : 'POST',
        'headers' : {
            'Content-Type' : 'application/json'
        },
        'body' : JSON.stringify(payload)
    }
    const res = await fetch(url, config);
    const data = await res.json();
    return data;
}


// useQuery functions
// export const getTweetList = async (key, endpoint) => {
//     const url = `http://127.0.0.1:8000/api/${endpoint}`;

//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }


// export const fetchTweetData = async (key, endpoint) => {
//     const url = `http://127.0.0.1:8000/api/${endpoint}`;

//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }

// useMutation functions
// export const setTweetLike = async ({endpoint}) => {
//     const url = `http://127.0.0.1:8000/api/${endpoint}`;

//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }

// export const tweetCreate = async ({ endpoint, newTweet }) => {
//     const url = `http://127.0.0.1:8000/api/${endpoint}`;

//     const config = {
//         'method' : 'POST',
//         'headers' : {
//             'Content-Type' : 'application/json'
//         },
//         'body' : JSON.stringify(newTweet)
//     }
//     const res = await fetch(url, config);
//     const data = await res.json();
//     return data;
// }
