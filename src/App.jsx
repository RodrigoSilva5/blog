import './App.css'
import {CommentsList} from "./components/CommentsList"

function App() {
  const arrayDeObjetos = [
    {
      icone: '/pic.jpeg',
      nome: 'rodrigo',
      data: '2024-02-06',
      comentario: 'Este é o comentário do objeto 1.',
      id: 0
    },
    {
      icone: '/pic2.jpeg',
      nome: 'clarice ',
      data: '2024-02-07',
      comentario: 'Este é o comentário do objeto 2.',
      id: 1
    },
    {
      icone: '/pic.jpeg',
      nome: 'joana',
      data: '2024-02-08',
      comentario: 'Este é o comentário do objeto 3.',
      id: 2
    },
    {
      icone: '/pic2.jpeg',
      nome: 'pedro',
      data: '2024-02-09',
      comentario: 'Este é o comentário do objeto 4.',
      id: 3
    },
    {
      icone: '/pic.jpeg',
      nome: 'alberto',
      data: '2024-02-10',
      comentario: 'Este é o comentário do objeto 5.',
      id: 4
    },
    {
      icone: '/pic2.jpeg',
      nome: 'leticia ',
      data: '2024-02-11',
      comentario: 'Este é o comentário do objeto 6.',
      id: 5
    },
    {
      icone: '/pic.jpeg',
      nome: 'joão ',
      data: '2024-02-12',
      comentario: 'Este é o comentário do objeto 7.',
      id: 6
    },
    {
      icone: '/pic.jpeg',
      nome: 'jumar',
      data: '2024-02-13',
      comentario: 'Este é o comentário do objeto 8.',
      id: 7
    },
    {
      icone: '/pic2.jpeg',
      nome: 'carlos',
      data: '2024-02-14',
      comentario: 'Este é o comentário do objeto 9.',
      id: 9
    },
    {
      icone: '/pic2.jpeg',
      nome: 'andre',
      data: '2024-02-15',
      comentario: 'Este é o comentário do objeto 10.',
      id: 10
    }
  ];
  
  return (
    <>
      <CommentsList commnets={arrayDeObjetos}/>
    </>
  )
}

export default App
