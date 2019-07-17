import React from 'react';
import './style/style.css';

function App() {
  return (
    <div className="App">
       <div id="bg"></div>

       <header>
         <a href='#'>ZoomZoom</a>
       </header> 

       <main>
         <section id="card">
           <ul>
             <li>
               <span></span>
               <strong>How may i help you?</strong>
             </li> 
             <li>
               <span></span>
               <strong>How may i help you?</strong>
             </li>
             <li>
               <span></span>
               <strong>That's deep. Let me help.</strong>
             </li>   
           </ul>

         </section>

         <section id="primary">
           <h1>Your Personal Assistant</h1>
           <p>Get help with your daily life stuff.</p>

           <a href="#">Get help already</a>
         </section>
       </main>  




    </div>
  );
}

export default App;
