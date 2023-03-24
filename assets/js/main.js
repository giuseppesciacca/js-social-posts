const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "09-03-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": null,
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "04-03-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

const containerEl = document.getElementById('container');

//for each element in array, create a post
posts.forEach(post => {
    containerEl.innerHTML += postMarkUp(post);
});

//like ai post e i post piaciuti in un array
const likeEl = document.querySelectorAll('.js-like-button')
console.log(likeEl);
const likedPost = [];
likeEl.forEach(like => {
    like.addEventListener('click', function (e) {
        e.preventDefault()
        like.classList.add('like-button--liked');
        console.log('click');
    })
})










/* FUNCTIONS */
function postMarkUp(post) {
    const postMarkUp = `
    <div class="post" id="${post.id}">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
                    </div>

                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${post.created}</div>
                    </div>
                </div>
            </div>
            <!-- ./post__header-->

            <div class="post__text"> 
               ${post.content}
            </div>
            <!-- ./post__text-->

            <div class="post__image">
                <img src="${post.media}" alt="">
            </div>
            <!-- ./post__image-->

            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>

                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div>
                <!-- ./likes js-likes -->
            </div>
            <!-- ./post__footer -->
        </div>
        <!-- ./post -->
    </div>
    <!-- ./container -->`;


    return postMarkUp;
}