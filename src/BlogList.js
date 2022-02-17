const BlogList = ({blogs, title, wiz}) => {


    return ( 
        <div className="blog-list">
           <h2> {title} </h2>
             {blogs.map((blogr) => (
                   <div className="blog-preview" key={blogr.id}>
                       <h2> {blogr.title} </h2>
                       <p>Written by {blogr.author} </p>
                   </div>
               ))} 
        </div>
     );
}
 
export default BlogList;