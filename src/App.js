import logo from './logo.svg';
import './App.css';
import Monimg from './imgSrc/profile.png';
import Myvideo from './videoSrc/VideoImane.mp4';


function App() {
  return ( 

   <div style={{border:"solid 1px black",width:'100vw'}}> 
    <header className="">
     <p>Image Source <img src={Monimg}  alt='image1' width='100vw'  />
     </p>
   <p>Image Public  <img src='./imgPublic/profile2.jpg' alt='image2' width='100vw' />
   </p>

 <p>Vidéo Source
   <video width="320" height="240" controls>
   <source src={Myvideo} type="video/mp4"/>
   </video>
   </p>


   </header>





   </div> 

   
  );
}

export default App;
