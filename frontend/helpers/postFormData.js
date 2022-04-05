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

export default async function postFormData(address, form, event){

    let response
    var csrftoken = getCookie('csrftoken')
    event.preventDefault();
    event.stopPropagation();

    let jsonData = {}

    let data = new FormData(form)

    data.forEach(function(value, key){
        jsonData[key] = value;
    });

    jsonData = JSON.stringify(jsonData);

    response = await fetch(address, {
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Accept': 'application/json',
            'X-CSRFToken':csrftoken,
          },
        body: jsonData
    }).catch((e) => {
        console.log(e)
    })

    return response
}