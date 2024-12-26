import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import Logo from './Logo'
import ImageSlider from './ImageSlider'
import RestaurantInfo from './RestaurantInfo'
import Map from './Map'
import ReviewTabs from './ReviewTabs'
import axios from 'axios';
import BlogReviews from './Tabs/BlogReviews';

const DetailPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/eateries/2");
        setRestaurant(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurantData();
  }, []);

  if (isLoading) return <Box>로딩 중...</Box>;
  if (error) return <Box>에러: {error}</Box>;
  if (!restaurant) return <Box>식당 정보를 찾을 수 없습니다</Box>;
  
  return (
    <Box px="25%" py={4}>
      <Logo />
      
      <ImageSlider restaurant={restaurant}/>
      
      <Box display="flex" flexDirection={["column", "row"]} gap={3}>
        <Box flex={2}>
          <RestaurantInfo restaurant={restaurant} />
        </Box>
        <Box flex={1}>
          <Map 
            latitude={parseFloat(restaurant.latitude)} 
            longitude={parseFloat(restaurant.longitude)}
          />
        </Box>
      </Box>
      
      <ReviewTabs restaurant={restaurant}>
        <BlogReviews />
      </ReviewTabs>
    </Box>
  );
};

export default DetailPage;