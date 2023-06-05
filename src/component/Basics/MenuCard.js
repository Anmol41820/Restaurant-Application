import React from 'react'

const MenuCard = ({ menuData }) => {


    return (
        <>
            <section className='main-card--cointainer'>
            {menuData.map((curElem) => {
                return (
                    <>
                        <div className='card-container' key={curElem.id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <sapn className="card-number card-circle subtle">{curElem.id}</sapn>
                                    <sapn className="card-author subtle">{curElem.category}</sapn>
                                    <h2 className='card-title'> {curElem.name} </h2>
                                    <span className='card-description subtle'>
                                        {curElem.description}
                                    </span>
                                    <div className='card-read'>Read</div>
                                </div>
                                <img src={curElem.image} alt="images" className='card-media' />

                                <span className='card-tag subtle'>Order Now</span>

                            </div>

                        </div>
                    </>
                );


            })}
            </section>
        </>
    )
}

export default MenuCard