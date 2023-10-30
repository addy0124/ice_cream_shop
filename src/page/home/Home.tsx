import React from 'react';

import './home.scss'
import classnames from 'classnames';
import Productimage from '../../assets/image/productimage2.png';
import PromoteImage from '../../assets/image/promote.webp';
import Img from '../../components/lazyLoadImage/Img';
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

type Props = {}

const bestSeller = [
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    }
    
]

const category = [
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    ,
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    ,
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    },
    ,
    {
        productname: 'ice-cream',
        description: 'Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name Ice-Cream Name',
        star: 5
    }
    
]

const featureProductsList = [1,2,3,4,5,6,7,8,9,10,11,12];

const Home = (props: Props) => {

    {/* for titleBox */}
    const titleBox = (title: string, sub_title: string) => {
        return (
            <>
            <div className={classnames('title_box')}>
                <h1 className="fs-1">{title}</h1>
                <p className="fs-5 fw-lighter text-wrap mt-0">
                    {sub_title}
                </p>
                <div className="w-100 d-flex justify-content-center">
                    <div className='styleline'></div>
                </div>
            </div>
            </>
        )
    }

    {/* for serviceBox */}
    const serviceBox = (title: string, sub_title: string) => {
        return (
            <div className={classnames('serviceContianer', 'col-3')}>
                <div className={classnames('serviceBlock', 'w-100', 'p-5')}>
                    <div>
                        <LocalShippingIcon />
                    </div>
                    <div className={classnames('textBox')}>
                        <p className="fs-5 fw-lighter text-wrap m-0">{title}</p>
                        <p className="fs-5 fw-lighter text-wrap m-0">{sub_title}</p>
                    </div>
                </div>
            </div>
        )
    }

    {/* for promoteBox */}
    const promoteBox = (title: string, sub_title: string) => {
        return (
            <div className={classnames('promotionBlock', 'col-4')}>
                <div className={classnames('imgBlock', 'w-100')}>
                    <h1>{title}</h1>
                    <p>{sub_title}</p>
                    <button>See More</button>
                </div>
            </div>
        )   
    }




  return (
    <>
        {/* banner */}
        <div className={classnames('heroBanner', 'row')}>
            <div className={classnames("left_side", 'col-6')}>
                <h1 className={classnames("title")}>Welcome.</h1>
                <h1 className={classnames("title")}>XXXXX XXXXX</h1>
                <p className={classnames("sub_title")}>
                    Millions of movies, TV shows and people to discover.
                    Explore now.
                </p>
                <div>
                    <button>Let's shop</button>
                </div>
                </div>

                <div className={classnames("right_side", 'col-6')}>
                    <div className={classnames("bg_img")}></div>
                </div>
            </div>

        {/* trending */}
        <div className={classnames("trendingSection")}>

            <div className={classnames('text_box')}>
                <h1 className="fs-3">Our BestSeller</h1>
                <p className="fs-5 fw-lighter text-wrap mt-0">
                    See All Product <ChevronRightIcon />
                </p>
            </div>

            <div className={classnames('trendingItems', 'row')}>
                {
                    bestSeller.map((item, index) => {
                        return (
                            <div className={classnames('container', 'col-2')}>
                                <div className={classnames('imgblock', 'w-100')}>
                                    <img src={Productimage} />
                                </div>
                                <div className={classnames('textBlock', 'w-100')}>
                                    <p className="fs-5 fw-bold m-0">{item.productname}</p>
                                    <p className="fs-6 fw-lighter text-wrap m-0 pt-1">
                                        {item.description}
                                    </p>
                                    {item.star === 5 ? 
                                    <div className="d-flex justify-content-center w-100 m-0 pt-1">
                                        <StarIcon /> 
                                        <StarIcon /> 
                                        <StarIcon /> 
                                        <StarIcon /> 
                                        <StarIcon /> 
                                    </div>
                                    : ''}
                                </div> 
                            </div>
                        )
                    })
                }
            </div>

        </div>
        
        {/* promotion */}
        <div className={classnames('promotionSection', 'row')}>
            {promoteBox("Summer Collection", "discount price $199")}
            {promoteBox("Summer Collection", "discount price $199")}
            {promoteBox("Summer Collection", "discount price $199")}
        </div>

        {/* Category */}
        <div className={classnames('categorySection')}>

            {titleBox('Shop By Category', 'you can buy anything you want')}
            
            <div className={classnames('categoryContainer')}>
                <div className={classnames('categoryBlock')}>
                    {
                        category.map((item, index) => {
                            return (
                                <div className={classnames('categoryItem')}>
                                    <div className={classnames('imgBlock')}>
                                        <Img src={Productimage} />
                                    </div>
                                    <p className={classnames('itemName', 'w-100', 'm-0')}>{item?.productname}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        {/* service */}
        <div className={classnames('serviceSection', 'row', 'justify-content-center', 'p-0', 'm-0')}>
            {serviceBox('Free Delivery', 'if you buy enough 3000')}
            {serviceBox('Free Delivery', 'if you buy enough 3000')}
            {serviceBox('Free Delivery', 'if you buy enough 3000')}
            {serviceBox('Free Delivery', 'if you buy enough 3000')}
        </div>

        {/* FeatureProduct */}
        <div className={classnames('featureSection')}>
            {titleBox('Feature Product', 'you can buy anything you want')}
             
            <div className={classnames('featureItems', 'row')}>                
                {featureProductsList.map((item, index) => {
                    return (
                        <div className={classnames('container', 'col-2', 'pb-5')}>
                            <div className={classnames('imgblock', 'w-100')}>
                                <Img src={Productimage} />
                            </div>
                            <div className={classnames('textBlock', 'w-100')}>
                                <p>Ice Cream</p>
                                <p>XXXX XXXX XXXX</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
    
  )
}

export default Home