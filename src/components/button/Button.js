import './Button.scss' ;
 
/*
1. Default 

2. Inverted 

3. Google Sign in 
*/ 

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in' ,
    inverted: 'inverted',
}



const Button = ({children , buttonType , ...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>{children}</button>
    )
}

export default Button;