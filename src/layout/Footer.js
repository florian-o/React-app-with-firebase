import React,{useState} from 'react';

function Footer() {
    const [state, setstate] = useState({
        services:[
            {               
                title:"Service Annexes",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi'
            },
            {  
                title:"Contact",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi'
            },
        ]          
    })
   
        
    return (
        <div className='services'>
              
                <div className="services-center">
                    {state.services.map((item,index) =>{
                    return <article key={index} className="service">                        
                            
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>                    
                    </article>
                    })}
                </div>
            </div>
    )
}

export default Footer;
