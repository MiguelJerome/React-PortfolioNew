import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

import ContactForm from './components/Contact';
import Portfolio from './components/Portolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      
      ></Nav>
      <main>
      
      {!contactSelected  ? ( 
          <>
          
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
          <>
          <ContactForm></ContactForm>
          </>
        )}

      </main>
      <footer class= "footer-layout"><a href="https://github.com/MiguelJerome"><span class="gitHubLogo"></span></a>
      <a href="https://www.linkedin.com/in/miguel-jerome-7a023396/"><span class="linkedInLogo"></span></a>
      <a href="https://stackoverflow.com/users/19123123/miguel-jerome"><span class="stackOverflowLogo"></span></a>
      </footer>
    </div>
  );
}

export default App;
