function callback(setWidth, setWeight) {
  return function(str, baseUrl, id, width, height, extension, offset, s) {
    return `${baseUrl}${id}-${setWidth}-${setWeight}${extension}`;
  }
}

export const emulatePagination = function(data, params){
  const startIndex = (params.currentPage-1) * params.viewSize;
  const lastIndex = startIndex + params.viewSize;

  return { 
    quantity: data ? data.productsDataList.length : 0, 
    productsDataList: data.productsDataList.slice(startIndex, lastIndex) 
  };
};

export const processImgUrl = function(url = '', width = '500', height = '500'){
  return url ? url.replace(/(\S+\/)(\d+)-(\d+)-(\d+)(.jpg)/, callback(width, height)) : '';
};