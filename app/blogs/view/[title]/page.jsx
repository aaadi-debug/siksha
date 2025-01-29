import axios from 'axios';
import Content from './Content';

export default async function Page({ params }) {

  
  
  const { title } = await params;  // Ensure params are awaited

  const urldata = decodeURIComponent(title);
  console.log(urldata);
  
  const URLS=process.env.NEXT_PUBLIC_HOSTNAME;

  // console.log(urldata);

  const response = await axios.get(`${URLS}/api/blogs?url=${urldata}`); // Replace with your API endpoint
  const result = await response.data.data;

  const id = result?._id;
  const teachername = result?.teacher;
  // console.log(result, result?._id, result?.teacher)

  // console.log(result);
  


  return (

    <Content blogInfo={result}/>
  )
}