function Select() {
    return (
      <>
      <select id="sort" defaultValue="sortRegion" className="border py-[18px] px-[24px] text-[#111517] font-normal rounded-[5px]">
        <option  disabled value="sortRegion">Filter by Region</option>
      </select>
      </>
    );
  }
  
  export default Select;