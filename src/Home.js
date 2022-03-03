import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState('20');

    const handleClick = () => {
        setName('Luigi');
        setAge('19');
    };

    const [blogs, setBlogs] = useState([
        {title: "Cool, She A 5 Star Lady oh", body:'body physically sexy oh, something steady...', author: 'Wizkid', id: 1},
        {title: "Pekelemesi!", body:'So therefore, give me Balon D"or ', author: 'Burna Boy', id: 2},
        {title: "Kehinde lo joju Taiye", body:'O.B.O ti gbe won sare!', author: 'Davido', id: 3},
        {title: "I got a Pretty little lady wey no like No Stress!", body:'She got her own but she needs some love...', author: 'Wizkid', id: 4}
        
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blogr => blogr.id !== id);
        setBlogs (newBlogs);
    }

    return ( 
        
       <div className="home">
              <BlogList blogs={blogs} title='All of The Lights' handleDelete={handleDelete} /> <br /> <br />
              <h2>Songs by Big Wiz</h2>
              <BlogList blogs={blogs.filter((blogr) => blogr.author === 'Wizkid' )} />
        </div> 
     );
}
 
export default Home;