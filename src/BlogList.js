const BlogList = ({blogs, title, handleDelete,wiz}) => {


    return ( 
        <div className="blog-list">
           <h2> {title} </h2>
             {blogs.map((blogr) => (
                   <div className="blog-preview" key={blogr.id}>
                       <h2> {blogr.title} </h2>
                       <p>Written by {blogr.author} </p>
                       <button onClick={ () => handleDelete(blogr.id) } >Delete Blog</button>
                   </div>
               ))} 
        </div>
     );
}
 
export default BlogList;