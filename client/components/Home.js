import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emulateList } from '../redux/reducer';
import data from '../../data';
import Item from './Item';

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.emulateList(data);
  }
  render() {
    return (
      <div>
        <h1>{`${this.props.total} producten`}</h1>
        <div className="container">
          {
            this.props.list && this.props.list.map((item) => {
              return (
                <Item key={item.id} Obj={item}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapState = ({list, total}) => ({list, total});
const mapDispatch = {emulateList};
export default connect(mapState, mapDispatch)(Home);