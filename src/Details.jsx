import React from "react"

export default function Details (props) {
    return(
        <div className="flex items-center justify-around my-8 mx-16 rounded-full">
            <img src={props.item.imageUrl} alt="" className="w-48 h-60 rounded-xl"/>
            <div className=" ml-5">
                <div className="flex items-center  w-8/12">
                    <p className="tracking-widest ">📍{props.item.location}</p>
                    <a className="underline ml-3 text-gray-400" href={props.item.googleMapsUrl}>view on google maps</a>
                </div>
                <h1 className="text-3xl mb-4 font-bold">{props.item.title}</h1>
                <p className="mb-2 font-semibold">{props.item.startDate} - {props.item.endDate}</p>
                <p className="text-gray-600">{props.item.description}</p>
            </div>
        </div>
    )
}