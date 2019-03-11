import React from 'react';
import processImgUrl from '../helpers/processingFunctions';

const Item = (props) => {
  return (
      <div className="row">
        <img src={processImgUrl(props.Obj.image)} alt={props.Obj.name}/>
        <strong>{props.Obj.title}</strong>
        <span>{props.Obj.categoryName}</span>
      </div>
  );
};

export default Item;