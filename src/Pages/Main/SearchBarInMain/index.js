import React, { Component } from 'react';
import './SearchBarInMain.scss';
import SearchBarDetail from '../SearchBarDetail/SearchBarDetail';
import search from 'Images/Main/seachbox.png';

//부모
class SearchBarInMain extends Component {
  state = {
    activeTab: null,
    activeArrow: '110px',
    activeText: null,
    activeShow: null,
    // detailData: [],
    test: '',
  };

  menuDown = (num) => {
    this.setState({
      activeTab: num,
    });
  };

  menuUp = (e) => {
    this.setState({
      activeTab: e,
    });
  };

  // componentDidMount() {
  //   // fetch(DATA_PATH + "detailData.json")
  //   fetch(
  //     `${URL_PATH} ${this.props.history.location.pathname.replace(
  //       "/detail/",
  //       ""
  //     )}`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ detailData: res}));
  // }
  // componentDidMount() {
  //   fetch("http://3.34.141.93:8000/inputsearchbox")
  //     .then((res) => res.json())
  //     .then((res) =>
  //       this.setState({
  //         detailData: res
  //         }),
  //     );
  //    }

  changeColor = (num, pos) => {
    this.setState({
      activeTab: num,
      activeArrow: pos,
    });
  };

  inputHandler = (e) => {
    this.setState({ activeShow: e.target.value.length });
  };

  render() {
    const { detailData } = this.state;
    return (
      <>
        <div className='searchBarContainer'>
          <div className='searchBarBox'>
            <div className='searchTextBox'>
              <ul className='searchText'>
                <div className='textWrap'>
                  <li className={`boldText ${this.state.activeTab === 1 ? 'click' : ''}`} onClick={() => this.changeColor(1, '110px')}>
                    아파트
                  </li>
                  <p className='smallText'>(매매/전월세/신축분양)</p>
                </div>
                <div className='textWrap'>
                  <li className={`boldText ${this.state.activeTab === 2 ? 'click' : ''}`} onClick={() => this.changeColor(2, '300px')}>
                    빌라,투룸+
                  </li>
                  <p className='smallText'>(매매/전월세)</p>
                </div>
                <div className='textWrapForone'>
                  <li className={`boldText ${this.state.activeTab === 3 ? 'click' : ''}`} onClick={() => this.changeColor(3, '450px')}>
                    원룸
                  </li>
                  <p className={`smallText ${this.state.activeTab === 3 ? 'click' : ''}`} onClick={() => this.changeColor(3, '450px')}>
                    (전월세)
                  </p>
                </div>

                <div className='textWrapForoffice'>
                  <li className={`boldText ${this.state.activeTab === 4 ? 'click' : ''}`} onClick={() => this.changeColor(4, '650px')}>
                    오피스텔/도시형생활주택
                  </li>
                  <p className={`smallText ${this.state.activeTab === 3 ? 'click' : ''}`} onClick={() => this.changeColor(3, '650px')}>
                    (전월세)
                  </p>
                </div>
              </ul>
            </div>
            <div className='searchMaxBox'>
              <div className='arrowSearch' style={{ left: this.state.activeArrow }}></div>
              <div className='searchBox'>
                <div className='searchimgBox'>
                  <img src={search} className='searchBoxImg' alt='돋보기' />
                </div>

                <input
                  className='searchInputBox'
                  type='text'
                  onChange={this.inputHandler}
                  placeholder='원하시는 지역명, 지하철역, 오피스텔명을 입력해주세요'
                />
                <div className='searchBoxText'>찾아보기</div>
                {/* {this.inputHandler !== undefined ? <SearchBarDetail/> : null} */}
                <SearchBarDetail activeShow={this.state.activeShow} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBarInMain;
