import React, { useEffect, useState } from "react";
import Input from "../../UI/Input/Input";
import Select from "../../UI/Input/Select";
import Card from "../../UI/Cards/Card";

function main() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setData(data));
      
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="main__inputs pt-[120px] flex items-center justify-between">
            <Input />
            <Select />
          </div>
          <div className="main__cards mt-12 grid grid-cols-4 justify-items-center gap-[50px]">
            {data.length > 0 ? (
              data?.map((item) => <Card props={item} />)
            ) : (
              <span className="loader"></span>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default main;
