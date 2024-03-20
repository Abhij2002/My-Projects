const openPopupBtn = document.getElementById("button");
const display=document.getElementById("popupContainer");
openPopupBtn.addEventListener("click",()=>{
    display.style.display="flex";
})
const closePopupBtn = document.getElementById("closePopupBtn");
closePopupBtn.addEventListener("click",()=>{
    display.style.display="none";
})
const imgsrc = document.getElementById("input1");
const caption = document.getElementById("input2");
const create = document.getElementById("submit");
const profilename = "abhi_jangra_19";
create.addEventListener("click",()=>
{
    const list = document.createElement("li");
    list.style.listStyle="none";
    const post = document.getElementById("post");
    const profile = document.createElement("img")
    profile.src="profile.png";
    profile.style.borderRadius="5rem";
    profile.style.width="2rem";
    profile.style.height="2rem";
    profile.style.marginTop="3rem"
    profile.style.marginLeft='-1rem';
    const pname = document.createElement("h5");
    pname.textContent=profilename;
    pname.style.display="inline-block";
    pname.style.fontFamily="cursive";
    pname.style.position="absolute";
    pname.style.marginTop="3.5rem";
    pname.style.marginLeft="0.5rem";
    const button = document.createElement("button");
    button.textContent="⋮";
    button.style.fontWeight="600";
    button.style.fontSize="1.5rem";
    button.style.position="absolute";
    button.style.marginTop="2.6rem";
    button.style.marginLeft="18rem";
    button.style.cursor="pointer";
    const br = document.createElement("br");
    const img = document.createElement("img");
    img.style.height="20rem";
    img.style.width="21.5rem";
    img.style.marginTop="1rem";
    img.style.marginLeft="-0.5rem";
    img.src=imgsrc.value;
    const like = document.createElement("img");
    like.style.height="1.5rem";
    like.style.width="1.5rem";
    like.style.marginTop="1rem";
    like.style.marginLeft="0rem";
    like.src="Vector.png";
    const comment = document.createElement("img");
    comment.style.height="1.5rem";
    comment.style.width="1.5rem";
    comment.style.marginTop="1rem";
    comment.style.marginLeft="1rem";
    comment.src="comment.png";
    const share = document.createElement("img");
    share.style.height="1.5rem";
    share.style.width="1.5rem";
    share.style.marginTop="1rem";
    share.style.marginLeft="1rem";
    share.src="share.png";
    const bookmark = document.createElement("img");
    bookmark.style.height="1.5rem";
    bookmark.style.width="1.5rem";
    bookmark.style.marginTop="1rem";
    bookmark.style.marginLeft="11.5rem";
    bookmark.src="bookmark.png";
    const captionname = document.createElement("h5");
    captionname.style.fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    captionname.style.fontWeight="500";
    captionname.textContent=profilename+" "+caption.value;
    const deletePopUp = document.createElement("button");
    deletePopUp.style.position="absolute";
    deletePopUp.style.height="2.5rem";
    deletePopUp.style.width="5rem";
    deletePopUp.style.borderRadius="1rem";
    deletePopUp.style.backgroundColor="#fff";
    deletePopUp.style.marginTop="-30rem";
    deletePopUp.style.marginLeft="15rem";
    deletePopUp.style.zIndex="10";
    deletePopUp.textContent="Delete";
    deletePopUp.style.fontWeight="400";
    deletePopUp.style.fontSize="1rem";
    deletePopUp.style.cursor="pointer";
    deletePopUp.style.borderStyle="solid";
    deletePopUp.style.borderWidth="0.05rem";
    deletePopUp.style.boxShadow="0rem 0rem 0.5rem";
    deletePopUp.style.display="none";
    deletePopUp.style.padding="0.5rem";
    deletePopUp.style.fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
    post.appendChild(list);
    list.appendChild(profile);
    list.appendChild(pname);
    list.appendChild(button);
    list.appendChild(br);
    list.appendChild(img);
    list.appendChild(br);
    list.appendChild(like);
    list.appendChild(comment);
    list.appendChild(share);
    list.appendChild(bookmark);
    list.appendChild(captionname);
    list.appendChild(deletePopUp)
    display.style.display="none";



    button.addEventListener("click",()=>
    {
        deletePopUp.style.display="flex";
    })

    deletePopUp.addEventListener("click",()=>
    {
        post.removeChild(list);
    })
})