import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
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
        currentPage: 0,
        viewSize: 24,
        categoryCode: 'd1_d271_d273',
        locale: 'nl_NL'
      }
    };
  }

  componentDidMount(){
    this.props.emulateList(this.state.queryProps);
  }

  handlePageClick(data) {
    const props = this.state.queryProps;
    props.currentPage = data.selected;
    
    this.setState({queryProps: props}, () => {
      this.props.emulateList(this.state.queryProps);
    });
  };

  countPageNumber(){
    return Math.ceil(this.props.total/this.state.queryProps.viewSize);
  }


  render() {
    return (
      <div>
        <div className="header">
          <div className="info">{`${this.props.total} producten`}</div>
          <div className="navigation">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.countPageNumber()}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              forcePage={this.state.currentPage}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              previousLinkClassName={'prev-link'}
              nextLinkClassName={'next-link'}
              disabledClassName={'disabled-link'}
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
          <div className="navigation">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.countPageNumber()}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              forcePage={this.state.currentPage}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              previousLinkClassName={'prev-link'}
              nextLinkClassName={'next-link'}
              disabledClassName={'disabled-link'}
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