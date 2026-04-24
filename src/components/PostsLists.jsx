import { useState } from 'react'
import { addpost,fetchPosts,fetchTags, updatePost } from '../api/api.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

//useQuery-->> to fetch data
//useMutation-->> to post data --> useQueryClient for refresh data on success

const PostsLists = () => {

const [page, setpage]=useState(1)
const queryClient = useQueryClient();

    const {data:postData,isLoading, error, isError}= useQuery({
        queryKey:["Posts",{page}],
        queryFn:()=>fetchPosts(page),
        gcTime:1000*5,
        refetchInterval:1000*4
    })

    const {data:tagsdata}= useQuery({
        queryKey:["tags"],
        queryFn:fetchTags,
        staleTime:Infinity
    })

    const{mutate,isError:isposterror,isPending,error:posterror,reset} =useMutation({
        mutationFn: addpost,
        onSuccess: () => {
            queryClient.invalidateQueries(["Posts"]); // REFRESH AUTOMATICALLY WHEN NEW DATA RCV
        }
    })

    const {mutate:editPost}=useMutation({
        mutationFn:updatePost,
        onSuccess:()=>{
            queryClient.invalidateQueries(["Posts"])
        }
    })

    const handlesubmit=(e)=>{
        e.preventDefault();

        const formData= new FormData(e.target)
        const title=formData.get("title")
        const tags=Array.from(formData.keys()).filter(
            (key)=>formData.get(key)==='on'
        )
        if(!title || !tags) return

        mutate({  title,tags})

        e.target.reset()
        console.log(formData)
    }

const LIMIT = 5;
const isNextDisabled = postData?.data?.length < LIMIT;
  return (
    <div className ="container">
        <form onSubmit={handlesubmit}>
            <input
            type="text"
            className='postbox'
            name="title"
            />
            <div className='tags'>
                {tagsdata?.map((tag)=>{
                    return(
                        <div key={tag.id} >
                            <input name={tag.name} id={tag.id} type="checkbox" />
                            <label htmlFor={tag.id}>{tag.name}</label>
                        </div>
                    )
                })}
            </div>
            <button>POST</button>

        </form>

{/* //--------------------------------------------------------------------- */}

        {isLoading && <p>Loading...</p>}
        {isError && <p>{error?.message}</p>}
        {isposterror && <p onClick={reset}>Unable to postt</p>}
{/* //---------------------------------------------------------------------- */}

        <div className='pages'>
            <button onClick={() => setpage((p) => Math.max(p - 1, 1))}>
                Prev
            </button>

            <span>Page {page}</span>

            <button 
            onClick={() => setpage((p) => p + 1)}
             disabled={isNextDisabled}
                >
                Next
            </button>

        </div>

        {postData?.data?.map((post)=>{
            return (
                <div key={post.id} className='post'>
                    <div>{post.title}</div>
                    {post.tags.map((tag)=><span  key={tag}>{tag}</span>)}

                    <button
        onClick={() => {
          const newTitle = prompt("Enter new title", post.title);

          if (!newTitle) return;

          editPost({
            ...post,
            title: newTitle,
          });
        }}
      >
        Edit
      </button>
                </div>
                
            )
        })}
        {/* console.log("hello") */}
    </div>
  )
}

export default PostsLists