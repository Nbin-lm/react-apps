import data from './data'
function App() {

  
  const tdatacomplex = data.map((item) => (
    <div key={item.Roll} style={{display:'flex',
      border:"2px solid black",
       color:"white",
      justifyContent:'center',
      gap:"40px",
      padding:"30px 60px 30px 60px",
      margin:"20px",
      borderRadius:"20px",
      boxShadow:"10px",
    flexDirection:"column",
      backgroundImage:"url('../image/Untitled.jpg')",
      backgroundRepeat :'no-repeat',
      backgroundSize :'cover',
      width: 'fit-content'
      
      

    }}> 
      <div>Name={item.Name},<br/></div>
      <div>Roll={item.Roll},<br/></div>
      <div>Address={item.Address}</div> 
    </div>
  ));

  return (
    <div>
      <div style={{display:'grid',
        gridTemplateColumns:'repeat(4,1fr)'
      }}> {tdatacomplex}</div>
    </div>
  );
}

export default App;
