type Props = {
  params: {
    id: string;
  },
  searchParams: {
    genre: string;
  }
}



function GenrePage({params:{id}, searchParams: {genre}}: Props) {
    
  return (
    <div>Welcome to the genre {genre} with an id of {id}</div>
  )
}

export default GenrePage