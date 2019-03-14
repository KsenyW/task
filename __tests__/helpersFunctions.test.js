import { emulatePagination, processImgUrl } from '../client/helpers/processingFunctions';
import data from '../data';

const props = {
  lang: 'nl_NL',
  formula: 'praxis',
  currentPage: 1,
  viewSize: 24,
  categoryCode: 'd1_d271_d273',
  locale: 'nl_NL'
};

describe('helper functions:', () => {  
  it('processImgUrl function', () => {
    // image height/width set to 500 by default
    expect(processImgUrl('https://d16m3dafbknje9.cloudfront.net/imagescaler/8964674846750-100-100.jpg'))
          .toEqual('https://d16m3dafbknje9.cloudfront.net/imagescaler/8964674846750-500-500.jpg');
    
    // has to change height/width according to passed params
    expect(processImgUrl('https://d16m3dafbknje9.cloudfront.net/imagescaler/8964674846750-100-100.jpg', '600', '600'))
          .toEqual('https://d16m3dafbknje9.cloudfront.net/imagescaler/8964674846750-600-600.jpg');
  });

  it('emulatePagination function', () => {
    expect(emulatePagination(data, props))
          .toHaveProperty('quantity', 85);
    expect(emulatePagination(data, props))
          .toHaveProperty('productsDataList');
    expect(emulatePagination(data, props).productsDataList)
          .toHaveLength(24); // for the first page
    expect(emulatePagination(data, {...props, currentPage: 4}).productsDataList)
          .toHaveLength(13); // for the last page in mocked data
  });
});