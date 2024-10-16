function Question1() {
  const Student = [1,2];
  return (
    <>
      {/* 1st */}
      {/* <h1>{Student.length===0 && 'Not Found'}</h1>
        <h1>Number of Student:{Student.length}</h1> */}
      {/* 2st */}
      {/* <h1>{!Student.length && "Not Found"}</h1>
      <h1>Number of Student:{Student.length}</h1> */}
       {/* 3st */}
       <h1>{!Boolean(Student.length) && "Not Found"}</h1>
      <h1>Number of Student:{Student.length}</h1>
    </>
  );
}
export default Question1;
