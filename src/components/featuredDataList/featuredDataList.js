import React ,{ FeaturedDataItem } from "../FeaturedDataItem/FeaturedDataItem";

function featuredDataList() {
  return (
    <div class="featured-data">
      <div class="featured-data__container container">
        <featuredDataItem />
        <featuredDataItem />
        <featuredDataItem />
        <featuredDataItem />
      </div>
    </div>
  )
}

export default featuredDataList;