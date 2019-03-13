import React, {Component} from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import { emulateList } from '../redux/reducer';

import Item from './Item';

class Home extends Component {
  constructor(props){
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);

    this.state = {
      queryProps: {
        lang: 'nl_NL',
        formula: 'praxis',
        currentPage: 1,
        viewSize: 24,
        categoryCode: 'd1_d271_d273',
        locale: 'nl_NL'
      }
    };
  }

  componentDidMount(){
    this.props.emulateList(this.state.queryProps);
  }

  handlePageClick(selected) {
    const props = { ...this.state.queryProps, currentPage: selected };
    
    this.setState({queryProps: props}, () => {
      this.props.emulateList(this.state.queryProps);
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <div className="info">{`${this.props.total} producten`}</div>
          <div id="header-pagination" className="navigation">
            <Pagination
              activePage={this.state.queryProps.currentPage}
              itemsCountPerPage={this.state.queryProps.viewSize}
              totalItemsCount={this.props.total}
              pageRangeDisplayed={5}
              onChange={this.handlePageClick}
              hideFirstLastPages={true}
              itemClassPrev="prev-link"
              itemClassNext="next-link"
              activeLinkClass="active-link"
              disabledClass="disabled-link"
              prevPageText="<"
              nextPageText=">"
            />
          </div>
        </div>
        <div className="container">
          {
            this.props.list && this.props.list.map((item) => {
              return (
                <Item key={item.id} Obj={item}/>
              )
            })
          }
        </div>
        <div className="footer">
          <div id="footer-pagination" className="navigation navigation__footer">
            <Pagination
              activePage={this.state.queryProps.currentPage}
              itemsCountPerPage={this.state.queryProps.viewSize}
              totalItemsCount={this.props.total}
              pageRangeDisplayed={5}
              onChange={this.handlePageClick}
              hideFirstLastPages={true}
              itemClassPrev="prev-link"
              itemClassNext="next-link"
              activeLinkClass="active-link"
              disabledClass="disabled-link"
              prevPageText="<"
              nextPageText=">"
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({list, total}) => ({list, total});
const mapDispatch = {emulateList};
export default connect(mapState, mapDispatch)(Home);