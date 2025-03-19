// Aplayer
const aplayer = document.querySelector('#aplayer')
if(aplayer){
    let dataSong = aplayer.getAttribute("data-song")
    dataSong= JSON.parse(dataSong)

    let dataSinger = aplayer.getAttribute("data-singer")
    dataSinger = JSON.parse(dataSinger)

const ap = new APlayer({
    container: aplayer,
    lrcType:1,
    audio: [{
        name: dataSong.title,
        artist: dataSinger.fullName,
        url: dataSong.audio,
        cover: dataSong.avatar,
        lrc: dataSong.lyrics
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

    ap.on("ended",()=>{
        const link =`/songs/listen/${dataSong._id}`
        const option={
            method: "PATCH"
        }
        fetch(link,option)
            .then(res => res.json())
            .then(data=>{
                const listen = document.querySelector(".inner-detail .inner-listen span")
                console.log(listen)
                listen.innerHTML=`${data.listen} listens`
            })
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
const btnFavoriteList = document.querySelectorAll("[btn-favorite]")
if(btnFavoriteList.length>0){
    btnFavoriteList.forEach(btnFavorite=>{
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
    })
    
}
// End button Like

// Search Suggest
const boxSearch = document.querySelector(".box-search")
if(boxSearch){
    const input = boxSearch.querySelector("input[name='keyword']")
    input.addEventListener("keyup",()=>{
        const keyword = input.value
        
        const link = `/search/suggest?keyword=${keyword}`

        const boxSuggest = boxSearch.querySelector(".inner-suggest")
        fetch(link)
            .then(res => res.json())
            .then(data=>{
                const songs = data.songs

                if(songs.length>0){
                    boxSuggest.classList.add("show")
                    const htmls = songs.map(song =>{
                        return`
                            <a class="inner-item" href="/songs/detail/${song.slug}">
                                <div class="inner-image"><img src="${song.avatar}"/></div>
                                <div class="inner-info">
                                    <div class="inner-title">${song.title}</div>
                                    <div class="inner-singer"><i class="fa-solid fa-microphone-lines"></i> ${song.infoSinger.fullName}</div>
                                </div>
                            </a>
                        `
                    })
                    const boxList = boxSuggest.querySelector(".inner-list")
                    boxList.innerHTML = htmls.join("")

                }
                else{
                    boxSuggest.classList.remove("show")
                }
            })
    })

}
// End Search Suggest