import cart from '../assets/cart1.png'

export const CartWidget = () => {

    return(

    <div className='cartClass'>

    <>
    <img src={cart} alt="Cart" width={50} />
    <span>2</span>
    </>
    
    </div>

    );

};