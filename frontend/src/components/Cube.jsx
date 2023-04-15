import React from 'react';
import Images from './Imgimport';

const Cube = () => {
    return (
        <>
            <div className='col-md-4 col-sm-6 col-6 cube-main-container'>
                <div className="cube-container">
                    <div className="topface">
                        <img src={Images.Cube2} alt='' className='img-fluid' />
                    </div>
                    <div className="cube">
                        <span className="span1">
                            <img src={Images.Cube1} alt='' className='img-fluid' />
                        </span>
                        <span className='span2'>
                            <img src={Images.Cube2} alt='' className='img-fluid' />
                        </span>
                        <span className='span3'>
                            <img src={Images.Cube1} alt='' className='img-fluid' />
                        </span>
                        <span className='span4'>
                            <img src={Images.Cube2} alt='' className='img-fluid' />
                        </span>
                    </div>
                </div>
                <div className="shadow1">
                    <img src={Images.Shadow} alt='' />
                </div>
            </div>
        </>
    )
}

export default Cube