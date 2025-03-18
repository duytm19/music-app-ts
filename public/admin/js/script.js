//Upload Image
const uploadImage= document.querySelector("[upload-image]")
if(uploadImage){
    const uploadImageInput = document.querySelector("[upload-image-input]")
    const uploadImagePreview= document.querySelector("[upload-image-preview]")
    const closeImagePreview=document.querySelector("[delete-image-preview]")
    uploadImageInput.addEventListener("change",(e)=>{ // e - element catch event of uploadImageInput
        const file = e.target.files[0] // e.target = uploadImageInput
        if(file){
            uploadImagePreview.src= URL.createObjectURL(file)
            closeImagePreview.classList.remove('delete-hidden');
            closeImagePreview.classList.add('delete-visible');
        }
    })
    closeImagePreview.addEventListener("click", ()=>{
        uploadImageInput.value=""
        uploadImagePreview.src=""
        closeImagePreview.classList.remove('delete-visible');
        closeImagePreview.classList.add('delete-hidden');
    })
}
//End Upload Image

//Upload Audio
const uploadAudio= document.querySelector("[upload-audio]")
if(uploadImage){
   
    const uploadAudioInput = uploadAudio.querySelector("[upload-audio-input]")
    const uploadAudioPlay= uploadAudio.querySelector("[upload-audio-play]")
    console.log(uploadAudioPlay)
    const source = uploadAudio.querySelector("source")
    uploadAudioInput.addEventListener("change",(e)=>{ // e - element catch event of uploadImageInput
        const file = e.target.files[0] // e.target = uploadImageInput
        if(file){
            source.src= URL.createObjectURL(file)
            uploadAudioPlay.load()
        }
    })

}
//End Upload Audio