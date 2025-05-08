import React from 'react'
import ProfileCard from './components/ProfileCard';

export default function App() {
  return(
      <ProfileCard
        name="Ada Lovelace"
        photo="https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg"
        profession="Engenheira de Software"
        email="ada@cambridge.com"
        phone="(48) 98765-4321"
        linkedin="linkedin.com/in/adabyron"
        skills={[
          'Programação',
          'Matemática',
          'Traduções',
          'Escritora',
          'Engenheira',
          'Inventora',
          'Cientista da Computação',
          'Poeta',
          'React',
          'Node.js',
          'UI/UX',
        ]}
      />
  )
}
