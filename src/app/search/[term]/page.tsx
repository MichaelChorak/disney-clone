import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    };
};

function SearchPage({params: {term}}: Props) {
  
  //If no term is found, redirect to 404 page
  if(!term) notFound();
  
  //decode 
  const termToUse = decodeURI(term);

  // API call to get the Searched Movies

  // API call to get the Populair Movies

  return (
    <div>Welcome to the search page: {termToUse}</div>
  )
}

export default SearchPage