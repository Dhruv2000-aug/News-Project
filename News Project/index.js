console.log('this is my indxjs file');

// 8e8cef6b79fd474e86e0122a30b94d56

//initialized the news api parameters
let source = 'bbc-news';
let apiKey = '8e8cef6b79fd474e86e0122a30b94d56';
// http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey};

//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an AJAX xhr request
const xhr = new XMLHttpRequest();
xhr.open('GET', `index.txt`, true);

xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index) {
            
        
        
            
            let news = `<div class="card">
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
            <b>Breaking News ${index+1}  :</b>${element["title"]}
                  </button>
        </h2>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body">
            ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more here</a>"
                </div>
    </div>
</div>`;

newsHtml += news;
});
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('some error occured');
    }
}

xhr.send();

let news = `<div class="card">
    <div class="card-header" id="headingOne">
        <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                  </button>
        </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
    </div>
</div>`
