// Aplayer
const aplayer = document.querySelector('#aplayer')
if(aplayer){
    let dataSong = aplayer.getAttribute("data-song")
    dataSong= JSON.parse(dataSong)

    let dataSinger = aplayer.getAttribute("data-singer")
    dataSinger = JSON.parse(dataSinger)

const ap = new APlayer({
    container: aplayer,
    audio: [{
        name: dataSong.title,
        artist: dataSinger.fullName,
        url: dataSong.audio,
        cover: dataSong.avatar
    }],
    autoplay:true,
    volume: 0.8
});


    const avatar = document.querySelector(".singer-detail .inner-avatar")

    ap.on('play',()=>{
        avatar.computedStyleMap.animationPlayState = "running"
    })

    
    ap.on('pause',()=>{
        avatar.computedStyleMap.animationPlayState = "paused"
    })
}
// End Aplayer

// button Like
const btnLike = document.querySelector("[btn-like]")
if(btnLike){
    btnLike.addEventListener("click",()=>{
        const idSong = btnLike.getAttribute("btn-like")
        const isActive = btnLike.classList.contains("active")
        
        const typeLike = isActive? "dislike": "like"

        const link = `/songs/like/${typeLike}/${idSong}`

        const option ={
            method:"PATCH"
        }
        fetch(link,option)
            .then(res => res.json())
            .then(data=>{
                const span = btnLike.querySelector("span")
                span.innerHTML = `${data.like} Like`

                btnLike.classList.toggle("active")
            })
    })
}
// End button Like

// button Like
const btnFavorite = document.querySelector("[btn-favorite]")
if(btnFavorite){
    btnFavorite.addEventListener("click",()=>{
        const idSong = btnFavorite.getAttribute("btn-favorite")
        const isActive = btnFavorite.classList.contains("active")
        
        const typeFavorite = isActive? "unfavorite": "favorite"

        const link = `/songs/favorite/${typeFavorite}/${idSong}`

        const option ={
            method:"PATCH"
        }
        fetch(link,option)
            .then(res => res.json())
            .then(data=>{
                if(data.code==200){
                
                    btnFavorite.classList.toggle("active")
                }
                
            })
    })
}
// End button Like