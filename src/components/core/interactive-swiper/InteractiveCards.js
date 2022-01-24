import React from 'react';
import { A11y, EffectCards, EffectCube, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss';
import 'swiper/modules/effect-cards/effect-cards.scss';
import 'swiper/modules/effect-cube/effect-cube.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';
import './InteractiveCards.scss';

export class InteractiveCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMobileView: false };
  }

  render() {
    return (
      <>
        {this.state.isMobileView && <div className="swiper-mobile">{this.getSwiper(true)}</div>}
        {!this.state.isMobileView && <div className="swiper-desktop position-relative">{this.getSwiper(false)}</div>}
      </>
    );
  }

  getSwiper(isMobile) {
    if (isMobile) {
      return (
        <Swiper ref={this.swiper} modules={[EffectCards, A11y]} effect={'cards'} grabCursor={true}>
          {this.props.children
            .filter((c) => c.props.isMobileCard)
            .map((InteractiveCard, index) => (
              <SwiperSlide key={index}>{InteractiveCard}</SwiperSlide>
            ))}
        </Swiper>
      );
    } else {
      return (
        <Swiper
          cubeEffect={{
            shadow: false,
          }}
          navigation={true}
          effect={'cube'}
          grabCursor={true}
          modules={[EffectCube, A11y, Pagination, Navigation]}
          pagination={true}
        >
          {this.props.children
            .filter((c) => !c.props.isMobileCard)
            .map((InteractiveCard, index) => (
              <SwiperSlide key={index}>{InteractiveCard}</SwiperSlide>
            ))}
        </Swiper>
      );
    }
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver(() => {
      if (this.state.isMobileView && window.innerWidth >= 1024) {
        this.setState({
          isMobileView: false,
        });
      } else if (!this.state.isMobileView && window.innerWidth < 1024) {
        this.setState({
          isMobileView: true,
        });
      }
    });
    this.resizeObserver.observe(window.document.body);
  }
}
