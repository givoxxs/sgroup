async function fetchAPI() {
    let data;
    try {
        data = await fetch('https://jsonplaceholder.org/posts')
        data = await data.json()
        console.log(data)
        
        const result = document.querySelector('.container')
        const result_child = data.map(function(item) {
            let content = maxlength(item.content)
            return `
            <div class="item">
                <div class="img">
                    <img src="${item.image}" alt="Thumbnail">
                    <div class="public">
                        <span class="tag">${item.status}</span>
                    </div>
                </div>
                <div class="about">
                    <h3 class="title">${item.title}</h3>
                    <div class="content">
                        <p>${content}</p>
                    </div>
                </div>
                
                <div class="time">
                    <div class="time-tag">
                        <span class="tag">${item.category}}</span>
                    </div>
                    <p><strong>Published at:</strong>${item.publishedAt}</p>
                    <p><strong>Last updated:</strong>${item.updatedAt}</p>
                </div>
            </div> 
            `
        })  
        
        result.innerHTML = result_child.join('')
    } catch (error) {
        console.error('Error fetching data:', error);
   } 
}

fetchAPI()

function maxlength(text) {
    if (text.length>430)
    {   console.log(1);
            return text.substring(0,430)+ ' ...';
    }
    else {
        console.log(2)
    return text;
    }
}