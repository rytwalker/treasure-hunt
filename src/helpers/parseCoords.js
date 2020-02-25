export const parseCoords = coords => {
  const coordsObject = {};
  const coordsArr = coords.replace(/[{()}]/g, "").split(",");

  coordsArr.forEach(coord => {
    coordsObject["x"] = parseInt(coordsArr[0]);
    coordsObject["y"] = parseInt(coordsArr[1]);
  });

  return coordsObject;
};
