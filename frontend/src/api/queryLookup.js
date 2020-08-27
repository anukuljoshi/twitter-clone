function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

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
    const csrftoken = getCookie('csrftoken');

    const config = {
        'method' : 'POST',
        'headers' : {
            'Content-Type' : 'application/json',
            'X-CSRFToken': csrftoken
        },
        'body' : JSON.stringify(payload)
    }
    const res = await fetch(url, config);
    const data = await res.json();
    return data;
}

export const apiPUTMutate = async ({ endpoint, payload }) => {
    const url = `http://127.0.0.1:8000/api/${endpoint}`;
    const csrftoken = getCookie('csrftoken');

    const config = {
        'method' : 'PUT',
        'headers' : {
            'Content-Type' : 'application/json',
            'X-CSRFToken': csrftoken
        },
        'body' : JSON.stringify(payload)
    }
    const res = await fetch(url, config);
    const data = await res.json();
    return data;
}
