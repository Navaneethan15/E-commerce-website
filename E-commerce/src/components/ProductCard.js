import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
    const navigate = useNavigate();
  return (
    <div className="card m-2 cursor-pointer bn5 " style={{width: 300}} role='button' onClick={() => navigate(`/product/${props.id}`) }>
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={150}
          width={180}
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      
      <div className="card-body ">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">Price: {`$${props.price}`}</h6>
        {/* <h6 className="mt-2">Discount: {props.discountPercentage}%</h6>  */}
        {/* <h6 className="mt-2">Rating: {props.rating}</h6> */}
        {/* <h6 className="mt-6 ">description : {props.description} </h6> */}
        <div className="mt-4">
            {props.stock > 0 ? <button className="btn btn-success">Available</button> : <button className="btn btn-outline-danger">Out of stock</button>}
        </div>
      </div>
    </div>
//     <section class="text-gray-600 body-font" role='button' onClick={() => navigate(`/product/${props.id}`) }>
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={props.thumbnail}  width={180} height={150} />
//         </a>
//         <div class="mt-4">
//           <h4 class="text-gray-500 text-xs tracking-widest title-font mb-1">{props.title} </h4>
//           <h5 class="text-gray-900 title-font text-lg font-medium"></h5>
//           <p class="mt-1">Price: {`$${props.price}`}</p>
//         </div>
//       <div className="mt-4">
//         {props.stock > 0 ? <button className="btn btn-success">Available</button> : <button className="btn btn-outline-danger">Out of stock</button>}
//     </div>
//       </div>
      
//     </div>

//   </div>
// </section>
  );
}
