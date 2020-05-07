/* * * * * * * * * * * * *       
    Modify object array     
 * * * * * * * * * * * * */

/** 
 * 
 * If need to split apart a group of incoming objects 
 * in an array and modify them.
 * 
 * "children" would be, for example, might be a cluster
 * of props being passed into a React component.
 * 
 */

const colBuild = (children) => {
  // check if this is an array of objects
  // or if it is just a single object
  if (Array.isArray(children)) {
    let results = [];
    // If it is an array split out the each object before modifying
    // this could also be a map function if map is being returned
    children.forEach((val) => {
      // modify each object so it has a div wrapper
      const newVal = (
        <div className="col-cen">
          {val}
        </div>
      );
      // now push it into a new array to return
      results.push(newVal);
      //console.log(results);
    });
    return results;
  }
  else {
    return (
      <div className="col-cen">
        {children}
      </div>
    );
  }
}