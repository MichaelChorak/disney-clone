import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    };
};

function SearchPage({params: {term}}: Props) {
  
  //If no term is found, redirect to 404 page
  if(!term) notFound();
    
  const termToUse = decodeURI(term);

  return (
    <div>Welcome to the search page: {termToUse}</div>
  )
}

export default SearchPage