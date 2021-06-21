import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section>
      <div
        style={{
          display: 'flex',
          display:isDesktop?'block':'none',
          border: '1px solid #f0f0f0',
          padding: '25px',
        
         
        
        }}
      >
        <div style={{width:'80%'}} >
          <Skeleton height={30} width={140} />
        </div>
      
      </div>
       <div 
        style={{
          
          // display:isDesktop?'none':'block',
          border:isDesktop?'0px': '1px solid #f0f0f0',
          padding:isDesktop? '0px':'20px',
          display:'flex',
          flexdirection:'row',
      
        }}
      >
    
        <div style={{width:'100%',margintop:'50px',  display:isDesktop?'none':'block',}} >
          <Skeleton height={20} width={80} />
        </div>
         <div style={{width:'100%',margintop:'50px', display:isDesktop?'none':'block',}} >
          <Skeleton height={20} width={80} />
        </div>
         <div style={{width:'100%',margintop:'50px', display:isDesktop?'none':'block',}} >
          <Skeleton height={20} width={80} />
        </div>
      
      </div>
     
      <div 
        style={{
          
          display:isDesktop?'none':'block',
          border: '1px solid #f0f0f0',
          padding: '20px',
        }}
      >
    
        <div style={{width:'100%',margintop:'50px'}} >
          <Skeleton height={20} width={80} />
        </div>
      
      </div>
     
    </section>
  );
};

export default Header;
