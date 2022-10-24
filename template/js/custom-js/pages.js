// Add your custom JavaScript for storefront pages here.
const insertArrowOnMenuMobile = () => {
    document.querySelectorAll('#categories-nav a[data-toggle]').forEach(element => {
        const contentArrow = document.createElement('div');
        contentArrow.classList.add('arrow-menu');
        element.appendChild(contentArrow)
    })
}
insertArrowOnMenuMobile();
(function(){
    const $btn = document.querySelector('.wmt-plus-btn');
    let $content = document.querySelector('.wmt-plus-btn').nextElementSibling;

    const people = [
        {
            name: 'Conexão Home',
            phone: '11 3294-0706',
            link: '1132940706',
            image: 'https://conexaohome.netlify.app/img/uploads/logotipo-home-png-site.png'
        },
    ];

    $btn.addEventListener('click', function(){
        $btn.style.pointerEvents = 'none';
        $btn.classList.toggle('active');
        $content.classList.toggle('active');

        if ($content.classList.contains('active')) {
            $content.style.display = 'block';
            setTimeout(function(){
                $content.style.opacity = 1;
            }, 100);
        }else{
            $content.style.opacity = 0; 
            setTimeout(function(){
                $content.style.display = 'none';
            }, 600);
        }
        setTimeout(function(){
            $btn.style.pointerEvents = 'all';
        }, 600);
    });

    window.addEventListener('load', function() {
        let $div = document.createElement('div');
        let html = people.map(function(item) {
            return `
                <div class="wmt-plus-content-card">
                    <div class="wmt-plus-content-card-image">
                        <img src="${item.image}">
                    </div>
                    <div class="wmt-plus-content-card-info">
                        <p>${item.name}</p>
                        <span>${item.phone}</span>
                    </div>
                    <div class="wmt-plus-content-card-btn">
                        <a href="https://wa.me/55${item.link}" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#ffffff" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                        </a>
                    </div>
                </div>
            `;
        });

        html.forEach(item => $div.innerHTML += item);

        document.querySelector('.wmt-plus-content').appendChild($div);
    });
})();


// Instafeed
// (window.location.pathname == '/') ? instaFeed() : null;

function instaFeed () {
    let quantidade = 4
    let instagram = 'conexao_home'

    async function startInsta(){
        const dataResponseGetMedias = await fetch('https://instafeed.hubdesolucoes.com.br/medias/username/'+instagram)
        const dataResponseGetMediasJson = await dataResponseGetMedias.json()
        const listFeeds = dataResponseGetMediasJson.medias.data
        insertImgs(listFeeds)
    }



    function insertImgs (obj){
        for (let i = 0; i < quantidade; i++) {
            /* verifica se é imagem */
            if(obj[i].media_type == "IMAGE" || obj[i].media_type == "CAROUSEL_ALBUM"){
                $("#mt-instafeed").append("<a href='#'><img src="+obj[i].media_url+"></a>");
                }
                    else{    
                    $("#mt-instafeed").append("<a href='#'><video src="+obj[i].media_url+"></video></a>");
                    }
                    
            }
        }

    startInsta()
}


// Instafeed
(window.location.pathname == '/') ? instaFeed() : null;

function instaFeed () {
    let quantidade = 4
<<<<<<< HEAD
=======
    let instagram = 'conexao_home'

    async function startInsta(){
        const dataResponseGetMedias = await fetch('https://instafeed.hubdesolucoes.com.br/medias/username/'+instagram)
        const dataResponseGetMediasJson = await dataResponseGetMedias.json()
        const listFeeds = dataResponseGetMediasJson.medias.data
        insertImgs(listFeeds)
    }



    function insertImgs (obj){
        for (let i = 0; i < quantidade; i++) {
            /* verifica se é imagem */
            if(obj[i].media_type == "IMAGE" || obj[i].media_type == "CAROUSEL_ALBUM"){
                $("#mt-instafeed").append("<a href='#'><img src="+obj[i].media_url+"></a>");
                }
                    else{    
                    $("#mt-instafeed").append("<a href='#'><video src="+obj[i].media_url+"></video></a>");
                    }
                    
            }
        }

    startInsta()
}


// Instafeed
(window.location.pathname == '/') ? instaFeed() : null;

function instaFeed () {
    let quantidade = 4
>>>>>>> 7c7acafe1af72ffc1cbc9e517d68bc49c1d3b9d9
let instagram = 'conexao_home'

async function startInsta(){
    const dataResponseGetMedias = await fetch('https://instafeed.hubdesolucoes.com.br/medias/username/'+instagram)
    const dataResponseGetMediasJson = await dataResponseGetMedias.json()
    const listFeeds = dataResponseGetMediasJson.medias.data
    insertImgs(listFeeds)
}



function insertImgs (obj){
for (let i = 0; i < quantidade; i++) {
    /* verifica se é imagem */
    if(obj[i].media_type == "IMAGE" || obj[i].media_type == "CAROUSEL_ALBUM"){
        $("#mt-instafeed").append("<a href='#'><img src="+obj[i].media_url+"></a>");
        }
            else{    
            $("#mt-instafeed").append("<a href='#'><video src="+obj[i].media_url+"></video></a>");
            }
            
    }
}

startInsta()
}