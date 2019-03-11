import React from 'react';
import processImgUrl from '../helpers/processingFunctions';

const Item = (props) => {
  return (
      <div className="item">
        <img src={processImgUrl(props.Obj.image)} alt={props.Obj.name}/>
        <div className="item__description">
          <strong>{props.Obj.title}</strong>
          <span>{props.Obj.categoryName}</span>
        </div>
      </div>
  );
};

export default Item;