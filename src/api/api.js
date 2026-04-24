 const fetchPosts= async (page)=>{
  const res=await fetch(`http://localhost:3000/posts?_page=${page}&_per_page=5`);

  const postdata= await res.json();
  return postdata
}

 const addpost = async(post)=>{
    const res=await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify(post)
    })
     if (!res.ok) {
    throw new Error("Failed to post"); //-->> set isposterror=True -->> posterror="Failed to post"
  }
    return res.json();
}

const fetchTags= async()=>{
  const res=await fetch(`http://localhost:3000/tags`);
  const tagdata= await res.json();
  return tagdata
    
}

const updatePost=async(post)=>{
  const res=await fetch(`http://localhost:3000/posts/${post.id}`,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(post)
  });

  if(!res.ok){
    throw new Error("Failed to update")
  }
  return res.json()


}

export {fetchPosts,addpost , fetchTags, updatePost}