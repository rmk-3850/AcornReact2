// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Pagination, Navigation } from 'swiper/modules';
export default function StarReviewSwiper({ImgInfo}) {
    return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination]} // 사용할 모듈 설정
        navigation // 네비게이션 화살표 활성화
        pagination={{ clickable: true }} // 페이지네이션 활성화
        spaceBetween={50} // 슬라이드 간 간격
        slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
        speed={500} // 전환 속도
      >
        {ImgInfo.map((item) => (
          <SwiperSlide key={item.no}>
            <div className="swiper-slide-content">
              <img
                className="slide-image"
                alt={`사진 ${item.no}`}
                src={item.imageUrl}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
  }