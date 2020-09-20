import React from 'react'
import Card from'./Card'
//import { robots } from './robos'

const Cardlist=({robots})=>{
let items;

if ( robots ){
	items=robots.map((user,i)=>{
				return(
					<Card
					 key={robots[i].id} 
					 id= {robots[i].id}
					 name={robots[i].name}
					 email={robots[i].email}
				 />
			);
		}
	)
}
	return(
		<div>
		{
			items
		}	
		</div>
	);
}



export default Cardlist;