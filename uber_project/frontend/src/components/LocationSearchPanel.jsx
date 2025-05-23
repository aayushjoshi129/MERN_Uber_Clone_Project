import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  
  // sample array for locations
  const locations = [
    "Omaxe Heights Road, Sector 79, Faridabad, Haryana, 12100",
    "Omaxe Heights Road, Sector 78, Faridabad, Haryana, 12100",
    "Omaxe Heights Road, Sector 798, Faridabad, Haryana, 12100",
    "Omaxe Heights Road, Sector 790, Faridabad, Haryana, 12100",
    "Omaxe Heights Road, Sector 791, Faridabad, Haryana, 12100",
  ]

  return (
    <div>
      {
      locations.map(function (elem, idx) {
        return (
        <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className="flex border-2 p-1 border-white active:border-black rounded-xl gap-4 items-center my-2 justify-start">
          <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
        )
      }
      )}

      {/* <div className="flex border-2 p-3 border-white active:border-black rounded-xl gap-4 items-center my-2 justify-start">
        <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="font-medium">
          Omaxe Heights Road, Sector 79, Faridabad, Haryana, 12100
        </h4>
      </div>
      <div className="flex border-2 p-3 border-white active:border-black rounded-xl gap-4 items-center my-2 justify-start">
        <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="font-medium">
          Omaxe Heights Road, Sector 79, Faridabad, Haryana, 12100
        </h4>
      </div>
      <div className="flex border-2 p-3 border-white active:border-black rounded-xl gap-4 items-center my-2 justify-start">
        <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="font-medium">
          Omaxe Heights Road, Sector 79, Faridabad, Haryana, 12100
        </h4>
      </div> */}
    </div>
  );
};

export default LocationSearchPanel;
