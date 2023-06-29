export const titleCase = (x) => {
  if(x && x.length>1)
    return `${x[0].toUpperCase()}${x.slice(1, x.length)}`  
}