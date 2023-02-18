import React from 'react';

export default function Card(props){

let options=props.options;
let priceOptions=Object.keys(options)

    return(
        <div>
        <div className="card mt-3 p-3 text-bg-info mb-3 " style={{ "width": "18rem" ,"maxHeight":"360px","backgroundColor":"pink","border":"2px solid grey"}}>
            <img style={{"border":"2px solid grey"}} src={props.imgSrc} className="card-img-top" alt="..." />
            <div className="card-body text-bg-info">
                <h5  style={{"fontSize":"26px"}} className="card-title">{props.foodName}</h5>
                <div className="container w-100">
                    <select className="m-2 h-100 text-white bg-success rounded">
                        {Array.from(Array(6),(e,i)=>{
                            return(
                                <option key={i+1} value={i+1}>{i+1}</option>
                            )
                        })}
                    </select>
                             <select className="m-2 h-100 text-white bg-success rounded">
                             
                             {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                             })}

                             </select>
                       <div className='d-inline h-100 fs-5'>Total Price</div>
                </div>
            </div>
        </div></div>
    )
}