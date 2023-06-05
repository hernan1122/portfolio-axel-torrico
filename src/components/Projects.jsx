import React from 'react';
import '../styles/Projects.css'

//images
import home from '../images/cantera-music-home.jpg'

export function Projects() {
  return (
    <div className='Projects'>
      <h3>Cantera Music</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet doloribus placeat doloremque laudantium veritatis eum possimus nulla sit incidunt, corporis, eius magnam soluta fuga, ad sed itaque. Reiciendis, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem, rem corrupti, accusantium placeat dicta, nihil eos deserunt fuga illum commodi excepturi fugiat tempore aliquam assumenda tempora eius accusamus odit.
      </p>
      <img src={home} alt={home} />
    </div>
  );
}
