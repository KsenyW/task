function callback(setWidth, setWeight) {
  return function(str, baseUrl, id, width, height, extension, offset, s) {
    return `${baseUrl}${id}-${setWidth}-${setWeight} ${extension}`;
  }
}

export default function processImgUrl(url = '', width = '500', height = '500'){
  return url ? url.replace(/(\S+\/)(\d+)-(\d+)-(\d+)(.jpg)/, callback(width, height)) : '';
};

export function emulatePagination(data, params){
  const startIndex = params.currentPage * params.viewSize;
  const lastIndex = startIndex + params.viewSize;

  return { quantity: data.quantity, productsDataList: data.productsDataList.slice(startIndex, lastIndex) };
};