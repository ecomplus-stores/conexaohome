// Add your custom JavaScript for storefront pages here.


/* Whats */
document.addEventListener("DOMContentLoaded", function(event) {
                    const $btn = document.querySelector('.wmt-plus-btn');
                    let $content = document.querySelector('.wmt-plus-btn').nextElementSibling;

                     const people = [
                {
                    name: 'Time Comercial',
                    phone: '98928-5260',
                    link: '989285260',
                    image: 'https://mtsolucoes.com.br/images/comercial-whats.png'
                }
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
                                        <img src="https://mtsolucoes.com.br/images/comercial-whats.png">
                                    </div>
                                    <div class="wmt-plus-content-card-info">
                                        <p>Time Comercial</p>
                                        <span>98928-5260</span>
                                    </div>
                                    <div class="wmt-plus-content-card-btn">
                                        <a href="https://wa.me/55989285260" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#ffffff" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                `;
                        });
            
                        html.forEach(item => $div.innerHTML += item);
            
                        document.querySelector('.wmt-plus-content').appendChild($div);
                    });
                });
