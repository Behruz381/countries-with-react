import React from "react";

function Card(props) {
  const { flag, name, population, region, capital } = props.props;
  return (
    <>
      <div className="card  shadow-md rounded-[5px] w-[267px]" >
        <div className="card__img">
          <img src={flag} alt="flag" className="rounded-t-[5px] h-[160px] w-full" />
        </div>
        <div className="card__body p-[24px]">
          <div className="card__body--title">
            <h1 className="font-extrabold text-[18px] pb-[16px]">{name}</h1>
          </div>
          <div className="card__body--population">
            <p className="pb-[8px] text-[14px]">
              <strong className="pr-[10px]">Population:</strong> {population}
            </p>
          </div>
          <div className="card__body--region">
            <p className="pb-[8px] text-[14px]">
              <strong className="pr-[10px]">Region:</strong>
              {region}
            </p>
          </div>
          <div className="card__body--capital">
            <p className="text-[14px]">
              <strong className="pr-[10px]">Capital:</strong>
              {capital}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
